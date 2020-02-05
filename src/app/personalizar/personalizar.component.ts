import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { ApiService } from '../api.service';
import { Title } from '@angular/platform-browser';

import * as THREE from 'three';
import GLTFLoader from 'three-gltf-loader';
import {OrbitControls} from 'three-orbitcontrols-ts';


@Component({
  selector: 'app-personalizar',
  templateUrl: './personalizar.component.html',
  styleUrls: ['./personalizar.component.css']
})
export class PersonalizarComponent implements OnInit {
  @ViewChild('rendererContainer') rendererContainer: ElementRef;

  renderer = new THREE.WebGLRenderer({ alpha: false });
  scene = null;
  camera = null;
  mesh = null;
  loader = null;
  object = null;
  ambientLight = null;
  directionalLight = null;
  textureLoader = null;
  texture = null;
  local_texture = '../assets/img3.png';
  controls = null;

  container = null;
  w = null;
  h = null;
  
  caneca = "../assets/caneca.gltf";


  source = "../../assets/img2.png";

  color = "red";
  local = "../../assets/img2.png";
  local_aba = "../../assets/img_aba.png";

  artescanecas = [{}];
  artescanecasNova = [{}];
  categoriasarte = [{}];

  constructor(private api:ApiService,private title: Title) {
    this.scene = new THREE.Scene();

    this.getArtesCanecas();
    this.getCategoriasArte();

    this.ambientLight = new THREE.AmbientLight( 0xcccccc );
    this.scene.add( this.ambientLight );

    this.directionalLight = new THREE.DirectionalLight( 0xffffff );
    this.directionalLight.position.set( 0, 1, 1 ).normalize();
    this.scene.add( this.directionalLight );	
    
    this.add_gltf(this.local_texture);

   }


  getArtesCanecas = () => {
    this.api.getAllArtesCanecas().subscribe(
      data => {
        this.artescanecas = data;
      },
      error => {
        console.log(error)
      }
    )
  }

  getCategoriasArte = () => {
    this.api.getAllCategoriasArte().subscribe(
      data => {
        this.categoriasarte = data;
      },
      error => {
        console.log(error)
      }
    )
  }


  teste(cat_id){
    console.log(cat_id);
    this.artescanecasNova = [{}];
    this.artescanecas.forEach(element => {
      
      if (cat_id == element["categorias"]) {
        
        var id = element["id"];
        var code = element["code"];
        var slug = element["slug"];
        var image = element["image"];
        var image_thumb = element["image_thumb"];

        this.artescanecasNova.push({id,code,slug,image,image_thumb});
      }

      if (element["categorias"].length > 1){
        element["categorias"].forEach(element2 => {
          if (cat_id == element2) {
            var id = element["id"];
            var code = element["code"];
            var slug = element["slug"];
            var image = element["image"];
            var image_thumb = element["image_thumb"];

            this.artescanecasNova.push({id,code,slug,image,image_thumb});
          }
        })

      }

      
    })
    this.artescanecasNova.shift();
    console.log(this.artescanecasNova);
  }
  ngOnInit() {
    this.title.setTitle('Visualize sua caneca em 3D. Monte sua caneca online - Brindes Personalizados em Teresina e todo Brasil!');
  }


  ngAfterViewInit() {
    // this.renderer.setSize(window.innerWidth/2, window.innerHeight/2);
    // this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
    // this.animate();

    // document.body.appendChild( this.container );

    this.container = document.getElementById("canvas");
    this.w = this.container.offsetWidth;
    this.h = this.container.offsetHeight;

    // this.camera = new THREE.PerspectiveCamera( 25, window.innerWidth / window.innerHeight, 1, 20000 );
    this.camera = new THREE.PerspectiveCamera( 25, this.w / this.h, 1, 20000 );
    // camera = new THREE.PerspectiveCamera( 75, w / h, 2, 1000 );
    this.camera.position.set( 1, 1, 20 );

    this.controls = new OrbitControls( this.camera, this.renderer.domElement ); 
    this.controls.update();
    this.controls.minDistance = 10;
    this.controls.maxDistance = 50;

    





    this.renderer.setClearColor( 0xC5C5C3 );
    this.renderer.setPixelRatio( window.devicePixelRatio );
    this.renderer.setSize(this.w,this.h);
    // this.rendererContainer.nativeElement.appendChild(this.renderer.domElement);
    this.container.appendChild(this.renderer.domElement);
    this.animate();
  }
  animate() {
      window.requestAnimationFrame(() => this.animate());
      // this.object.rotation.y += 0.01;
      this.controls.update();
      this.controls.minDistance = 10;
      this.controls.maxDistance = 50;
      this.renderer.render(this.scene, this.camera);
  }

  add_gltf(artecaneca){
    this.textureLoader = new THREE.TextureLoader();
    this.texture = this.textureLoader.load(artecaneca);
    this.texture.flipY = false;
    // If texture is used for color information, set colorspace.
    this.texture.encoding = THREE.sRGBEncoding;
    // UVs use the convention that (0, 0) corresponds to the upper left corner of a texture.
    this.texture.flipY = false;
    
    this.loader = new GLTFLoader();
    this.loader.load( this.caneca, gltf => { 
			this.object = gltf.scene;
      this.object.scale.set( 2, 2, 2 );			   
      this.object.position.x = 0;				    //Position (x = right+ left-) 
      this.object.position.y = 0;				    //Position (y = up+, down-)
      this.object.position.z = 0;				    //Position (z = front +, back-)
      // this.object.rotation.x = 0.2;

      this.object.traverse((child) => {
			
        if (child.isMesh && child["name"] == "Cylinder_1") {
            child.material.map = this.texture;
            // console.log("child",child);
        }
    });

      this.scene.add( this.object );
    });
  }
  
}

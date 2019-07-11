import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-personalizar',
  templateUrl: './personalizar.component.html',
  styleUrls: ['./personalizar.component.css']
})
export class PersonalizarComponent implements OnInit {

  title = 'app';
  source = "../../assets/img2.png";

  color = "red";
  local = "../../assets/img1.png";
  local_aba = "../../assets/img_aba.png";

  artescanecas = [{}];
  artescanecasNova = [{}];
  categoriasarte = [{}];

  constructor(private api:ApiService) {
    this.getArtesCanecas();
    this.getCategoriasArte();
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
  }

}

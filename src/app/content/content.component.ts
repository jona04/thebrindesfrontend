import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  categorias = [{}];
  brindes = [{}];
  selectedMovie;

  constructor(private api:ApiService,
    private router: Router,
    private titleService: Title){

    this.getCategorias();
    this.getBrindes();
  }
  public setTitle( newTitle: string) {
    this.titleService.setTitle( newTitle  );
  }

  getCategorias = () => {
    this.api.getAllCategorias().subscribe(
      data => {
        this.categorias = data;
      },
      error => {
        console.log(error)
      }
    )
  }

  getBrindes = () => {
    this.api.getAllBrindes().subscribe(
      data => {
        this.brindes = data;
      },
      error => {
        console.log(error)
      }
    )
  }

  ngOnInit() {
    // const options = {
    //   stringsElement: '#typed-strings',
    //   strings: ['Visualize sua caneca em 3D. Experimente!', 'Escolha sua arte, com apenas 1 clique.'],
    //   typeSpeed: 100,
    //   backSpeed: 200,
    //   backDelay: 300,
    //   smartBackspace: true,
    //   fadeOut: true,
    //   showCursor: false,
    //   startDelay: 1000,
    //   loop: true
    //   };
    //   const typed = new Typed('.typing-element', options);
  }

  onClickSubmitSearch(busca) {
    this.router.navigateByUrl('/busca/'+busca.campo_busca);
  }

  
}

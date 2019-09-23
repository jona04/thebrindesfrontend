import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { Title }     from '@angular/platform-browser';
import Typed from 'typed.js';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  source = "../../assets/img2.png";

  color = "red";
  local = "../../assets/img2.png";
  local_aba = "../../assets/img_aba.png";
  
  categorias = [{}];
  brindes = [{}];
  selectedMovie;

  constructor(private api:ApiService,
    private router: Router,
    private title: Title){

    this.getCategorias();
    this.getBrindes();
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
    this.title.setTitle('The Brindes - Brindes Personalizados em Teresina e todo Brasil!');
    const options = {
      
      stringsElement: '#typed-strings',
      strings: ['Agora você pode visualizar alguns de nossos modelos de canecas diretamente de nosso site.', 'Basta clicar no botão abaixo e escolher um modelo.'],
      typeSpeed: 40,
      backSpeed: 200,
      backDelay: 1300,
      smartBackspace: true,
      fadeOut: true,
      showCursor: false,
      startDelay: 1000,
      loop: true
      };
      const typed = new Typed('.typing-element', options);
  }

  onClickSubmitSearch(busca) {
    this.router.navigateByUrl('/busca/'+busca.campo_busca);
  }

  
}

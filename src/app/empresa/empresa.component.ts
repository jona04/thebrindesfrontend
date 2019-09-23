import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {

  constructor(private router: Router,private title: Title) {

   }

   onClickSubmitSearch(busca) {
    this.router.navigateByUrl('/busca/'+busca.campo_busca);
  }

  

  ngOnInit() {
    this.title.setTitle('Saiba mais sobre a The Brindes - Brindes Personalizados em Teresina e todo Brasil!');
  }

}

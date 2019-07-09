import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  categorias = [{}];
  
  constructor(private router: Router,private api:ApiService) { 
    this.getCategorias();
  }

  ngOnInit() {
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


  gotoEmpresa() {
    this.router.navigate(['empresa']);
   }
}

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-brindes',
  templateUrl: './brindes.component.html',
  styleUrls: ['./brindes.component.css']
})
export class BrindesComponent implements OnInit {

  categorias = [{}];
  brindes = [{}];
  categoria = {id:0,name:"",slug:""};
  brinde = {id:0,name:"",slug:"",subname:"",details:"",image:"",created_at:"",uploaded_at:"",is_active:"",categoria:"",fornecedores:""};
  param_brinde;
  param_cat;
  orcamento;

  constructor(private api:ApiService, private route: ActivatedRoute,private router: Router,private title: Title) { 
    this.param_brinde = this.route.snapshot.paramMap.get("brinde");
    this.param_cat = this.route.snapshot.paramMap.get("categoria");
    this.orcamento = {name:'',email:'',phone:'',quantity:0};

    this.getAllBrindes();
    this.getAllCategorias();
    
  }

  getAllCategorias = () => {
    this.api.getAllCategorias().subscribe(
      data => {
        this.categorias = data;
        this.categorias.forEach(element => {
          if (this.param_cat == element["slug"]) {
              this.categoria.id = element["id"];
              this.categoria.name = element["name"];
              this.categoria.slug = element["slug"];
          }
        })
      },
      error => {
        console.log(error)
      }
    )
  }
  getAllBrindes = () => {
    this.api.getAllBrindes().subscribe(
      data => {
        this.brindes = data;
        this.brindes.forEach(element => {
          if (this.param_brinde == element["slug"]) {
              this.brinde.id = element["id"];
              this.brinde.name = element["name"];
              this.brinde.slug = element["slug"];
              this.brinde.subname = element["subname"];
              this.brinde.details = element["details"];
              this.brinde.image = element["image"];
              this.brinde.created_at = element["created_at"];
              this.brinde.uploaded_at = element["uploaded_at"];
              this.brinde.uploaded_at = element["suploaded_atlug"];
              this.brinde.is_active = element["is_active"];
              this.brinde.categoria = element["categoria"];
              this.brinde.fornecedores = element["fornecedores"];
          }
        });
        this.title.setTitle(this.brinde.name+' - The Brindes - Brindes Personalizados em Teresina e todo Brasil!');

      },
      error => {
        console.log(error)
      }
    )
  }

  onClickSubmitOrcamento(orcamento) {
    // alert(orcamento.brindes)
    this.api.createOrcamento(orcamento).subscribe(
      data => {
        alert("Muito Obrigado!! Seu orçamento foi enviado com sucesso. Aguarde em quanto respondemos. Ou entre em contato em: (86) 99436-7255")
        
      },
      error => {
        console.log(error)
      }
    )
 }

 onClickSubmitSearch(busca) {
  this.router.navigateByUrl('/busca/'+busca.campo_busca);
}

  ngOnInit() {
  }

}

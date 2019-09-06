import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-arte-cliente',
  templateUrl: './arte-cliente.component.html',
  styleUrls: ['./arte-cliente.component.css']
})
export class ArteClienteComponent implements OnInit {


  title = 'app';
  source = "../../assets/img2.png";

  color = "red";
  local = "../../assets/img2.png";
  local_aba = "../../assets/img_aba.png";


  param_busca: string;
  artecliente = {id:0,image:""};
  constructor(private api:ApiService,private route: ActivatedRoute,private router: Router) {
    this.param_busca = this.route.snapshot.paramMap.get("id");

    this.getArteCliente(this.param_busca);
   }

  ngOnInit() {
  }

  getArteCliente(id) {
    this.api.getArteClienteCaneca(id).subscribe(
      data => {
        this.artecliente.id = data["id"];
        this.artecliente.image = data["image"];

        let re = /\ /gi;
        var new_local = data["image"].replace(re, "+"); 
        this.local = new_local;
      },
      error => {
        console.log(error)
      }
    )
  }

}

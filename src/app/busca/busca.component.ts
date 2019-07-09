import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent implements OnInit {
  param_busca;
  brindes = [{}];

  constructor(private api:ApiService,private route: ActivatedRoute,private router: Router) {
    this.param_busca = this.route.snapshot.paramMap.get("busca");

    this.getBusca(this.param_busca);
   }

  ngOnInit() {
  }


  getBusca(busca) {
    this.api.search(busca).subscribe(
      data => {
        this.brindes = data;
      },
      error => {
        console.log(error)
      }
    )
  }

  onClickSubmitSearch(busca) {
    this.router.navigateByUrl('/busca/'+busca.campo_busca);
  }

}

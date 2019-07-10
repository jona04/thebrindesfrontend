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
  private myDiv;

  color = "red";
  local = "../../assets/img1.png";
  local_aba = "../../assets/img_aba.png";

  artescanecas = [{}];

  constructor(private api:ApiService) {
    this.getArtesCanecas();
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

  ngOnInit() {
  }

}

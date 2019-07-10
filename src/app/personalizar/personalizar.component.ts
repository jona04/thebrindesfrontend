import { Component, OnInit } from '@angular/core';

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
  private local = "../../assets/img1.png";
  local_aba = "../../assets/img_aba.png";


  constructor() { }

  ngOnInit() {
  }

}

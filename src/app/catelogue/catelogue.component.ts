import { Component, OnInit, Input } from '@angular/core';
import { Bien } from '../bien';

@Component({
  selector: 'app-catelogue',
  templateUrl: './catelogue.component.html',
  styleUrls: ['./catelogue.component.css']
})
export class CatelogueComponent implements OnInit {

  @Input() bien : Bien
  constructor() { }

  ngOnInit() {
  }

  changeBien(bien){
    bien.etat = !bien.etat
  }

}

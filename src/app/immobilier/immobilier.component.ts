import { Component, OnInit } from '@angular/core';

import { BienService } from '../bien.service'
import { Observable } from 'rxjs/Observable'
import { Bien} from '../bien';
@Component({
  selector: 'app-immobilier',
  templateUrl: './immobilier.component.html',
  styleUrls: ['./immobilier.component.css']
})
export class ImmobilierComponent implements OnInit {

  selectBien : Bien
  biens : Bien[];
  constructor(private bienservice : BienService) { }

  ngOnInit() {
    this.bienservice.getAllBien().subscribe(bien =>{this.biens = bien})
  }

}

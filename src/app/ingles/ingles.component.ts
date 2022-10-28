import { VidasComponent } from './../vidas/vidas.component';
import { Component, Inject, inject, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-ingles',
  templateUrl: './ingles.component.html',
  styleUrls: ['./ingles.component.scss']
})
@Injectable({
  providedIn: 'root'
})

export class InglesComponent implements OnInit {
  changeVidas = 0

  constructor(
    private vidas: VidasComponent
    ) { }

  ngOnInit(): void {

  }

  async trocar(){

    this.changeVidas = this.vidas.vidas = 3
    this.vidas.vidas = 3
    console.log(this.changeVidas)
  }
}

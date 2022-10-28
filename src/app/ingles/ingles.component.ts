import { VidasComponent } from './../vidas/vidas.component';
import { Component, Inject, inject, OnInit, Output } from '@angular/core';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-ingles',
  templateUrl: './ingles.component.html',
  styleUrls: ['./ingles.component.scss']
})

export class InglesComponent implements OnInit {
  @Output() vidasPai: number = 3

  constructor() { }

  ngOnInit(): void {

  }

  trocar(){
    const vida1 = 1
    this.vidasPai -= -vida1 
    if(this.vidasPai = 0){
      console.log('vidas zeradas');
      
    }
  }

}

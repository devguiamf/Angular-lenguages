import { Component, OnInit, Inject, Output, Input } from '@angular/core';
import { Injectable } from '@angular/core';
@Component({
  selector: 'app-vidas',
  templateUrl: './vidas.component.html',
  styleUrls: ['./vidas.component.scss']
})

export class VidasComponent implements OnInit {

  @Input() public vidas = 3
  constructor() {}

  ngOnInit(): void {
    console.log();
  }






}

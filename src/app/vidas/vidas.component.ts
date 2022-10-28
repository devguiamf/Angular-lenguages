import { Component, OnInit, Inject } from '@angular/core';
import { Injectable } from '@angular/core';
@Component({
  selector: 'app-vidas',
  templateUrl: './vidas.component.html',
  styleUrls: ['./vidas.component.scss']
})
@Injectable({
  providedIn: 'root'
})
export class VidasComponent implements OnInit {
  vidas = 0
  constructor() { this.vidas}

  ngOnInit(): void {
  }


}

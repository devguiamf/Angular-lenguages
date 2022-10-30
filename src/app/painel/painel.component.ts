import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ativaTab(id:string){
    let idEng = document.getElementById('eng')
    const idEs = document.getElementById('es')
    const idCh = document.getElementById('ch')
    const idAle = document.getElementById('ale')


    if(id == 'eng'){
      idEng!.style.opacity = '100%';
      idEs!.style.opacity = '50%';
      idCh!.style.opacity = '50%';
      idAle!.style.opacity = '50%';
    }
    if(id == 'es'){
      idEng!.style.opacity = '50%';
      idEs!.style.opacity = '100%';
      idCh!.style.opacity = '50%';
      idAle!.style.opacity = '50%';
    }
    if(id == 'ch'){
      idEng!.style.opacity = '50%';
      idEs!.style.opacity = '50%';
      idCh!.style.opacity = '100%';
      idAle!.style.opacity = '50%';
    }
    if(id == 'ale'){
      idEng!.style.opacity = '50%';
      idEs!.style.opacity = '50%';
      idCh!.style.opacity = '50%';
      idAle!.style.opacity = '100%';
    }



  }
}

import { Frase } from '../../model/Frase.Model';
import { Component,OnInit } from '@angular/core';
import { FRASES } from './frase-mock';

import {MatSnackBar} from '@angular/material/snack-bar'


@Component({
  selector: 'app-ingles',
  templateUrl: './ingles.component.html',
  styleUrls: ['./ingles.component.scss']
})

export class InglesComponent implements OnInit {
  index: number = 0
  fraseTraduzida: string = ''


  public frases: Frase[] = FRASES

  public progresso: number = 0

  public vidas: number = 3

  constructor(private snackCtrl: MatSnackBar) { }

  ngOnInit(): void {

  }

  atualizaRespota(letras: Event){
    this.fraseTraduzida = (<HTMLInputElement>letras.target).value

  }

  verificaFrase(){
    if(this.fraseTraduzida == this.frases[this.index].frasePt){

      // mensagem de acrto
      this.snackCtrl.open('Correto','X',{
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'center',
        panelClass: 'correto'
      })

      //proxima frase
      this.index ++

      //progresso da barra
      this.progresso = this.progresso + (100 / this.frases.length)


      //Limpar input
      this.fraseTraduzida = ''


    }else{
      this.snackCtrl.open('Errado, verifique os acentos e pontos','X',{
        duration: 4000,
        verticalPosition: 'top',
        horizontalPosition: 'center',
        panelClass: 'errado'
      })
      this.vidas = this.vidas -1
      console.log(this.vidas);

     if (this.vidas == -1) {
      this.index = 0
      this.fraseTraduzida = ''
     }
    }

  }

  reload(){
    this.vidas = 3
    this.progresso = 0
  }


}

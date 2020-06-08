import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public home = "Home";
  public sobre = "Sobre";
  public servico = "Serviço";
  public blog = "Blog";
  public contato = "Contato";
  public numero = 0;
  public exibirConteudo = false;


  constructor() { }

  ngOnInit() {
  }


  incrementar(){
    this.numero++;
  }

  public toggleConteudo(){
    this.exibirConteudo = !this.exibirConteudo;
  } 

}

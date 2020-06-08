import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';


@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  formularioCadastro: FormGroup;

  constructor() {

  this.formularioCadastro = new FormGroup({
    nome: new FormControl(null, Validators.required),
    telefone: new FormControl(null, Validators.required),
    endereco: new FormControl(null, Validators.required)});
  }
ngOnInit() { }

  onSubmit() {
    const dados = `
    Nome: ${this.formularioCadastro.value.nome}
    Telefone: ${this.formularioCadastro.value.telefone}
    Endereço: ${this.formularioCadastro.value.endereco}`;

    console.log(dados);
  }
}



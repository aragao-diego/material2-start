import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {
  valor = "";
  pessoa:any = {
    nome: '',
    sobrenome: '',
    nomeCompleto: ''
  };

  preencherNomeCompleto($event){
    console.log('Focus', $event); 
    this.pessoa.nomeCompleto = this.pessoa.nome +' '+ this.pessoa.sobrenome;
  }

  constructor() { }

  ngOnInit() {
    this.pessoa = {
      nome: '',
      sobrenome: '',
      nomeCompleto: ''
    };
  }

}

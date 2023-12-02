import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dados-alunos',
  standalone: true,
  templateUrl: './dados-alunos.component.html',
  styleUrls: ['./dados-alunos.component.css'],
  imports:[
    CommonModule,]
})

export class DadosAlunosComponent implements OnInit {
  dados: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.obterDados();
  }

  obterDados() {
    this.http.get<any[]>('http://localhost:3001/aluno')
      .subscribe(data => {
        this.dados = data;
      }); }
    
      calcularMedia(rendimento: any): number {
        const disciplinas = Object.keys(rendimento);
        const totalNotas = disciplinas.reduce((acc, curr) => acc + rendimento[curr], 0);
        return totalNotas / disciplinas.length;
      }
    }
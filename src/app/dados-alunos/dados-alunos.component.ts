import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dados-alunos',
  standalone: true,
  templateUrl: './dados-alunos.component.html',
  styleUrls: ['./dados-alunos.component.css'],
  imports:[
    CommonModule,]
})
export class DadosAlunosComponent implements OnInit {
  dadosAlunos: any[] = []; 

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getDados().subscribe(
      (data: any[]) => {
        this.dadosAlunos = data;
      },
      error => {
        console.error('Ocorreu um erro na requisição:', error);
      }
    );
  }

  calcularMedia(rendimento: any): number {
    const disciplinas = Object.keys(rendimento);
    const totalNotas = disciplinas.reduce((acc, curr) => acc + rendimento[curr], 0);
    return totalNotas / disciplinas.length;
  }
}

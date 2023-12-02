import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-controle-acesso',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './controle-acesso.component.html',
  styleUrl: './controle-acesso.component.css'
})
export class ControleAcessoComponent {
  tipoUsuario: string = '';

  exibirConteudo(): string {
    switch (this.tipoUsuario) {
      case 'administrador':
        return 'Você tem permissão de administrador';
      case 'colaborador':
        return 'Você tem permissão de colaborador';
      case 'usuario':
        return 'Você tem permissão de usuário';
      default:
        return '';
    }
  }
}

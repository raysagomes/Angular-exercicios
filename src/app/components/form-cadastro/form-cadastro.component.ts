import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-cadastro.component.html',
  styleUrl: './form-cadastro.component.css'
})
export class FormCadastroComponent {
  nome: string = '';
  email: string = '';
  senha: string = '';

  onSubmit() {
    if (this.nome && this.email && this.senha) {
     alert(`Olá, ${this.nome}, seu cadastro foi realizado com sucesso.`);
    } else {
      alert('Olá, informe os campos corretamente.');
    }
  }
}

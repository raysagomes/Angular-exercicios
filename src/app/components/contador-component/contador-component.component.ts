import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contador-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contador-component.component.html',
  styleUrl: './contador-component.component.css'
})
export class ContadorComponentComponent {
  valorAtual: number = 0;

  aumentar() {
    this.valorAtual++;
  }

  diminuir() {
    if (this.valorAtual > 0) {
      this.valorAtual--;
    }
  }
}


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
  title = '2AV'; 
  contador = 0; 
  
  incrementCounter() {
    this.contador++;
 }

 decrementCounter() {
  if (this.contador > 0) {
  this.contador--;}
 }
}
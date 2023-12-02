import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponenteFilhoComponent } from "../componente-filho/componente-filho.component";

@Component({
    selector: 'app-componente-pai',
    standalone: true,
    templateUrl: './componente-pai.component.html',
    styleUrl: './componente-pai.component.css',
    imports: [CommonModule, ComponenteFilhoComponent]
})
export class ComponentePaiComponent {
  listaItens: string[] = ['Arroz', 'Feijão', 'Bananinha', 'Cuscuz', 'Açucar', 'Sal'];

}
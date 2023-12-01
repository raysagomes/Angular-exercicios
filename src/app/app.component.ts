import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContadorComponentComponent } from './components/contador-component/contador-component.component';
import { ListItemsComponent } from './components/list-items/list-items.component';
import { DadosAlunosComponent } from './dados-alunos/dados-alunos.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root', 
  standalone: true,
  imports: [CommonModule, RouterOutlet, ContadorComponentComponent, ListItemsComponent, DadosAlunosComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = '2AV';

  item = ['item1', 'item2', 'item3', 'aaaaaaaaaaaaaaaaa', 7];
}

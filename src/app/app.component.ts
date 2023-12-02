
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContadorComponentComponent } from './components/contador-component/contador-component.component';
import { ListItemsComponent } from './components/list-items/list-items.component';
import { FormCadastroComponent } from './components/form-cadastro/form-cadastro.component';
import { FormsModule } from '@angular/forms';
import { ControleAcessoComponent } from './components/controle-acesso/controle-acesso.component';
import { ComponentePaiComponent } from './components/componente-pai/componente-pai.component';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { AreaLogadaComponent } from './components/area-logada/area-logada.component';
import { DadosAlunosComponent } from './components/dados-alunos/dados-alunos.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ContadorComponentComponent, ListItemsComponent,FormCadastroComponent, FormsModule,ControleAcessoComponent
  ,FormLoginComponent, AreaLogadaComponent,ComponentePaiComponent, DadosAlunosComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Prova-Matheus-Garrido';
  
}

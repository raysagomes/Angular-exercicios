import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListItemsComponent } from '../components/list-items/list-items.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../api.service';
import { DadosAlunosComponent } from '../dados-alunos/dados-alunos.component';
import { ContadorComponentComponent } from '../components/contador-component/contador-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ListItemsComponent,
    DadosAlunosComponent,
    ContadorComponentComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class ModuloModule { }

import { Component, Input  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-list-items',
  standalone: true,
  imports: [CommonModule, AppComponent],
  templateUrl: './list-items.component.html',
  styleUrl: './list-items.component.css'
})
export class ListItemsComponent {

item= ['item1', 'item2', 'item3']  
}

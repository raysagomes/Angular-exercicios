import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ListItem {
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-list-items',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './list-items.component.html',
  styleUrl: './list-items.component.css'
})
export class ListItemsComponent {
  newItemText: string = '';
  items: ListItem[] = [];

  adicao() {
    if (this.newItemText.trim() !== '') {
      this.items.push({ text: this.newItemText, completed: false });
      this.newItemText = '';
      this.ordenarItens();
    }
  }

  remocao(index: number) {
    this.items.splice(index, 1);
  }

  conclusao(index: number) {
    this.items[index].completed = true;
  }

  private ordenarItens() {
    this.items.sort((a, b) => a.text.localeCompare(b.text));
  }
}
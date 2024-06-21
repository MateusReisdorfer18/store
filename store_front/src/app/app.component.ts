import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'store_front';
  showListCadastro: Boolean = false;

  toggleListCadastro(): void {
    this.showListCadastro = !this.showListCadastro;
  }
}

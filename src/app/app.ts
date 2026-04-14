import { Component, signal } from '@angular/core';
import { Cabecalho } from "./componentes/cabecalho/cabecalho";
import { Rodape } from "./componentes/rodape/rodape";
import { ListaLivroComponent } from "./componentes/lista-livros/lista-livros.component";
import { GeneroLiterarioComponent } from './componentes/genero-literario/genero-literario.component';

@Component({
  selector: 'app-root',
  imports: [Cabecalho, Rodape, ListaLivroComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('organo');
}

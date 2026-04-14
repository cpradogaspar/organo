import { Component, OnInit } from '@angular/core';
import { GeneroLiterario } from '../genero-literario/genero-literario.model';
import { Livro } from '../livro/livro';
import { Livros } from '../../mock-livros';
import { GeneroLiterarioComponent } from '../genero-literario/genero-literario.component';

@Component({
  selector: 'app-lista-livros',
  imports: [GeneroLiterarioComponent],
  templateUrl: './lista-livros.html',
  styleUrl: './lista-livros.css',
})
export class ListaLivroComponent implements OnInit {
  generos: GeneroLiterario[] = [];
  livrosPorGenero: Map<String, Livro[]> = new Map();

  ngOnInit() {
    this.livrosPorGenero = new Map();
    Livros.forEach((livro) => {
      const generoId = livro.genero.id
      if (!this.livrosPorGenero.has(generoId)) {
        this.livrosPorGenero.set(generoId, []);
      }
      this.livrosPorGenero.get(generoId)?.push(livro);
    });
    
    this.generos = [
      {id: 'ficcao', value: 'Ficção Científica', livros: this.livrosPorGenero.get('ficcao') || []},
      {id: 'fantasia', value: 'Fantasia', livros: this.livrosPorGenero.get('fantasia') || []},
      {id: 'romance', value: 'Romance', livros: this.livrosPorGenero.get('romance') || []},   
    ]
  }
}

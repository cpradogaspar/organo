import { Component } from '@angular/core';

@Component({
  selector: 'app-livro',
  imports: [],
  templateUrl: './livro.html',
  styleUrl: './livro.css',
})
export class Livro {

  alternarFavorito() {
    this.livro.favorito = !this.livro.favorito;
  }
  
  livro = {
    titulo: 'O Mundo Assombrado pelos Demônios',
    autoria: 'Carl Sagan',
    favorito: false,
    imagem: 'https://m.media-amazon.com/images/I/9165ewWUEPL.jpg'
  }
}

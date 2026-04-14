import { GeneroLiterario } from '../genero-literario/genero-literario.model';

export interface Livro {
  titulo: string;
  autoria: string;
  genero: GeneroLiterario;
  favorito: boolean;
  imagem: string;
}
import { Clube } from "./clube.model";
import { Pais } from "./pais.model";

export class Jogador {

    public id: Number;

    public nome: String;

    public clubeAtual: Clube;

    public nacionalidade: Pais;

    public dataNascimento: Date;

    public jogos: Number;

    public gols: Number;

    public assistencias: Number;

    public cartoesAmarelo: Number;

    public cartoesVermelho: Number;

    public valorMercado: Number;

    public imagem: String;

}

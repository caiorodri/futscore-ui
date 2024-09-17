import { ClubeModel } from "./clube.model";
import { PaisModel } from "./pais.model";

export class JogadorModel {

    public id: Number;

    public nome: String;

    public clubeAtual: ClubeModel;

    public nacionalidade: PaisModel;

    public dataNascimento: Date;

    public jogos: Number;

    public gols: Number;

    public assistencias: Number;

    public cartoesAmarelo: Number;

    public cartoesVermelho: Number;

    public valorMercado: Number;

    public imagem: String;

}

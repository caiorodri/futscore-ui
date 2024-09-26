import { ClubeModel } from "./clube.model";
import { PaisModel } from "./pais.model";
import { PosicaoModel } from "./posicao.model";

export class JogadorModel {

    public id: Number;

    public nome: String;

    public clubeAtual: ClubeModel;

    public nacionalidade: PaisModel;

    public dataNascimento: Date;

    public posicao: PosicaoModel;

    public jogos: Number;

    public gols: Number;

    public assistencias: Number;

    public cartoesAmarelo: Number;

    public cartoesVermelho: Number;

    public valorMercado: Number;

    public imagem: String;

    public clubes: ClubeModel[];

    public partidasRealizadas: ClubeModel[];

}

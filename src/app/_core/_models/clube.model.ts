import { JogadorModel } from "./jogador.model";
import { PaisModel } from "./pais.model";
import { PartidaModel } from "./partida.model";

export class ClubeModel {

    public id: Number;

    public nome: String;

    public pais: PaisModel;

    public anoFundacao: Date;

    public imagem: String;

    public jogadores: JogadorModel[];

    public partidasRealizadas: PartidaModel[];

    public proximasPartidas: PartidaModel[];

}

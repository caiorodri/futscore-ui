import { PaisModel } from "./pais.model";
import { PartidaModel } from "./partida.model";

export class ArbitroModel {

    public id: Number;
    public nome: String;
    public partidas: Number;
    public cartoesVermelho: Number;
    public cartoesAmarelo: Number;
    public partidasRealizadas: PartidaModel[];
    public proximasPartidas: PartidaModel[];
    public nacionalidade: PaisModel;

}

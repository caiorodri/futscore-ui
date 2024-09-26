import { PaisModel } from "./pais.model";
import { PartidaModel } from "./partida.model";

export class EstadioModel {

    public id: Number;

    public nome: String;

    public pais: PaisModel;

    public capacidade: Number;

    public partidas: PartidaModel[];

}

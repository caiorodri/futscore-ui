import { CampeonatoModel } from "./campeonato.model";
import { ClubeModel } from "./clube.model";
import { JogadorModel } from "./jogador.model";

export class ArtilhariaModel {

    public id: Number;

    public campeonato: CampeonatoModel;

    public jogador: JogadorModel;

    public clube: ClubeModel;

    public gols: Number;

    public assistencias: Number;
}

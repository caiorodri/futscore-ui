import { ClubeModel } from "./clube.model";
import { CompeticaoAnoModel } from "./competicao.ano.model";

export class CampeonatoModel {

    public id: Number;

    public competicaoAno: CompeticaoAnoModel;

    public clube: ClubeModel;

    public partidas: Number;

    public vitorias: Number;

    public empates: Number;

    public derrotas: Number;

    public golsFeitos: Number;

    public golsSofridos: Number;

    public punicao: Number;

}

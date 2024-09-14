import { Clube } from "./clube.model";
import { CompeticaoAno } from "./competicao.ano.model";

export class Campeonato {

    public id: Number;

    public competicaoAno: CompeticaoAno;

    public clube: Clube;

    public partidas: Number;

    public vitorias: Number;

    public empates: Number;

    public derrotas: Number;

    public golsFeitos: Number;

    public golsSofridos: Number;

    public punicao: Number;

}

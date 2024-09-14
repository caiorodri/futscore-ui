import { Campeonato } from "./campeonato.model";
import { Clube } from "./clube.model";
import { Jogador } from "./jogador.model";

export class Artilharia {

    public id: Number;

    public campeonato: Campeonato;

    public jogador: Jogador;

    public clube: Clube;

    public gols: Number;

    public assistencias: Number;
}

import { Arbitro } from "./arbitro.model";
import { Clube } from "./clube.model";
import { CompeticaoAno } from "./competicao.ano.model";
import { Estadio } from "./estadio.model";

export class Partida {

	public id: Number;

	public competicaoAno: CompeticaoAno;

	public clubeMandante: Clube;

	public clubeVisitante: Clube;

	public estadio: Estadio;

	public arbitro: Arbitro;

	public mandoCampoNeutro: Boolean;

	public quantidadeTorcedores: Number;

}

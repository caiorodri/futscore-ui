import { ArbitroModel } from "./arbitro.model";
import { ClubeModel } from "./clube.model";
import { CompeticaoAnoModel } from "./competicao.ano.model";
import { EstadioModel } from "./estadio.model";

export class PartidaModel {

	public id: Number;

	public competicaoAno: CompeticaoAnoModel;

	public clubeMandante: ClubeModel;

	public clubeVisitante: ClubeModel;

	public estadio: EstadioModel;

	public arbitro: ArbitroModel;

	public mandoCampoNeutro: Boolean;

	public quantidadeTorcedores: Number;

	public golsClubeMandante: Number;
	
	public golsClubeVisitante: Number;
	
	public partidaRealizada: Boolean;
	
	public dataPartida: Date;

	public horarioPartida: String;
}

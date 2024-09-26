import { CompeticaoFormatoModel } from "./competicao.formato.model";
import { CompeticaoModel } from "./competicao.model";
import { PartidaModel } from "./partida.model";

export class CompeticaoAnoModel {
    
    public id: Number;
    public competicao: CompeticaoModel;
    public competicaoFormato: CompeticaoFormatoModel;
    public quantidadeClube: Number;
    public ano: Date;
    public pontuacaoVitoria: Number;
    public pontuacaoEmpate: Number;
    public pontuacaoDerrota: Number;
    public partidas: PartidaModel[];

}

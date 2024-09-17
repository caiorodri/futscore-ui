import { CompeticaoFormatoModel } from "./competicao.formato.model";

export class CompeticaoAnoModel {
    
    public id: Number;
    public competicaoFormato: CompeticaoFormatoModel;
    public quantidadeClube: Number;
    public ano: Date;
    public pontuacaoVitoria: Number;
    public pontuacaoEmpate: Number;
    public pontuacaoDerrota: Number;

}

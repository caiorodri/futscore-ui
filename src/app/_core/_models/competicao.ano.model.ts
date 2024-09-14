import { CompeticaoFormato } from "./competicao.formato.model";

export class CompeticaoAno {
    
    public id: Number;
    public competicaoFormato: CompeticaoFormato;
    public quantidadeClube: Number;
    public ano: Date;
    public pontuacaoVitoria: Number;
    public pontuacaoEmpate: Number;
    public pontuacaoDerrota: Number;

}

import { CompeticaoAnoModel } from "./competicao.ano.model";
import { CompeticaoTipoModel } from "./competicao.tipo.model";
import { PaisModel } from "./pais.model";

export class CompeticaoModel {
    
    public id: Number;
    public nome: String;
    public competicaoTipo: CompeticaoTipoModel;
    public pais: PaisModel;
    public imagem: String;
    public competicoesAno: CompeticaoAnoModel[];

}

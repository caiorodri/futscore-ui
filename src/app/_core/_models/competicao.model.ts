import { CompeticaoTipo } from "./competicao.tipo.model";
import { Pais } from "./pais.model";

export class Competicao {
    
    public id: Number;
    public nome: String;
    public competicaoTipo: CompeticaoTipo;
    public pais: Pais;
    public imagem: String;

}

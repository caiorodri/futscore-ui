import { CompeticaoModel } from "./competicao.model";
import { ContinenteModel } from "./continente.model";

export class PaisModel {
    
    public id: Number;
    public nome: String;
    public continente: ContinenteModel;
    public imagem: String;
    public competicoes: CompeticaoModel[];
    
}

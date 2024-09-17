import { PaisModel } from "./pais.model";

export class ClubeModel {

    public id: Number;

    public nome: String;

    public pais: PaisModel;

    public anoFundacao: Date;

    public imagem: String;

}

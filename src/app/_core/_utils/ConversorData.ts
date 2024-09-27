export class ConversorData {

    public static converteData(dataConverter: Date): String{

        let data: Date = new Date(dataConverter);
        let ano: string = String(data.getFullYear());
        let mes: string = String(data.getMonth());
        let dia: string = String(data.getDate());
        
        if(Number(mes) < 10){

          mes = "0" + mes;

        }
        
        if(Number(dia) < 10){

          dia = "0" + dia;

        }
        
        let dataConvertida: string = ano + "-" + mes + "-" + dia;

        return dataConvertida;

    }

    public static converterHora(data: Date): String{

      let hora: String;
      let horaCompleta: String;
      let minutos: String;
  
      let novaData: Date = new Date(data);
  
      hora = String(novaData.getHours());
  
      if(hora.length == 1){
        hora = "0" + hora;
      }
  
      minutos = String(novaData.getMinutes());
  
      if(minutos.length == 1){
        minutos = "0" + minutos;
      }
  
      horaCompleta = hora + ":" + minutos;
  
      return horaCompleta;
  
    }

}
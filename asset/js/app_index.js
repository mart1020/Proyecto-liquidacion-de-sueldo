

function HorasExtras() {

    let SalarioBruto = parseFloat(document.getElementById("SalarioNeto").value);

    let HorasPorDia = parseFloat(document.getElementById("CantidadHorasAlDia").value);

    let CDiasPorSemana = parseFloat(document.getElementById("CantidadDiasPorSemana").value);



    var HorasPorMes,HorasPorSemana, ValorHora, HoraExtra50, HoraExtra100;

    HorasPorSemana = HorasPorDia*CDiasPorSemana;

    HorasPorMes = HorasPorSemana * 4;

    ValorHora = SalarioBruto/HorasPorMes;

    HoraExtra50 = ValorHora * 1.50;

    HoraExtra100 = ValorHora * 2;


    let resultado_hora = document.getElementById("resultado_hora");
    resultado_hora.value = ValorHora.toFixed(2);

    let resultado_horaExtra50 = document.getElementById("resultado_horaExtra50");
    resultado_horaExtra50.value = HoraExtra50.toFixed(2);

   let resultado_horaExtra100 = document.getElementById("resultado_horaExtra100");
    resultado_horaExtra100.value = HoraExtra100.toFixed(2);

}


function Vacaciones() {

    let SalarioBruto = parseFloat(document.getElementById("SalarioNeto").value);

    let CDiasDeVacaciones = parseFloat(document.getElementById("CantidadDiasDeVacaciones").value);



    var Monto, Vacaciones;

    Monto = SalarioBruto / 25;

    Vacaciones = Monto * CDiasDeVacaciones;


    let resultado_vacaciones = document.getElementById("resultado_vacaciones");
    resultado_vacaciones.value = Vacaciones.toFixed(2);
    
}

function Feriado() {

   let ValorDiaDeTrabajo = parseFloat(document.getElementById("valorDiaTrabajo").value);

   ValorDiaFeriado = ValorDiaDeTrabajo * 2;

   let resultado_feriado = document.getElementById("resultado_feriado");

   resultado_feriado.value = ValorDiaFeriado.toFixed(2);
    
    
}

function Sac(){

    let MejorSalarioBruto = parseFloat(document.getElementById("MejorSalarioNeto").value);

    let MesesTrabajados = parseFloat(document.getElementById("MesesTrabajados").value);

    

    Aguinaldo = MejorSalarioBruto / 12 * MesesTrabajados;



    let resultado_sac = document.getElementById("resultado_sac");

    resultado_sac.value = Aguinaldo.toFixed(2);


}

function Antiguedad(){

    let MejorSalarioBruto = parseFloat(document.getElementById("SalarioNeto").value);

    let AnosDeAntig = parseFloat(document.getElementById("AnosDeAntig").value);

    let empleador = document.getElementById("empleador").value;


    Cobro = MejorSalarioBruto * AnosDeAntig;

    if (empleador == false) {

        if (AnosDeAntig < 5){

            Cobro = MejorSalario * 2;

        } else{ 

            Cobro = MejorSalario * 3;
        }

        
        
    }

    let resultado_antig= document.getElementById("resultado_antig");

    resultado_antig.value = Cobro.toFixed(2);

}

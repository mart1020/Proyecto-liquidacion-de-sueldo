

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


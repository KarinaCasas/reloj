(function (){
    var ver_hora = function () {
        var mihora = new Date();
        var horas = mihora.getHours();
        var minutos = mihora.getMinutes();
        var segundos = mihora.getSeconds();
        var am_pm;

        var pHora = document.getElementById('horas');
        var pminutos = document.getElementById('minutos');
        var pam_pm = document.getElementById('am_pm');

        if (horas >= 12) {
            horas = horas - 12;
            am_pm = 'PM';

        } else {
           am_pm = 'AM';

        } 
        if (horas == 0) {
            horas = 12;
        }
        pHora.textContent = horas;
        pam_pm.textContent = am_pm;

        if (minutos < 10) {
            minutos = "0" + minutos};
        pminutos.textContent = minutos;

    };
    ver_hora();
    
}())
   

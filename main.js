document.getElementById('bmiForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var peso = parseFloat(document.getElementById('peso').value);
    var estatura = parseFloat(document.getElementById('estatura').value) / 100;

    var imc = peso / (estatura * estatura);

    var resultado = '';

    if (isNaN(imc)) {
      resultado = 'Por favor, ingresa valores válidos para peso y estatura.';
    } else {
      resultado = 'Tu IMC Es: ' + imc.toFixed(2) + '<br>';
      if (imc < 18.5) {
        resultado += 'Bajo peso';
      } else if (imc < 25) {
        resultado += 'Peso normal';
      } else if (imc < 30) {
        resultado += 'Sobrepeso';
      } else {
        resultado += 'Obesidad';
      }
    }

    document.getElementById(Resultado='resultado').innerHTML = resultado;
  });
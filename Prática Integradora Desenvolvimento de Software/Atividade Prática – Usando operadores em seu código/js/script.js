const NEW_DIV = document.createElement('div');
document.getElementById('btn-verificar').addEventListener('click', verificarValor);

function verificarValor(){
  const hr = document.querySelectorAll('hr')[1];
  const inputs = document.querySelectorAll('input');
  let somarValores = 0;

  inputs.forEach(el => {
    somarValores += +el.value;
  });

  console.log(somarValores);

  if(somarValores > 10)
    NEW_DIV.innerHTML = `Valor acima de 10.`;
  else
    NEW_DIV.innerHTML = `Valor abaixo de 10.`;

  hr.after(NEW_DIV);
}
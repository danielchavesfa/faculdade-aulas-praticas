const NEW_DIV = document.createElement('div');
document.querySelector('#btn-mostrar').addEventListener('click', mostrarDados);

function mostrarDados(){
  const IN_NAME = document.querySelector('#inName').value;
  const IN_SOBRENOME = document.querySelector('#inSobrenome').value;
  const IN_EMAIL = document.querySelector('#inEmail').value;
  const HR = document.querySelectorAll('hr')[1];

  if(IN_EMAIL == '' || IN_SOBRENOME == '' || IN_NAME == ''){
    window.alert('[ERRO] Faltam dados! Por favor, verifique se os campos estão preenchidos corretamente como nome, sobrenome e email.')
  } else {
    NEW_DIV.innerHTML = `Nome: ${IN_NAME} ${IN_SOBRENOME}<br>Email: ${IN_EMAIL}`;
    HR.after(NEW_DIV); 
  }
   
}
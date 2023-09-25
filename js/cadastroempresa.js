function salvarInformacoes(formId) {
    //Verificando qual é a proxima página
    let nextPage = formId.split('-')
    nextPage = `cadastroempresa${nextPage[1]}.html`

    //Capturando o formulário
    const form = document.getElementById(formId);
    const formData = {};

    //Resgatando valor dos inputs
    const inputs = form.querySelectorAll("input");
    inputs.forEach((input) => {
      formData[input.name] = input.value;
    });

    //Armazenando no localStorage
    localStorage.setItem(formId, JSON.stringify(formData));
    
    //Redirecionando para a próxima página
    window.location.href = nextPage; 
  }
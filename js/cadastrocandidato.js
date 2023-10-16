function salvarInformacoes(event,formId) {
  // Prevenir o envio padrão do formulário
  event.preventDefault();
    // Capturando o formulário
    console.log(formId)
    const form = document.getElementById(formId);
    const formData = {};
    // Resgatando valor dos inputs e atribuindo chaves
    const inputs = form.querySelectorAll("input");
    inputs.forEach((input) => {
      // Use os atributos "name" dos inputs como chaves
      formData[input.name] = input.value;
    });

    // Verificando se já existe um objeto 'Final Json' no localStorage
    const existingFinalJson =
      JSON.parse(localStorage.getItem("Infos_candidato")) || {};

    // Mesclando os novos dados com os dados existentes (se houver)
    const finalJson = { ...existingFinalJson, ...formData };

    // Armazenando o objeto finalJson no localStorage
    localStorage.setItem("Infos_candidato", JSON.stringify(finalJson));

    // Verificando qual é a próxima página
    let nextPage = formId.split("-");
    nextPage = `../cadastrocandidato/cadastrocandidato${+nextPage[1] + 1}.html`;
    console.log(nextPage);

    // Redirecionando para a próxima página usando window.location.href
    if( +formId.split('-')[1] ==5){
        localStorage.setItem('auth1',JSON.stringify(true))
        localStorage.setItem('type',JSON.stringify('candidato'))
        window.location.href = '/fifityplus/candidato.html'
      }
    else{
      // Redirecionando para a próxima página usando window.location.href
      window.location.href = nextPage;
      }
}

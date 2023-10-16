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
        JSON.parse(localStorage.getItem("Infos_login")) || {};
  
      // Mesclando os novos dados com os dados existentes (se houver)
      const finalJson = { ...existingFinalJson, ...formData }; // b478275
  
      // Armazenando o objeto finalJson no localStorage
      localStorage.setItem("Infos_login", JSON.stringify(finalJson));
  
      // Verificando qual é a próxima página
      if(localStorage.getItem("Infos_candidato") && localStorage.getItem("Infos_empresa")){
        if(localStorage.getItem("Infos_candidato")["email"] == localStorage.getItem("Infos_login")["email"] && localStorage.getItem("Infos_candidato")["senha"] == localStorage.getItem("Infos_login")["senha"]){
        localStorage.setItem('auth1',JSON.stringify(true))
        window.location.href = "/fifityplus/candidato.html"
      }
      else if(localStorage.getItem("Infos_empresa")["email"] == localStorage.getItem("Infos_login")["email"] && localStorage.getItem("Infos_empresa")["senha"] == localStorage.getItem("Infos_login")["senha"]){
        localStorage.setItem('auth',JSON.stringify(true))
        window.location.href = "/fifityplus/empresa.html"
      }
      else{
        window.alert("Não encontrado!")
      }
    }
    else if(localStorage.getItem("Infos_empresa")){
      if(localStorage.getItem("Infos_empresa")["email"] == localStorage.getItem("Infos_login")["email"] && localStorage.getItem("Infos_empresa")["senha"] == localStorage.getItem("Infos_login")["senha"]){
        localStorage.setItem('auth',JSON.stringify(true))
        window.location.href = "/fifityplus/empresa.html"
      }
      else{
        window.alert("Não encontrado!")
      }
    }
    else if(localStorage.getItem("Infos_candidato")){
        if(localStorage.getItem("Infos_candidato")["email"] == localStorage.getItem("Infos_login")["email"] && localStorage.getItem("Infos_candidato")["senha"] == localStorage.getItem("Infos_login")["senha"]){
        localStorage.setItem('auth1',JSON.stringify(true))
        window.location.href = "/fifityplus/candidato.html"
      }
      else{
        window.alert("Não encontrado!")
      }
    }
    else{
        window.alert("Nenhum dado!")
    }
  }
  
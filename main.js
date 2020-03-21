    var inputElement=document.querySelector("input#adicionar")
    var numeros = []
    var lista=document.querySelector(".lista")
    var analisador=document.querySelector(".analisador")

    
    function adicionar(){
         if(!(inputElement.value > 0 && inputElement.value <= 100)){
          alert("ERRO!!! Adicione um número entre 1 e 100")
        }else {

          var resulNumero = Number(inputElement.value)
  
          numeros.push(resulNumero) 
          var numerosAdicionados = document.createElement("li")
          lista.appendChild(numerosAdicionados)
          numerosAdicionados.innerHTML=numeros[numeros.length-1]
          inputElement.value=""
          inputElement.focus()
        }

    }

    function analisadorButton(){
      
      var arrayOrganize = numeros.sort(function(a,b){ 
      return a - b
      })

      var soma = 0
            for(var i=0; i < arrayOrganize.length ; i++){
        soma = soma + arrayOrganize[i]
      
    }
          analisador.innerHTML=`O maior número é ${arrayOrganize[arrayOrganize.length-1]};<p>
          O menor número é ${arrayOrganize[0]};<p>
          O total de números cadastrados foram ${arrayOrganize.length};<p>
          A soma dos números é ${soma};<p>
          A média dos números é ${soma/arrayOrganize.length}.`
         


  }

  console.log(analisadorButton)
  
      function limpar(){
        analisador.innerHTML=""
        numeros=[]
        lista.innerHTML=""
  }
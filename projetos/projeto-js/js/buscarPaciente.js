var botaoAdicionar = document.querySelector("#buscar-pacientes");
var ativo = false


botaoAdicionar.addEventListener("click", function(){
    
    if(!ativo){
        var xhr = new XMLHttpRequest();
    
        xhr.open("GET", "https://gsenadevhub.github.io/Aps2---Front-End/projetos/projeto-js/data.json");
        
        xhr.addEventListener("load", function(){
            
            if(xhr.status == 200){
                var resposta = xhr.responseText;
                var pacientes = JSON.parse(resposta);
                console.log(pacientes);
                pacientes.forEach((element)=>{
                    const tr = criarPaciente(element);
                    tbody.appendChild(tr);
            });
            }
    
        })
        ativo = true;
        xhr.send();
    }
})

document.getElementById("validarbutton").
    addEventListener("click", function () {
        //alert("Deu certo!!!");
        const cpf = document.getElementById("cpfInput").value;

        if(validaCPF(cpf)) {
            document.getElementById("resultado").textContent = "cpf válido"
        } else {
            document.getElementById("resultado").textContent = "cpf inválido"
        }
        
    })


function validaCPF(vrCPF){
    return vrCPF.length === 11 & !isNaN(vrCPF);
}
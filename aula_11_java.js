
function teste(){
    const componente = document.querySelector("#txtBusca");
    const result = document.querySelector("#txtResposta");
    let temp = componente.value;
    result.value = temp;
    componente.value = "";
}
  
function teste2(){
    const txt1 = document.querySelector("#txt1");
    const txt2 = document.querySelector("#txt2");
    const result = document.querySelector("#resposta2");

    let temp;
    temp = txt1.value + txt2.value;
    result.value = temp;
    txt2.value = "";
    txt1.value = "";
}
    const txt4 = document.querySelector("#n1");
    const txt5 = document.querySelector("#n2");
    const resultado3 = document.querySelector("#resposta3");
    const add = document.querySelector("#add");
    const menos = document.querySelector("#menos");
    const mult = document.querySelector("#mult");
    const divid = document.querySelector("#divid");

    add.addEventListener("click", function() {
        let n1 = parseInt(txt4.value);
        let n2 = parseInt(txt5.value);
        let temp = n1 + n2;
        resultado3.value = temp;
        txt4.value = "";
        txt5.value = "";
    });

    menos.addEventListener("click", function() {
        let n1 = parseInt(txt4.value);
        let n2 = parseInt(txt5.value);
        let temp = n1 - n2;
        resultado3.value = temp;
        txt4.value = "";
        txt5.value = "";
    });

    mult.addEventListener("click", function() {
        let n1 = parseInt(txt4.value);
        let n2 = parseInt(txt5.value);
        let temp = n1 * n2;
        resultado3.value = temp;
        txt4.value = "";
        txt5.value = "";
    });

    divid.addEventListener("click", function() {
        let n1 = parseInt(txt4.value);
        let n2 = parseInt(txt5.value);
        if (n2 !== 0) {
            let temp = n1 / n2;
            resultado3.value = temp;
        } else {
            resultado3.value = "Erro: Divisão por zero!";
        }
        txt4.value = "";
        txt5.value = "";
    });

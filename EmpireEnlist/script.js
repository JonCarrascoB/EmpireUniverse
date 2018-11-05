class Recluta {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    
    
}
let reclutas = [];

function enlist() {
    reclutas.push(new Recluta(document.getElementById("name").value, document.getElementById("address").value));
    let result = "";
    let cont = 1;
    reclutas.forEach(function (reclut) {
        result += "<li id='" + cont + "'>" + reclut.name + " " + reclut.address + "<input type='button' value='tu destino' onclick='destin("+cont+")' />";
        document.getElementById("destino").innerHTML = result;
        cont++;
    });
}

function destin(cont) {
    document.getElementById("your destin").innerHTML = '<img src="legion501.jpg" alt="organigrama" title="Legion 501, your site"/>';
}



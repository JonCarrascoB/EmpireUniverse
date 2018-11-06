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

//Ejercicio de planetas
//(function arranca() {
    let xhr = new XMLHttpRequest();
    let url = 'https://swapi.co/api/planets/';
    xhr.open("GET", url);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.response);
            //let dates = JSON.parse(xhr.response).planeta;
            //pedirDatos(dates);
            //mostrarPlaneta();
        }
        else if (xhr.readyState === 4 && xhr.status === 400) {
            //document.getElementById("info").innerHTML = "fecha incorrecta";
        }
    }

    function pedirDatos(dates) {
        let index = 0;
        let xhrDates = new XMLHttpRequest();
        xhrDates.open("GET", dates[index]);
        xhr.onreadystatechange = function () {
            if (xhrDates.readyState === 4 && xhrDates.status === 200) {
                index++;
                if (index < dates.lenght) {
                    xhrDates.open("GET", dates[index]);
                    xhrDates.send();
                }
            }
        };
        xhrDates.send();
    }
//}());



function mostrarPlaneta() {
    let result = "<li>" + name + "</li>";
    document.getElementById("planet").innerHTML = result;
    }
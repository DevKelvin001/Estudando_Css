let btnA = document.getElementById("link");
let body = document.getElementById("body");


btnA.addEventListener("click", function () {
    body.innerText = `VOCÊ FOI HACKEADO`;

    let condicion = true;

    if(condicion){
        setTimeout(
            function startRun() {
                let i = 0;

                while(i < 10) {
                    body.innerHTML += `
                    <h1> TROUXA! </h1>
                    `;
                }
            }, 3600
        );
    }
    else {
        return console.log("Falhou...");
    }
});

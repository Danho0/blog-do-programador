function valida() {
    if (window.confirm("Você prefre backend?") == true) {
        window.location.href = "nodeJS.html"
    }
}
function retorna() {
    if ((volta.value) == true) {
        window.location.href = "index.html"
    } else {
        alert("Você só pode retornar com o checbox selecionado")
    }
}
function atualizaimg(){
    if (passatempo.value == 'Minecraft'){
        document.getElementById('imgs').src=("./images/minecraft.jpg")
    }else if (passatempo.value == 'Super-Mario'){
        document.getElementById('imgs').src=("./images/spmario.jpg")
    }else{
        document.getElementById('imgs').src=("./images/amongus.jpg")
    }
    }

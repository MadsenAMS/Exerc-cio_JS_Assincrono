function sendText(){
    inputText = document.getElementById("TextToSend").value;
    url = `api/api.html?text=${inputText}`;
    window.open(url, "_blank");
}

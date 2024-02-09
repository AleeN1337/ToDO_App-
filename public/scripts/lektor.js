document.getElementById('czytaj').addEventListener('click', function() {
    
    let tekstDoCzytania = document.body.innerText;

    
    let lektura = new SpeechSynthesisUtterance(tekstDoCzytania);

    
    window.speechSynthesis.speak(lektura);
});

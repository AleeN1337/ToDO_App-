function zmienRozmiarCzcionki(delta) {
    Array.from(document.querySelectorAll('*')).forEach(function(element) {
        const style = window.getComputedStyle(element);
        const fontSize = parseFloat(style.fontSize);

        element.style.fontSize = (fontSize + delta) + 'px';
    });
}

// Zwiększ rozmiar czcionki o 1px
document.getElementById('powieksz').addEventListener('click', function() {
    zmienRozmiarCzcionki(1);
});

// Zmniejsz rozmiar czcionki o 1px
document.getElementById('zmniejsz').addEventListener('click', function() {
    zmienRozmiarCzcionki(-1);
});

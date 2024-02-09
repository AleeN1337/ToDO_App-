let czyKontrastowe = false;
let oryginalneStyle = [];

function zapiszOryginalneStyle() {
    document.querySelectorAll('*').forEach((element, index) => {
        oryginalneStyle[index] = {
            backgroundColor: element.style.backgroundColor,
            color: element.style.color
        };
    });
}

function przywrocOryginalneStyle() {
    document.querySelectorAll('*').forEach((element, index) => {
        element.style.backgroundColor = oryginalneStyle[index].backgroundColor;
        element.style.color = oryginalneStyle[index].color;
    });
}

function przelaczKontrastowe() {
    if (!czyKontrastowe) {
        
        zapiszOryginalneStyle();

        
        document.querySelectorAll('*').forEach(element => {
            element.style.backgroundColor = 'black';
            element.style.color = 'yellow';
        });

        czyKontrastowe = true;
    } else {
       
        przywrocOryginalneStyle();
        czyKontrastowe = false;
    }
}

document.getElementById('przelaczKontrast').addEventListener('click', przelaczKontrastowe);

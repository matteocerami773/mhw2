
/*bottone "scopri di più"*/

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('readMoreBtn').addEventListener('click', function() {
        let extraContent = document.querySelector('#extra');
        extraContent.classList.toggle('hidden');
        
        if (!extraContent.classList.contains('hidden')) {
            this.textContent = "Mostra meno"; 
        } else {
            this.textContent = "Scopri di più"; 
        }
    });

    readMoreBtn.addEventListener('click', function() {
        if (!extraContent.classList.contains('hidden')) {
            extraContent.classList.add('hidden'); 
            readMoreBtn.textContent = "Scopri di più"; 
        }
    });
});


/*Cambiare l'immagine (la prima immagine della pagina)*/

document.addEventListener('DOMContentLoaded', function() {
    let Image = document.getElementById('change');
    
    
    let Image1 = "im2/1.jpeg";
    let Image2 = "im2/changeimage.avif";
    
    // Controlla quale immagine è attualmente mostrata e la cambia
    Image.addEventListener('click', function() {
        if(Image.src.includes(Image1)) {
            Image.src = Image2; 
        } else {
            Image.src = Image1; 
        }
    });
});

/*Apre un menu laterale sulla sinistra (pulsante menu)*/

document.addEventListener('DOMContentLoaded', function() {
    let sidebar = document.getElementById('sidebar');
    let openSidebarBtn = document.getElementById('menuBtn');

    openSidebarBtn.addEventListener('click', function() {
        
        sidebar.classList.toggle('show');
    });
});


// Nome: Stefano 
// Cognome: Caramagno 
// Matricola: 1000038343 
// Email Istituzionale: CRMSFN02R13I754M@studium.unict.it 

// Menu a Tendita dell'Header
document.addEventListener("DOMContentLoaded", function() {
    var dropdownMenu = document.getElementById("menu-a-tendina-header");
    var dropdownContent = document.getElementById("contenuto-menu-a-tendina-header");

    dropdownMenu.addEventListener("click", function() {
        dropdownContent.classList.toggleContent("show");
    });

    window.addEventListener("click", function(event) {
        if (!dropdownMenu.contains(event.target)) {
            dropdownContent.classList.remove("show");
        }
    });

});

// Barra di Scorrimento della Nav Bar
document.addEventListener('DOMContentLoaded', function() {
    var container = document.getElementById('flex-container1-nav-section2');
    var leftButton = document.getElementById('pulsante-scorrimento-a-sinistra');
    var rightButton = document.getElementById('pulsante-scorrimento-a-destra');
    var scrollStep = 750; 

    leftButton.addEventListener('click', function() {
        var currentPosition = container.scrollLeft;
        var newPosition = currentPosition - scrollStep;

        container.scrollTo({
            left: newPosition,
            behavior: 'smooth'
        });
    });

    rightButton.addEventListener('click', function() {
        var currentPosition = container.scrollLeft;
        var newPosition = currentPosition + scrollStep;
        var maxScroll = container.scrollWidth - container.clientWidth;

        if (newPosition > maxScroll) {
            newPosition = maxScroll;
        }
        
        container.scrollTo({
            left: newPosition,
            behavior: 'smooth'
        });
    });
});

// Pulsante Filtri della Nav Bar
document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById('filtri-modale');
  
    var btn = document.getElementById("pulsante-filtri");
  
    btn.addEventListener("click", function() {
      modal.style.display = "block";
    });
  
    var span = document.getElementsByClassName("close")[0];
  
    span.addEventListener("click", function() {
      modal.style.display = "none";
    });
  
    window.addEventListener("click", function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
});

// Cuore del Main Content
document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById("cuore-modale");

    var span = document.getElementsByClassName("close")[0];

    document.querySelector('.cuore-sovrapposto').addEventListener('click', function(event) {
        modal.style.display = "block";
        event.preventDefault(); 
    });

    span.addEventListener('click', function() {
        modal.style.display = "none";
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});

// Barra di Ispirazione Viaggi del Footer
document.addEventListener("DOMContentLoaded", function() {
    var initialContent = document.getElementById('contenuto1-pulsante-barra-ispirazione-viaggi');
    if (initialContent) {
        initialContent.classList.add('active');
    }
});

function toggleContent(contentId) {
    var contents = document.querySelectorAll('.flex-container-footer-section1');
    contents.forEach(function(content) {
        content.classList.remove('active');
    });

    var selectedContent = document.getElementById(contentId);
    selectedContent.classList.add('active');

    var buttons = document.querySelectorAll('.pulsante-barra-ispirazione-viaggi');
    buttons.forEach(function(button) {
        button.style.fontWeight = 'normal';
    });
    var selectedButton = document.getElementById('pulsante-' + contentId);
    selectedButton.style.fontWeight = 'bold';
}

document.addEventListener('DOMContentLoaded', function() {
    var firstContentId = 'contenuto1-pulsante-barra-ispirazione-viaggi';
    toggleContent(firstContentId);
});

// Mostra Altro del Contenuto della di Barra di Ispirazione Viaggi del Footer
document.addEventListener("DOMContentLoaded", function() {
    
    const toggleButton = document.getElementById("pulsante-mostra-altro-footer");
    const hiddenElements = document.querySelectorAll(".lista-visibile .elemento-nascosto");
    
    toggleButton.addEventListener("click", function() {

        hiddenElements.forEach(function(element) {
            element.classList.toggle("elemento-nascosto");
        });

        toggleButton.style.display = "none";
    });
});
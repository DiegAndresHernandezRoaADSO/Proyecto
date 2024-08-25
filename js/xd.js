document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".sidebar-links li a");
    const sections = document.querySelectorAll(".section");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();

            // Ocultar todas las secciones
            sections.forEach(section => section.classList.remove("active"));

            // Mostrar la sección correspondiente
            const targetSection = document.querySelector(link.getAttribute("href"));
            targetSection.classList.add("active");
        });
    });
});



function showCategory(categoryId) {
    // Ocultar todas las secciones de categorías
    let sections = document.querySelectorAll('.category-section');
    sections.forEach(function(section) {
        section.classList.remove('active');
    });

    // Mostrar la sección seleccionada
    let selectedSection = document.getElementById(categoryId);
    selectedSection.classList.add('active');
}

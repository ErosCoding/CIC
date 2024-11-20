const abrirMenuBtn = document.querySelector(".container-usuario");
    const menu = document.getElementById("menu-container");

    function abrirMenu() {
        menu.classList.toggle("aberto");
    }

    if (abrirMenuBtn) {
        abrirMenuBtn.addEventListener("click", abrirMenu);
    }

    if (menu && abrirMenuBtn) {
        document.addEventListener('click', function (event) {
            if (!menu.contains(event.target) && !abrirMenuBtn.contains(event.target)) {
                menu.classList.remove("aberto");
            }
        });
    }
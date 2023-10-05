document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll(".menu-item");
    const menuContents = document.querySelectorAll(".menu-content");

    menuItems.forEach(function(item, index) {
        item.addEventListener("click", function(event) {
            event.preventDefault();
            hideAllContents();
            showContent(index + 1);
            menuItems.forEach(function(menuItem) {
                menuItem.style.backgroundColor = ""; // Очистка фона
                menuItem.style.color = ""; // Очистка цвета текста
            });
            item.style.backgroundColor = "#fff"; // Цвет фона для активного элемента
            item.style.color = "black"; // Цвет текста для активного элемента
        });
    });

    function hideAllContents() {
        menuContents.forEach(function(content) {
            content.style.display = "none";
        });
    }

    function showContent(index) {
        const selectedContent = document.getElementById(`item-${index}`);
        if (selectedContent) {
            selectedContent.style.display = "block";
        }
    }

    // По умолчанию отобразим первый элемент
    hideAllContents();
    showContent(1);
    const toggleButton = document.getElementById("toggle-menu");
    const sideMenu = document.querySelector(".side-menu");

    toggleButton.addEventListener("click", function() {
        sideMenu.classList.toggle("open");
    });
});
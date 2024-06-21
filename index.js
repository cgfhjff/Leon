document.addEventListener('DOMContentLoaded', function() {
    const icon = document.getElementById('icon');
    const menu = document.getElementById('menu');

    icon.addEventListener('click', function(event) {
        event.stopPropagation();
        menu.classList.toggle('active');
    });

    document.addEventListener('click', function(event) {
        if (!menu.contains(event.target) && !icon.contains(event.target)) {
            menu.classList.remove('active');
        }
    });
});
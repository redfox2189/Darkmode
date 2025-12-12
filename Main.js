document.addEventListener('DOMContentLoaded', () => {
    const darkMode = document.getElementById('darkModeToggle');
    const body = document.body;
    const Menubtn = document.getElementById('MenuBtn')

    //Read Dark Mode Setting
    if (localStorage.getItem("darkmode") === "Dark") {
        body.classList.add('dark-mode');
        darkMode.checked = true;
    }
    else if (localStorage.getItem("darkmode") === "Light") {
        body.classList.remove('dark-mode');
        darkMode.checked = false;
    }

    //Set Dark Mode Setting
    darkMode.addEventListener('change', () => {
        if (darkMode.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('darkmode', 'Dark');
        } 
        else if (!darkMode.checked) {
            localStorage.setItem('darkmode', 'Light');
            body.classList.remove('dark-mode');
        }
    });
});
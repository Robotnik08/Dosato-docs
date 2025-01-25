if (localStorage.getItem('dark-mode') === 'dark') {
    document.body.classList.add('dark');
}

const darkmode_toggle = document.getElementById('dark-mode-toggle');

if (darkmode_toggle) {
    darkmode_toggle.addEventListener('click', () => {
        if (document.body.classList.contains('dark')) {
            document.body.classList.remove('dark');
            localStorage.setItem('dark-mode', 'light');
        } else {
            document.body.classList.add('dark');
            localStorage.setItem('dark-mode', 'dark');
        }
    });
}
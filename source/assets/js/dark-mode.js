if (localStorage.getItem('dark-mode') === 'dark') {
    document.body.classList.add('dark');
}

const darkmode_toggle = document.createElement('button');
darkmode_toggle.innerHTML = '🌙'
darkmode_toggle.classList.add('dark-mode-toggle');
document.body.appendChild(darkmode_toggle);

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
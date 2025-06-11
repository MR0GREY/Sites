    const themeButton = document.getElementById('themeButton');
    let isDarkTheme = false;
    const darkThemeBackground = '#333'; // Темная тема
    const ligthThemeBackground = 'linear-gradient(to right, #4a148c, #004d40)'; // Градиент

    themeButton.addEventListener('click', () => {
        isDarkTheme = !isDarkTheme;
        if (isDarkTheme) {
            document.body.style.background = darkThemeBackground;
            document.body.style.color = 'white';
        } else {
            document.body.style.background = ligthThemeBackground;
            document.body.style.color = 'white';
        }
    });
export class themeSwitcher {
    selectors = {
        switchThemeButton: '[data-js-theme-switcher]',
    }

    themes = {
        dark: 'dark',
        light: 'light'
    }

    stateClasses = {
        isDarkTheme: 'is-dark-theme'
    }

    starageKey = 'theme'

    constructor() {
        this.switchThemeButtonElement = document.querySelector(this.selectors.switchThemeButton)
        this.setInitialTheme()
        this.bindEvents()
    }

    get isDarkThemeCached() {
        return localStorage.getItem(this.starageKey) === this.themes.dark;
    }

    setInitialTheme() {
        document.documentElement.classList.toggle(
            this.stateClasses.isDarkTheme,
            this.isDarkThemeCached
        )
    }

    onClick = () => {
        localStorage.setItem(
            this.starageKey,
            this.isDarkThemeCached ? this.themes.light : this.themes.dark
        )
        
        document.documentElement.classList.toggle(this.stateClasses.isDarkTheme)
    }

    bindEvents() {
        this.switchThemeButtonElement.addEventListener('click', this.onClick)
    }
}
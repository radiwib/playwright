exports.configTestLevel = class configTestLevel {

    constructor(browser, context, chromium) {
        this.browser = browser
        this.context = context
        this.chromium = chromium
        this.config_openBrowser = chromium.launch({
            headless: false,
            slowMo: 500
        })
        this.config_browserContext = browser.newContext({
            recordVideo: {
                dir: 'videos/',
                size: {width: 800, height: 600}
            }
        })
    }

    async openBrowser() {
        const browser = await this.config_openBrowser;
    }

    async setBrowserContext() {
        const context = await this.config_browserContext;
    }
}
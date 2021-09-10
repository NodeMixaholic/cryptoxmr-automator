//Sparksammy's CryptoXMR.net Automator
const puppeteer = require('puppeteer')

async function openBrowser() {
    const browser = await puppeteer.launch({headless: false})
    const page = await browser.newPage()
    await page.goto("https://cryptoxmr.net/home")
    const a = await page.evaluate(() => {
        while (true) {
            await new Promise(resolve => setTimeout(resolve, 500));
            var containerObj = document.getElementById("roll_button_container")
            var bonusContainerObj = document.getElementById("bonus_container")
            var buttonObj = containerObj.firstElementChild
            var bonusButtonObj = bonusContainerObj.firstElementChild
            if ( (typeof buttonObj !== 'undefined') && (buttonObj != "")) {
                getClaim()
            } else if ((typeof bonusButtonObj !== 'undefined') && (bonusButtonObj != "")) {
                getBonus()
            }
        }
    })

    while (true) {
        await new Promise(resolve => setTimeout(resolve, 500));
        page.setDefaultNavigationTimeout(9999999);
        await page.waitForNavigation()
        const a = await page.evaluate(() => {
            while (true) {
                await new Promise(resolve => setTimeout(resolve, 500));
                var containerObj = document.getElementById("roll_button_container")
                var bonusContainerObj = document.getElementById("bonus_container")
                var buttonObj = containerObj.firstElementChild
                var bonusButtonObj = bonusContainerObj.firstElementChild
                if ( (typeof buttonObj !== 'undefined') && (buttonObj != "")) {
                    getClaim()
                } else if ((typeof bonusButtonObj !== 'undefined') && (bonusButtonObj != "")) {
                    getBonus()
                }
            }
        })
    }

}
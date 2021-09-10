//Sparksammy's CryptoXMR.net Automator
//Replace line 11 with YOUR address
const puppeteer = require('puppeteer')

async function openBrowserAndRun() {
    const browser = await puppeteer.launch({headless: true})
    const page = await browser.newPage()
    await page.goto("https://cryptoxmr.net/home")
    try {
        const a = await page.evaluate(() => {
            const address = "48Xo7oSc2LUEoxonLuHEzGRtaUNRiEVkvdj553GzpoP9NQG2k1BUzx21koNSP1vYqsQfAX2bQ7G1pSkFUEbNG9LJ5dYEnG3" //replace with YOUR xmr address
            document.getElementsByName("xmr_address")[0].value = address
            document.getElementById("registerForm").getElementsByTagName("button")[0].click()
        })
    } catch {
        console.log("this is fine.")
    }
    try {
        const b = await page.evaluate(() => {
            async function autoxmr() {
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
            }
            autoxmr()
        })
    } catch {
        console.log("error in my code lol")
    }
    console.log(`As long as this is open, collecting XMR.`)
    while (true) {
        await new Promise(resolve => setTimeout(resolve, 500));
        page.setDefaultNavigationTimeout(9999999);
        await page.waitForNavigation()
        try {
            const c = await page.evaluate(() => {
                async function autoxmr() {
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
                }
                autoxmr()
            })
        } catch {
            console.log("more errors.")
        }
    }

}
openBrowserAndRun();
//Sparksammy's CryptoXMR.net Automator
//Replace line 11 with YOUR address
const puppeteer = require('puppeteer')
var count = 0

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
        console.log("this is not fine.")
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
                    if (getComputedStyle(containerObj)["display"] != "none") {
                        getClaim()
                        await new Promise(resolve => setTimeout(resolve, 2500)).catch(err => console.log(err));
                        location.reload()
                    } else if (getComputedStyle(bonusContainerObj)["display"] != "none") {
                        getBonus()
                    }
                }
            }
            autoxmr()
        })
    } catch {
        console.log("error in my code lol")
        process.exit(0)
    }
    console.log(`As long as this is open, collecting XMR.`)
    
    while (true) {
        await new Promise(resolve => setTimeout(resolve, 500)).catch(err => console.log(err)); //just in case ;)
        try {
            let xmr_balance = await page.evaluate(() => document.querySelector('#xmr_balance').innerText);
            console.log(xmr_balance);
        } catch {
            console.log("")
        }
        try {
            const c = await page.evaluate(() => {
                async function autoxmr() {
                    while (true) {
                        await new Promise(resolve => setTimeout(resolve, 500));
                        var containerObj = document.getElementById("roll_button_container")
                        var bonusContainerObj = document.getElementById("bonus_container")
                        var buttonObj = containerObj.firstElementChild
                        var bonusButtonObj = bonusContainerObj.firstElementChild
                        if (getComputedStyle(containerObj)["display"] != "none") {
                            getClaim()
                            await new Promise(resolve => setTimeout(resolve, 2500)).catch(err => console.log(err));
                            location.reload()
                        } else if (getComputedStyle(bonusContainerObj)["display"] != "none") {
                            getBonus()
                            await new Promise(resolve => setTimeout(resolve, 2500)).catch(err => console.log(err));
                            location.reload()
                        }
                    }
                }
                autoxmr()
            })
        } catch {
            console.log("errors. (did you exit out of the page?)")
            process.exit(0)
        }
        if (count > 1800) {
            process.exit(0)
        } else {
            count++
        }
    }

}
openBrowserAndRun();

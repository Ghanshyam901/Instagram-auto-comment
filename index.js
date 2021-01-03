

const puppeteer = require('puppeteer');
const data = require("./config.json");
let noOfPost = process.argv[2];
(async function () {

    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://www.instagram.com', { waitUntil: "networkidle2" });         
//taking input used id and password and login
    await page.type("input[name='username']", data.user, { delay: 100 });
    await page.type("input[name='password']", data.pwd, { delay: 100 });
    await page.click("button[type='submit']");

    await Promise.all([
        page.waitForNavigation({ waitUntil: "networkidle2" }),
        page.click("button[type='submit']"),
    ]);

/// for searching userid where you want to like all pics
    await page.type("input[placeholder='Search']", "mohd__areeb__");
    await page.waitForSelector(".drKGC .fuqBx a", { visible: true });
    await Promise.all([
        page.waitForNavigation({ waitUntil: "networkidle2" }),
        page.click(".drKGC .fuqBx a"),
    ]);



    await page.waitForSelector("._9AhH0", { visible: true ,delay:4000});
    await Promise.all([
        page.waitForNavigation({ waitUntil: "networkidle2" },{ delay: 100 }),
        
        page.click("._9AhH0"),

    

    ]);
    let i = 0;
    do {
    await page.waitForSelector(".RxpZH .X7cDz", { visible: true ,delay:100});
        await page.click(".RxpZH .X7cDz");
        await page.type("textarea[placeholder='Add a comment…']","go to hell...",{delay :100});
        // await page.waitForSelector(".drKGC .fuqBx a", { visible: true });
        // await page.waitForSelector(".sqdOP .yWX7d .y3zKF");
        await page.click(".RxpZH .X7cDz .y3zKF",{delay:200});

        
        await Promise.all([
            page.waitForNavigation({ waitUntil: "networkidle2",visible:true,visible:true,delay:4000}),
            page.click("._65Bje.coreSpriteRightPaginationArrow"),
        ]);
        
      
        i++;
        
    } while (i < noOfPost) {
    }

})();
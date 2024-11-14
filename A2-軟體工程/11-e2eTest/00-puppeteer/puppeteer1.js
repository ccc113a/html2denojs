import puppeteer from "https://deno.land/x/puppeteer_plus/mod.ts";

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.goto("https://example.com");
await page.screenshot({ path: "example.png" });

await browser.close();
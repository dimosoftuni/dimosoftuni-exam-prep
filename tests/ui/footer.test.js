const { test, expect } = require('@playwright/test');

const baseUrl = process.env.URL || 'https://dimosoftuni-boardgames.onrender.com';

console.log("The current URL is: ", baseUrl);

test('Check footer', async ({ page }) => {
    await page.goto(`${baseUrl}`);  
    const footer = await page.$('footer');
    const text = await footer.textContent();
    expect(text).toContain('© 2023 - Software Engineering and DevOps regular exam');
  });
  
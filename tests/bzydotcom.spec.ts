import { test, expect } from '@playwright/test';

test('TestCase:1 --> Open Beazley.com Homepage and title validate and Who we are links', async ({ page }) => {
  
  await page.goto('https://www.beazley.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Beazley Group | Specialist Business Insurance/);

  // Click header >> text=Who we are
  await page.locator('header >> text=Who we are').click();
  
  // Expects the URL to contain who-we-are.
  await expect(page).toHaveURL('https://www.beazley.com/who-we-are');

});

test('TestCase:2 --> Navaigates to Insights and Claims ', async ({ page }) => {
  
    await page.goto('https://www.beazley.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Beazley Group | Specialist Business Insurance/);
  
    // Click header >> text=Insights & ideas
  await page.locator('header >> text=Insights & ideas').click();
  await expect(page).toHaveURL('https://www.beazley.com/beazley_academy.html');

  // Click header >> text=Claims
  await page.locator('header >> text=Claims').click();
  await expect(page).toHaveURL('https://www.beazley.com/claims_x42946.html');

  // Click text=USA Select your location London Market USA Asia Pacific Canada (English) Canada  >> span
  await page.locator('text=USA Select your location London Market USA Asia Pacific Canada (English) Canada  >> span').click();
  
  });

  
test('TestCase:3 --> Select London Market and Navigates to Other Pages ', async ({ page }) => {
  
    await page.goto('https://www.beazley.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Beazley Group | Specialist Business Insurance/);
  
  // Click text=USA Select your location London Market USA Asia Pacific Canada (English) Canada  >> span
  await page.locator('text=USA Select your location London Market USA Asia Pacific Canada (English) Canada  >> span').click();

  // Click text=London Market >> nth=0
  await page.locator('text=London Market').first().click();
  
  // Verify the London-market page
  await expect(page).toHaveURL('https://www.beazley.com/london_market.html');

   
  });

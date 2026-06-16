const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test('Positive Login using POM', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.goto();

  await loginPage.login(
    'standard_user',
    'secret_sauce'
  );

  await expect(page).toHaveURL(/inventory/);
});

test('Negative Login using POM', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.goto();

  await loginPage.login(
    'standard_user',
    'wrongpass'
  );

  await expect(loginPage.error).toBeVisible();
});
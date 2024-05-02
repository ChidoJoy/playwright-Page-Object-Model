import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login'

test('test', async ({ page }) => {

//create a constant with an instance of the class

    const Login = new LoginPage(page)

    await Login.gotoLoginPage()
    await Login.login('standard_user','secret_sauce')

//   await page.goto('https://www.saucedemo.com/');
//   await page.locator('[data-test="username"]').click();
//   await page.locator('[data-test="username"]').fill('standard_user');
//   await page.locator('[data-test="password"]').click();
//   await page.locator('[data-test="password"]').fill('secret_sauce');
//   await page.locator('[data-test="login-button"]').click();
// 

});
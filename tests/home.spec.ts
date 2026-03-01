import { test } from '@playwright/test';
import { HomePage } from '../pages/homePage';

test('Validate Holland America Home Page', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigate();
  await homePage.acceptCookies();
  await homePage.validatePageTitle();
  await homePage.validateURL();
  await homePage.validateLogoVisible();
  await homePage.validateNavigationLinks();
  await homePage.validateLanguageSelector();

});
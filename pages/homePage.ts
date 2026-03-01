import { Page, Locator, expect } from '@playwright/test';

export class HomePage {

  readonly page: Page;
  readonly acceptAllButton: Locator;
  readonly cookiePopup: Locator;
  readonly logo: Locator;
  readonly bookCruise: Locator;
  readonly destinationsLink: Locator;
  readonly languageSelector: Locator;

  constructor(page: Page) {
    this.page = page;

    this.acceptAllButton = page.locator('#onetrust-accept-btn-handler');
    this.cookiePopup = page.locator('#onetrust-banner-sdk');
    this.logo = page.locator('[data-automation-id="en-Logo"]');
    this.bookCruise = page.getByRole('button', { name: 'Book Cruises' });
    this.destinationsLink = page.locator('[data-id="destinations"]');
    this.languageSelector = page.locator('(//a[@aria-label="English Language Selected"])[1]');
  }

  async navigate() {
    await this.page.goto('https://www.hollandamerica.com/en');
  }

  async acceptCookies() {
    try {
      await this.acceptAllButton.waitFor({ state: 'visible', timeout: 5000 });
      await this.acceptAllButton.click();
      await expect(this.cookiePopup).toBeHidden();
    } catch {
      console.log('Cookie popup not displayed');
    }
  }

  async validatePageTitle() {
    await expect(this.page).toHaveTitle(/Holland America/);
  }

  async validateURL() {
    await expect(this.page).toHaveURL(/hollandamerica/);
  }

  async validateLogoVisible() {
    await expect(this.logo).toBeVisible();
  }

  async validateNavigationLinks() {
    await expect(this.bookCruise).toBeVisible();
    await expect(this.destinationsLink).toBeVisible();
  }

  async validateLanguageSelector() {
    await expect(this.languageSelector).toBeVisible();
  }
}
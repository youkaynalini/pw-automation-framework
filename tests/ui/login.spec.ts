import { test, expect } from '../../fixtures';

test('valid login lands on inventory @smoke', async ({ loginPage, page }) => {
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await expect(page).toHaveURL(/inventory/);
});
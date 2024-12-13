import {test, expect} from '@playwright/test'

test.describe('UI Test Automation Playground', () => {
    test('Домашнаяя страница', async ({page}) => {
        await page.goto('http://uitestingplayground.com/');

        await expect(page).toHaveTitle('UI Test Automation Playground');

        await page.pause();

        const sections = ['Dynamic ID', 'Class Attribute', 'Hidden Layers', 'Load Delay', 'AJAX Data', 'Client Side Delay', 'Click', 'Text Input']

        sections.forEach(async () => {
            await expect(page.locator('[id="overview"]')).toContainText('Dynamic ID')
        });
    });
});

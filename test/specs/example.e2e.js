import LoginPage from  '../pageobjects/login.page';
import ProfilePage from '../pageobjects/profile.page';

describe('Auth', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.setLogin('love@gmail.com');
        await LoginPage.setPassword('123123');
        await LoginPage.clickSubmitButton();
        await ProfilePage.isOpen();

       /* await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!'); */
    });
});



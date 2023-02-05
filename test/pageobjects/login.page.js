

import Page from './page';

class LoginPage extends Page {

    get inputUsername () {
        return $('#normal_login_email');
    }

    get inputPassword () {
        return $('#normal_login_password');
    }

    get buttonSubmit () {
        return $('.login_form_button');
    }
    setLogin(email){
        this.inputUsername.setValue(email);
    }
    setPassword (password) {
        this.inputPassword.setValue(password);
    }

    clickSubmitButton ( ){
        this.buttonSubmit.click();
    }

   /* async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
*/

    open () {
        return super.open('/');
    }
}

export default new LoginPage();

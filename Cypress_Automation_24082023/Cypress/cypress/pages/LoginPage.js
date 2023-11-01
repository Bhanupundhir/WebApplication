class Login{

   txtUserName = "//input[@id='email']";
   txtPassword = "//input[@id='password']";
   btnLogin = "//button[@type='submit']";

  navigateLogin()
  {
      cy.clearLocalStorage();
      cy.visit('/');
  }

  setUsername(username)
  {
      cy.wait(3000);
      cy.xpath(this.txtUserName).clear().type(username);
  }

   setPassword(password)
   {
      cy.wait(3000);
      cy.xpath(this.txtPassword).clear().type(password);
   }

   clickSubmit()
   {
      cy.wait(3000);
      cy.get('button[type=submit]').click({ force: true });
   }

   verifyValidLogin()
   {
      cy.wait(8000);
      cy.url().should('eq', 'https://uat-falkonsms-fe.azurewebsites.net/phone-numbers');
      cy.wait(3000);
   }

}
export default Login;

import Login from "../pages/LoginPage";

describe("Test1",()=>
{
    it("LoginTest",()=>
        {
            cy.request({
            method: 'GET',
            url:'https://jsonplaceholder.typicode.com/comments',
            })
            .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.length(500)
            expect(response).to.have.property('headers')
            expect(response).to.have.property('duration')
        })
            cy.fixture('Credentails').its('data').then(user =>
            {
            user.forEach((user) => {
            const ln = new Login();
            ln.navigateLogin();
            ln.setUsername(user.username);
            ln.setPassword(user.password);
            ln.clickSubmit();
            ln.verifyValidLogin();
                })
            })
})
    it("Login",()=>
        {
            cy.fixture('Credentails').then(user => {
            const ln = new Login();
            ln.navigateLogin();
            ln.setUsername(user.username);
            ln.setPassword(user.password);
            ln.clickSubmit();
            ln.verifyValidLogin();
                })
            })
})
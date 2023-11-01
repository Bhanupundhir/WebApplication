class Templates {

  mnuTemplate = "//div[text()='Templates']";
  btnAddtemplate = "//span[contains(text(),'Add Template')]//ancestor::button";
  btnSave = "//span[text()='Save']//ancestor::button";
  btnCancel="//span[text()='Cancel']//ancestor::button";
  txtTitle = "//input[@name='Title']";
  txtMessage = "//span[text()='Write a message...']//ancestor :: div[@role='textbox']";
  lblValidationMsgIfTitleEmpty = "//p[contains(text(),'Title cannot be blank')]";
  lblValidationMsgIfTypeEmpty = "//p[contains(text(),'Type cannot be blank')]";
  lblValidationMsgIfTitleExceedsLimit = "//p[contains(text(),'Title should not exceed 50 characters')]";
  lblValidationMsgIfMessageEmpty = "//p[contains(text(),'Message cannot be blank')]";
  txtSearchTemplate = "//input[@placeholder='Find a Template ...']";
  topRow = "//div[@row-id='0']/child::div/child::div/parent::div/parent::div";
  sharedWithEveryoneTopRow="//div[@row-id='0']/child::div/child::div/parent::div/parent::div";
  meatBallsMenu = "//*[@id='_3_dot']";
  mnuEdit = "//span[text()='Edit']//parent::li";
  mnuDuplicate="//span[text()='Duplicate']//parent::li";
  mnuDelete="//span[contains(text(),'Delete')]/ancestor::li";
  dropdownType="//*[@name='Type']";
  txtType = "//input[@name='Type']";
  meatBallMenuSecondRow="//div[@row-id='1']//child::span[@class='c-pointer']//parent::div";
  btnConfirmDeleteButton="//span[text()='Delete']//ancestor::button";
  txtPrivate="//a[text()='Private']";
  txtSharedWithEveryone="//a[text()='Shared with everyone']";
  txtGridTitle="//span[text()='Title']//parent::div";

  clickTemplateMenu() {
    cy.wait(5000);
    cy.xpath(this.mnuTemplate).click({ force: true });
    cy.wait(5000);
  }
  
  clickAddTemplateBtn() {
    cy.wait(5000);
    cy.xpath(this.btnAddtemplate).click({ force: true });
    cy.wait(5000);
  }

  clickSaveBtn() {
    cy.wait(5000);
    cy.xpath(this.btnSave).click({ force: true });
    cy.wait(5000);
  }

  verifyRequiredFieldTile() {
    cy.wait(5000);
    cy.xpath(this.lblValidationMsgIfTitleEmpty).should('have.text', 'Title cannot be blank');
    cy.wait(5000);
  }

  verifyRequiredFieldType() {
    cy.wait(5000);
    cy.xpath(this.lblValidationMsgIfTypeEmpty).should('have.text', 'Type cannot be blank');
    cy.wait(5000);
  }

  verifyRequiredFieldMessage() {
    cy.wait(5000);
    cy.xpath(this.lblValidationMsgIfMessageEmpty).should('have.text', 'Message cannot be blank');
    cy.wait(5000);
  }

  verifyTitleMaxLimit() {
    cy.wait(5000);
    cy.xpath(this.lblValidationMsgIfTitleExceedsLimit).should('have.text', 'Title should not exceed 50 characters');
    cy.wait(5000);
  }

  setTitle(title) {
    cy.wait(5000);
    cy.xpath(this.txtTitle).clear().type(title);
    cy.wait(5000);
  }

  clearTitle() {
    cy.wait(5000);
    cy.xpath(this.txtTitle).clear();
    cy.wait(5000);
  }

  selectDropdownTypePrivate(){
    cy.wait(5000);
    cy.xpath(this.txtType).type('Private').clear({ force : true});;
    cy.xpath(this.txtType).type('{downArrow}');
    cy.xpath(this.txtType).type('{enter}');
    cy.wait(5000);
  }

  setMessage(message) {
    cy.wait(5000);
    cy.xpath(this.txtMessage).clear().type(message);
    cy.wait(5000);
  }

  setSearchKeyword(title) {
    cy.wait(5000);
    cy.xpath(this.txtSearchTemplate).clear().type(title);
    cy.wait(5000);
  }
  
  getPrivateTopRow(title) {
    cy.wait(5000);
    cy.xpath(this.topRow).should('contains.text', title);
    cy.wait(5000);
  }
  
  clickMeatBallsMenu() {
    cy.wait(5000);
    cy.xpath(this.meatBallsMenu).click();
    cy.wait(5000);
  }

  clickEdit(){
    cy.wait(5000);
    cy.xpath(this.mnuEdit).click();
    cy.wait(5000);
  }

  verifyTypeFieldDisabled(){
    cy.wait(5000);
    cy.xpath(this.dropdownType).should('be.disabled');
    cy.wait(5000);
  }

  clickDuplicate(){
    cy.wait(5000);
    cy.xpath(this.mnuDuplicate).click({force:true});
    cy.wait(5000);
  }

  verifyTypeFieldEnabled(){
    cy.wait(5000);
    cy.xpath(this.dropdownType).should('be.enabled');
    cy.wait(5000);
  }

  clickCancelBtn(){
    cy.wait(5000);
    cy.xpath(this.btnCancel).click({force:true});
    cy.wait(5000);
  }

  clickMeatBallMenuSecondRow(){
    cy.wait(5000);
    cy.xpath(this.meatBallMenuSecondRow).click();
    cy.wait(5000);
  }

  clickDelete()  {
    cy.wait(5000);
    cy.xpath(this.mnuDelete).click({force: true} );
    cy.wait(5000);
  }

  clickConfirmDeleteBtn(){
    cy.wait(5000);
    cy.xpath(this.btnConfirmDeleteButton).click();
    cy.wait(5000);
  }

  getPrivateDeleteTopRow(title) {
    cy.wait(5000);
    cy.xpath(this.topRow).should('have.length',0);
    cy.wait(5000);
  }

  getSharedWithEveryOneDeleteTopRow(title) {
    cy.wait(5000);
    cy.xpath(this.topRow).should('have.length',0);
    cy.wait(5000);
  }

  selectDropdownTypeSharedWithEveryone(){
    cy.wait(5000);
    cy.xpath(this.txtType).type('Shared with everyone');
    cy.wait(5000);
    cy.xpath(this.txtType).type('{downArrow}');
    cy.xpath(this.txtType).type('{enter}');
    cy.wait(5000);
  }

  clickSharedWithEveryoneTab(){
    cy.wait(5000);
    cy.xpath(this.txtSharedWithEveryone).click({force:true});
    cy.wait(5000);
  }

  getSharedWithEveryOneTopRow(title) {
    cy.wait(5000);
    cy.xpath(this.sharedWithEveryoneTopRow).should('contains.text', title);
    cy.wait(5000);
  }

  clickPrivateTab(){
    cy.wait(5000);
    cy.xpath(this.txtPrivate).click({force:true});
    cy.wait(5000);
  }

  clickGridTitle(){
    cy.wait(5000);
    cy.xpath(this.txtGridTitle).click({force:true});
    cy.wait(5000);
  }
   
  randomStringGenerator(length) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (var i = 0; i < length - 4; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    return "AUT_" + text;
  }
}
export default Templates;
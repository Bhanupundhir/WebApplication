class Groups{

btnGroupsMenu = "//div[text()='Groups']";
btnAddGroup="//span[text()='Add Group']//ancestor::button";
txtGroupName = "//input[@name='NewGroupName']";
chkBoxAddContactsInGrp="//input[@id='ag-31-input']";
btnSave = "//span[text()='Save']//ancestor::button";
lblGroupsTitle="//span[text()='Groups']";
lblAddNewGroupTitle="//div[text()='Add New Group']";
lblGroupNameCannotBeBlank="//p[text()='Group Name cannot be blank']";
lblGroupNameShouldnotExceed30Chars="//p[text()='Group Name should not exceed 30 characters']";
txtSearchGroup="//input[@placeholder='Find a Group...']";
gridRow1="//div[@class='ag-center-cols-container']//div[@row-index='0']";
grpsGridTable="//div[@class='ag-root ag-unselectable ag-layout-normal']";
grpsGridTablewithoutHeadline="//div[@class='ag-center-cols-clipper']";
chkBoxSelectallGroup="//input[@id='ag-3-input']";
chkboxSelectAllContects="//span[text()='Name']//parent::div//parent::div//parent::div//preceding-sibling::div//child::div[2]//child::input";
grpsMeatballMenu="//span[@class='c-pointer']";
liViewGroupInfo="//span[text()='View Group Info']//parent::li";
titleGroupInfo="//span[text()='Group Info']";
IconCloseGroupInfo="//*[contains(@alt, 'Cancel')]";
liBroadcastMsg="//span[text()='Broadcast Message']//parent::li[1]";
txtboxBroadcastMsg="//span[text()='Write a message...']//ancestor :: div[@role='textbox']";
btnSmilie="//button[@tabindex='13']";
btnSend="//span[text()='Send']//ancestor::button";
btnCancel="//span[text()='Cancel']//ancestor::button";
btnSendGrps="//button[text()='Send']";
btnDuplicateGrps="//button[text()='Duplicate']";
btnShareGrps="//button[text()='Share']";
btnDeleteGrps="//button[text()='Delete']";
btnClearSelection="//button[text()='Clear Selection']";
liShareThisGroup ="//span[text()='Share this group']//ancestor::li";
titleShareThisGrp="//div[@id='alert-dialog-title']//child::span";
drpdwnSelectPhoneNumber="//button[@title='Open']";
liEdit="//span[text()='Edit']//ancestor::li[1]";
liDuplicate="//span[text()='Duplicate']//ancestor::li";
editGrpsTitle="//div[@id='customized-dialog-title']";
btnDuplicate="//span[text()='Duplicate']//ancestor::button";
chkboxOrgDelete="//span[text()='Abc ']//parent::span//parent::span//preceding-sibling::div//child::div";
list="//li[@class='MuiButtonBase-root MuiListItem-root MuiMenuItem-root undefined MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button']";
chkboxSelectAll="//input[@id='ag-3-input']";
btnDelete="//span[contains(text(),'Delete')]/ancestor::li";
chkboxConfirmDelete="//span[text()='Also delete the contacts in this group']//preceding-sibling::span//child::span//child::input";
btnConfirmDelete="//span[contains(text(),'Delete')]/ancestor::button";
chkBox="//div[@class='ag-selection-checkbox']";
topRow="//div[@row-index='0']/child::div/child::div/parent::div/parent::div";


    clickGroupsMenu()
    {
        cy.wait(1000);
        cy.xpath(this.btnGroupsMenu).click();    
        cy.wait(5000);
    }

    verifyGroupsTitle()
    {
        cy.wait(3000);
        cy.xpath(this.lblGroupsTitle).should('have.text',"Groups");
        cy.wait(3000);
    }

    clickAddGroupButton()
    {
      cy.wait(1000);
      cy.xpath(this.btnAddGroup).click();
      cy.wait(1000);
    }

    verifyAddGroupModalTitle()
    {
        cy.wait(2000);
        cy.xpath(this.lblAddNewGroupTitle).should('have.text',"Add New Group");
        cy.wait(1000);
    } 

    verifyGroupNameCannotBeBlankMessage()
    {
        cy.wait(2000);
        cy.xpath(this.lblGroupNameCannotBeBlank).should('have.text',"Group Name cannot be blank");
        cy.wait(2000);
    }

    setBlankGroupName()
    {
        cy.wait(1000);
        cy.xpath(this.txtGroupName).clear();
        cy.wait(1000);
    }

    verifySaveButtonIsDisabled()
    {
        cy.wait(2000);
        cy.xpath(this.btnSave).should('be.disabled');
        cy.wait(2000);
    }

    setRandomInvalidGroupName(invalidName)
    {
        cy.wait(2000);
        cy.xpath(this.txtGroupName).clear().type(invalidName);
        cy.wait(1000);
    }

    verifyGroupNameShouldnotExceed30Chars()
    {
        cy.wait(1000);
        cy.xpath(this.lblGroupNameShouldnotExceed30Chars).should('have.text',"Group Name should not exceed 30 characters");
        cy.wait(1000);
    }

    setRandomValidGroupName(validName)
    {
      cy.wait(1000);
        cy.xpath(this.txtGroupName).clear().type(validName);
        cy.wait(1000);
    }

    verifySaveButtonIsEnabled()
    {
        cy.wait(1000);
        cy.xpath(this.btnSave).should('be.enabled');
        cy.wait(1000);
    }

    clickSaveButton()
    {
        cy.wait(2000);
        cy.xpath(this.btnSave).click();
        cy.wait(2000);
    }   

    setSearchGroup(grpName)
    {
      cy.wait(2000);
        cy.xpath(this.txtSearchGroup).clear().type(grpName);
        cy.wait(2000);
    }

    verifyIfOnlyOneRowIsVisible()
    {
     cy.wait(3000);
       cy.xpath(this.grpsGridTable).xpath(this.grpsGridTablewithoutHeadline).should('have.length',1);
       cy.wait(3000);
    }

    verifyTopRow()
    {
      cy.xpath(this.topRow).should('have.length',0);
    }

     clickGrpsMeatballMenu()
     {
      cy.wait(1000);
        cy.xpath(this.grpsMeatballMenu).click({force: true});
        cy.wait(1000);
     }

     clickListGrpEdit()
     {
      cy.wait(2000);
        cy.xpath(this.liEdit).click({force: true});
        cy.wait(2000);
     }

     replaceGrpNamewithNewname(grpName)
     {
      cy.wait(2000);
        cy.xpath(this.txtGroupName).clear().type(grpName);
        cy.wait(2000);
     }

     clickListGRPDuplicate()
     {
      cy.wait(2000);
        cy.xpath(this.liDuplicate).click({force: true});
        cy.wait(3000);
     }

     clickBtnDuplicate()
     {
      cy.wait(2000);
        cy.xpath(this.btnDuplicate).click({force: true});
        cy.wait(1000);
     }

     searchDuplicateGroup(grpName)
     {
       cy.wait(2000);
         cy.xpath(this.txtSearchGroup).clear().type(grpName + ' - Copy');
         cy.wait(2000);
     }

     clickListViewGroupInfo()
     {
      cy.wait(2000);
        cy.xpath(this.liViewGroupInfo).click({ force: true });
        cy.wait(2000);
     }

     verifyGroupInfoTitle()
     {
      cy.wait(1000);
        cy.xpath(this.titleGroupInfo).should('have.text',"Group Info");
        cy.wait(1000);
     }

     clickIconCloseGroupInfo()
     {
      cy.wait(1000);
        cy.xpath(this.IconCloseGroupInfo).click({force: true});
        cy.wait(1000);
     }
     
     clickBtnDelete()
     {
      cy.wait(5000);
        cy.xpath(this.btnDelete).click({force: true});
        cy.wait(5000);
     }
     
     clickBtnConfirmDelete()
     {
      cy.wait(5000);
        cy.xpath(this.btnConfirmDelete).click({force: true});
        cy.wait(5000);
     }

     verifyNoRowIsVisible()
     {
      cy.wait(3000);
        cy.xpath(this.grpsGridTable).xpath(this.grpsGridTablewithoutHeadline).should('have.length',0);
        cy.wait(3000);
     }
     
     randonstr(length) {
      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
      for (var i = 0; i < length - 4; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
  
      return "AUT_" + text;
    }

} export default Groups;



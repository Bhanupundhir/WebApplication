import Groups from "../pages/GroupsPage";

describe("Test2",()=>
{

it("GroupTest",()=>

{
    const grps = new Groups(); 
    grps.clickGroupsMenu();
    grps.verifyGroupsTitle();
    grps.clickAddGroupButton();
    grps.verifyAddGroupModalTitle();
    grps.setBlankGroupName();
    grps.clickSaveButton();
    grps.verifyGroupNameCannotBeBlankMessage(); 
    grps.verifySaveButtonIsDisabled();
    grps.setRandomInvalidGroupName(grps.randonstr(34));
    grps.verifyGroupNameShouldnotExceed30Chars();
    grps.verifySaveButtonIsDisabled();
    var  ValidGroupName = grps.randonstr(10);
    grps.setRandomValidGroupName(ValidGroupName);
    grps.verifySaveButtonIsEnabled();
    grps.clickSaveButton();
    grps.setSearchGroup(ValidGroupName);
    grps.verifyIfOnlyOneRowIsVisible();
    grps.clickGrpsMeatballMenu();
    grps.clickListGrpEdit();
    var replacegrpname = grps.randonstr(10);
    grps.replaceGrpNamewithNewname(replacegrpname);
    grps.verifySaveButtonIsEnabled();
    grps.clickSaveButton();
    grps.setSearchGroup(replacegrpname);
    grps.verifyIfOnlyOneRowIsVisible();
    grps.clickGrpsMeatballMenu();
    grps.clickListViewGroupInfo();
    grps.verifyGroupInfoTitle();
    grps.clickIconCloseGroupInfo();
    grps.clickGrpsMeatballMenu();
    grps.clickListGRPDuplicate();
    grps.clickBtnDuplicate();
    grps.searchDuplicateGroup(replacegrpname);
    grps.verifyIfOnlyOneRowIsVisible();
    grps.clickGrpsMeatballMenu();
    grps.clickBtnDelete();
    grps.clickBtnConfirmDelete();
    grps.searchDuplicateGroup(replacegrpname);
    grps.verifyTopRow();
}
)
})
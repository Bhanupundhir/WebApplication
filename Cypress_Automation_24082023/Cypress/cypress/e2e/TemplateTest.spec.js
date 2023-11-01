import Templates from "../pages/TemplatesPage";

describe("Test3",()=>
{
it("TemplatesTest",()=>
{

const tmplts = new Templates();
tmplts.clickTemplateMenu();

//private
tmplts.clickAddTemplateBtn();
tmplts.clickSaveBtn();
tmplts.verifyRequiredFieldTile();
tmplts.verifyRequiredFieldType();
tmplts.verifyRequiredFieldMessage();
var maxTitle = tmplts.randomStringGenerator(54);
tmplts.setTitle(maxTitle);
tmplts.verifyTitleMaxLimit();
tmplts.clearTitle();
var validTitlePrivate = tmplts.randomStringGenerator(10);
tmplts.setTitle(validTitlePrivate);
tmplts.selectDropdownTypePrivate();
var validMessagePrivate = tmplts.randomStringGenerator(50)
tmplts.setMessage(validMessagePrivate);
tmplts.clickSaveBtn();
tmplts.setSearchKeyword(validTitlePrivate);
tmplts.getPrivateTopRow(validTitlePrivate);
tmplts.clickMeatBallsMenu();
tmplts.clickEdit();
var replaceTitlePrivate = tmplts.randomStringGenerator(10);
tmplts.setTitle(replaceTitlePrivate);
tmplts.verifyTypeFieldDisabled();
tmplts.clickSaveBtn();
tmplts.setSearchKeyword(replaceTitlePrivate);
tmplts.getPrivateTopRow(replaceTitlePrivate);
tmplts.clickMeatBallsMenu();
tmplts.clickDuplicate();
tmplts.clearTitle();
var duplicateTitlePrivate = tmplts.randomStringGenerator(10);
tmplts.setTitle(duplicateTitlePrivate);
tmplts.verifyTypeFieldEnabled();
tmplts.clickSaveBtn();
tmplts.setSearchKeyword(duplicateTitlePrivate);
tmplts.clickMeatBallsMenu();
tmplts.clickDelete();
tmplts.clickConfirmDeleteBtn();
tmplts.setSearchKeyword(duplicateTitlePrivate);
tmplts.getPrivateDeleteTopRow(duplicateTitlePrivate);

//shared with everyone
tmplts.clickAddTemplateBtn();
var validTitleShared = tmplts.randomStringGenerator(10);
tmplts.setTitle(validTitleShared);
tmplts.selectDropdownTypeSharedWithEveryone();
var validMessageShared = tmplts.randomStringGenerator(50)
tmplts.setMessage(validMessageShared);
tmplts.clickSaveBtn();
tmplts.clickSharedWithEveryoneTab();
tmplts.setSearchKeyword(validTitleShared);
tmplts.getSharedWithEveryOneTopRow(validTitleShared);
tmplts.clickMeatBallsMenu();
tmplts.clickEdit();
var replaceTitleShared = tmplts.randomStringGenerator(10);
tmplts.setTitle(replaceTitleShared);
tmplts.verifyTypeFieldDisabled();
tmplts.clickSaveBtn();
tmplts.setSearchKeyword(replaceTitleShared);
tmplts.getSharedWithEveryOneTopRow(replaceTitleShared);
tmplts.clickMeatBallsMenu();
tmplts.clickDuplicate();
tmplts.clearTitle();
var duplicateTitleShared = tmplts.randomStringGenerator(10);
tmplts.setTitle(duplicateTitleShared);
tmplts.verifyTypeFieldEnabled();
tmplts.clickSaveBtn();
tmplts.setSearchKeyword(duplicateTitleShared);
tmplts.clickMeatBallsMenu();
tmplts.clickDelete();
tmplts.clickConfirmDeleteBtn();
tmplts.setSearchKeyword(duplicateTitleShared);
tmplts.getSharedWithEveryOneDeleteTopRow(duplicateTitleShared);
}
)
})
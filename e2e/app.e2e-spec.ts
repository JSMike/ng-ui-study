import { NgUiStudyPage } from './app.po';

describe('ng-ui-study App', () => {
  let page: NgUiStudyPage;

  beforeEach(() => {
    page = new NgUiStudyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ng-ui works!');
  });
});

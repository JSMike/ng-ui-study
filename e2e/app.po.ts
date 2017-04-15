import { browser, element, by } from 'protractor';

export class NgUiStudyPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng-ui-root h1')).getText();
  }
}

import { AgilAppPage } from './app.po';

describe('agil-app App', () => {
  let page: AgilAppPage;

  beforeEach(() => {
    page = new AgilAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

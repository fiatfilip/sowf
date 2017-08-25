import { ReputationAppPage } from './app.po';

describe('reputation-app App', () => {
  let page: ReputationAppPage;

  beforeEach(() => {
    page = new ReputationAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

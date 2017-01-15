import { CodeAppPage } from './app.po';

describe('code-app App', function() {
  let page: CodeAppPage;

  beforeEach(() => {
    page = new CodeAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

import { ThebrindesFrontendPage } from './app.po';

describe('thebrindes-frontend App', () => {
  let page: ThebrindesFrontendPage;

  beforeEach(() => {
    page = new ThebrindesFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

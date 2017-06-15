import { MyprofilePage } from './app.po';

describe('myprofile App', () => {
  let page: MyprofilePage;

  beforeEach(() => {
    page = new MyprofilePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

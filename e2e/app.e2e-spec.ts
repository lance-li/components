import { AusinwxPage } from './app.po';

describe('ausinwx App', () => {
  let page: AusinwxPage;

  beforeEach(() => {
    page = new AusinwxPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

import { MyngPage } from './app.po';

describe('myng App', () => {
  let page: MyngPage;

  beforeEach(() => {
    page = new MyngPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

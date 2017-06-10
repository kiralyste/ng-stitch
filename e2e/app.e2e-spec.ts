import { Ng2StitchPage } from './app.po';

describe('ng2-stitch App', () => {
  let page: Ng2StitchPage;

  beforeEach(() => {
    page = new Ng2StitchPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

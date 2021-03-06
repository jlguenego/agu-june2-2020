import { by, element } from 'protractor';

export class StockPage {

  async clickOnAddButton() {
    const button = element(by.css('button[routerlink="/stock/new"]'));
    await button.click();
  }

  async getLastArticle() {
    const name = await element(by.css('tbody tr:last-child td.name')).getText();
    const price = await element(
      by.css('tbody tr:last-child td.price')
    ).getText();
    const qty = await element(by.css('tbody tr:last-child td.qty')).getText();
    const article = { name, price, qty };
    return article;
  }

  async getArticleNbr() {
    const trs = await element.all(by.css('tbody tr'));
    return trs.length;
  }

  async clickOnTheLastArticle() {
    const elt = element(by.css('tbody tr:last-child td.name'));
    await elt.click();
  }

  async clickOnSuppressButton() {
    await element(by.css('nav button:last-child')).click();
  }
}

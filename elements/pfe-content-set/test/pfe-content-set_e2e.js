const element = require("../package.json").pfelement.elementName;

describe(element, () => {
  before(() => {
    browser.url(`/elements/${element}/demo`);

    const accordion = $("#accordion");
    accordion.scrollIntoView();

    var clickElement = function (element) {
      element.click();
    };

    const firstHeader = $("#accordion pfe-accordion-header");
    browser.execute(clickElement, firstHeader);
  });

  it("should take a screenshot", () => {
    browser.saveScreen(element);
  });

  it("should compare to the baseline", () => {
    expect(browser.checkScreen(element)).toBeLessThan(1.25);
  });
});
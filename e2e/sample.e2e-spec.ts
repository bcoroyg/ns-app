import { AppiumDriver, createDriver, SearchOptions } from "nativescript-dev-appium";

describe("sample scenario", () => {
  let driver: AppiumDriver;

  beforeAll(async () => driver = await createDriver());

  afterAll(async () => await driver.quit());

  afterEach(async function () {await driver.logTestArtifacts("report")});

  it("Se debe encontrar un elemento por tipo", async () => {
      const label = await driver.findElementByAutomationText("Veces hecho tap", SearchOptions.contains);
      expect(await label.text()).toContain("0");

      //ubicamos y hacemos tap en el botón
      const boton = await driver.findElementByClassName(driver.locators.button);
      await boton.click();
      expect(await boton.text()).toContain("40");
  });
});

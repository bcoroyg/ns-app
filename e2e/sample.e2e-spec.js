"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const nativescript_dev_appium_1 = require("nativescript-dev-appium");
describe("sample scenario", () => {
    let driver;
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () { return driver = yield (0, nativescript_dev_appium_1.createDriver)(); }));
    afterAll(() => __awaiter(void 0, void 0, void 0, function* () { return yield driver.quit(); }));
    afterEach(function () {
        return __awaiter(this, void 0, void 0, function* () { yield driver.logTestArtifacts("report"); });
    });
    it("Se debe encontrar un elemento por tipo", () => __awaiter(void 0, void 0, void 0, function* () {
        const label = yield driver.findElementByAutomationText("Veces hecho tap", nativescript_dev_appium_1.SearchOptions.contains);
        expect(yield label.text()).toContain("0");
        //ubicamos y hacemos tap en el botón
        const boton = yield driver.findElementByClassName(driver.locators.button);
        yield boton.click();
        expect(yield boton.text()).toContain("40");
    }));
});
//# sourceMappingURL=sample.e2e-spec.js.map
import { CreditcardinfoModule } from './creditcardinfo.module';

describe('CreditcardinfoModule', () => {
    let creditcardinfoModule: CreditcardinfoModule;

    beforeEach(() => {
        creditcardinfoModule = new CreditcardinfoModule();
    });

    it('should create an instance', () => {
        expect(creditcardinfoModule).toBeTruthy();
    });
});

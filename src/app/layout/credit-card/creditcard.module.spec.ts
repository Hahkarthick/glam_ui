import { CreditcardModule } from './creditcard.module';

describe('CreditcardModule', () => {
    let creditcardModule: CreditcardModule;

    beforeEach(() => {
        creditcardModule = new CreditcardModule();
    });

    it('should create an instance', () => {
        expect(creditcardModule).toBeTruthy();
    });
});

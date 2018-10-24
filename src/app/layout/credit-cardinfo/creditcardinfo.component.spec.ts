import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditcardinfoComponent } from './creditcardinfo.component';

describe('CreditcardinfoComponent', () => {
    let component: CreditcardinfoComponent;
    let fixture: ComponentFixture<CreditcardinfoComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [CreditcardinfoComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(CreditcardinfoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

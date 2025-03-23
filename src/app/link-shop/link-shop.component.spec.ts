import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkShopComponent } from './link-shop.component';

describe('LinkShopComponent', () => {
  let component: LinkShopComponent;
  let fixture: ComponentFixture<LinkShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkShopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

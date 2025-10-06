import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { Layout } from './layout';

// Create very small stubs for Navbar and Footer so Layout can be tested in isolation
@Component({ selector: 'kairoz-navbar', standalone: true, template: '' })
class StubNavbar {}

@Component({ selector: 'kairoz-footer', standalone: true, template: '' })
class StubFooter {}

describe('Layout', () => {
  let component: Layout;
  let fixture: ComponentFixture<Layout>;

  beforeEach(async () => {
    TestBed.overrideComponent(Layout as any, {
      set: { imports: [StubNavbar, StubFooter, RouterTestingModule] },
    });

    await TestBed.configureTestingModule({
      imports: [Layout],
    }).compileComponents();

    fixture = TestBed.createComponent(Layout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});

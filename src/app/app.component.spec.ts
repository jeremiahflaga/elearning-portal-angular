import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { Location } from '@angular/common';

// Mocking localStorage: https://medium.com/@armno/til-mocking-localstorage-and-sessionstorage-in-angular-unit-tests-a765abdc9d87
beforeEach(() => {
  const store = { currentUser: '{ "accessToken": "" }' };
  const mockLocalStorage = {
    getItem: (key: string): string => {
      return key in store ? store[key] : null;
    },
    setItem: (key: string, value: string) => {
      store[key] = `${value}`;
    }
  };
  spyOn(localStorage, 'getItem')
    .and.callFake(mockLocalStorage.getItem);
  spyOn(localStorage, 'setItem')
    .and.callFake(mockLocalStorage.setItem);
});

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let authServiceMock: any;

  beforeEach(async(() => {
    authServiceMock = jasmine.createSpyObj('AuthService', ['']);
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'cms', component: DummyComponent }
        ])
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: AuthService, useValue: authServiceMock }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    component.showHeaderAndFooter = true;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'elearning'`, () => {
    expect(component.title).toEqual('elearning');
  });

  it('should have a button for Manage Subjects', () => {
    const aElems = fixture.debugElement.queryAll(By.css('a.dropdown-item'));
    expect(aElems[0].nativeElement.textContent).toBe('Manage Subjects');
  });

  it('should navigate to CMS page if Manage Subjects button is clicked', async(() => {
    const location = TestBed.inject(Location);
    const aElems = fixture.debugElement.queryAll(By.css('a.dropdown-item'));
    aElems[0].nativeElement.click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(location.path()).toBe('/cms');
    });
  }));
});

@Component({template: ''})
export class DummyComponent { }

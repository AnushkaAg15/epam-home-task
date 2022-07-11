import { StaredDirective } from './stared.directive';
import {Component} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';

@Component({
  template: `<i [stared]="true"></i>
  <p [stared]="false"></p>  
  `
})

class TestComponent{}

describe('StaredDirective', () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(()=>{
    fixture = TestBed.configureTestingModule({
      declarations: [TestComponent, StaredDirective]
    }).createComponent(TestComponent);

    fixture.detectChanges();
  })

  it('should create an instance', () => {
    const directive = new StaredDirective();
    expect(directive).toBeTruthy();
  });

  it('should be bi star fill', ()=>{
    var element: HTMLElement=fixture.nativeElement.querySelector("i");
    expect(element.className).toEqual("bi-star-fill");
  })

  it('should be bi star fill', ()=>{
    var element: HTMLElement=fixture.nativeElement.querySelector("p");
    expect(element.className).toEqual("bi-star");
  })
});

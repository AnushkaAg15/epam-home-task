import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[stared]'
})
export class StaredDirective {

  @Input() stared = true;

  constructor() { }

  @Input("class")
  @HostBinding('class')
  get elementClass(): string{
    if(this.stared){
      return 'bi-star-fill';
    }else{
      return 'bi-star';
    }
  }

}

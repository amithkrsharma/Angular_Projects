import { Directive, forwardRef, Attribute} from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[confirmEqualValidator][formControlName],[confirmEqualValidator][formControl],[confirmEqualValidator][ngModel]',
  providers: [{provide: NG_VALIDATORS, useExisting: forwardRef(() => ConfirmEqualValidatorDirective), multi: true }]
})

export class ConfirmEqualValidatorDirective implements Validator {
    
  constructor( @Attribute('confirmEqualValidator') public confirmEqualValidator: string, @Attribute('reverse') public reverse: string) {}

    private get isReverse() {
        if (!this.reverse) return false;
        return this.reverse === 'true' ? true: false;
    }

    validate(c: AbstractControl): { [key: string]: any } {
      // self value
      let v = c.value;

      // control vlaue
      let e = c.root.get(this.confirmEqualValidator); //

      //null object
      let obj:any = null;

      // value not equal
      if (e && v !== e.value && !this.isReverse) {
        return {
          confirmEqualValidator: false
        }
      }

      // value equal and reverse
      if (e && e.errors && v === e.value && this.isReverse) {
          delete e.errors['confirmEqualValidator'];
          if (!Object.keys(e.errors).length) e.setErrors(null);
      }

      // value not equal and reverse
      if (e && v !== e.value && this.isReverse) {
          e.setErrors({
            confirmEqualValidator: false
          })
      }

      return obj;
  }
  
}
import {Validator,FormControl,NG_VALIDATORS} from '@angular/forms';
import {Directive} from '@angular/core'

@Directive({
  selector : '[validateEmail]',
  providers: [
        { provide: NG_VALIDATORS, useExisting: EmailValidator, multi: true }
    ]
})


export class EmailValidator implements Validator{
  validate(control:FormControl):{[key:string]:any}{
    const emailRegexp = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    debugger;
    return emailRegexp.test(control.value)?{"invalid":false}:{"invalid":true};
  }

}
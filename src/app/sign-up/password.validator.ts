import {Validator,AbstractControl,NG_VALIDATORS} from '@angular/forms';
import {Directive} from '@angular/core'

@Directive({
  selector: '[validatePassword]'
})


export class PasswordValidator implements Validator{
  validate(control:AbstractControl):{[key:string]:any}| {} {
    //const regExp=/^([a-zA-Z0-9]{8,})$/;
    if(control.value.length()>=8){
      return {"valid":true}
    }else{
      return null;
    }
    
  }
}
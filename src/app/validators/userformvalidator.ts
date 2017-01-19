import { FormControl } from '@angular/forms';

export class UserFormValidator {

    static emailPattern(control: FormControl) {
        var emailRegx = new RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$');
        if (!emailRegx.test(control.value)) {
            return { emailPatern: true };
        } else {
            return null;
        }

    }

}
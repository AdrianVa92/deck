import { Injectable } from '@angular/core';

import { AbstractControl } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class GlobalService {
    constructor() { }

    validationPasswordMatch(AC: AbstractControl): any {
        const password = AC.get('password').value;
        const confirmPassword = AC.get('confirm_password').value;
        if (password && password !== confirmPassword) {
            AC.get('confirm_password').setErrors({ MatchPassword: true });
        } else {
            AC.get('confirm_password').setErrors(null);
            return null;
        }
    }

}

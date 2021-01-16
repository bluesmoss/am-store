import { AbstractControl } from "@angular/forms";

export class MyValidstors{

    static isPriceValid(control: AbstractControl){
        const value = control.value;
        let result = null;
        console.log(value);
        if (value > 10000) {
            result = {
                price_invalid: true
            };
        }
        return result;
    }
}
import { FormGroup, AbstractControl, ValidatorFn } from '@angular/forms';

export const dateLessThanValidator = (dateControl: AbstractControl): ValidatorFn => {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      if (control.value != null && dateControl.value != null && control.value > dateControl.value) {
        return {
          dateLessThan: true
        };
      }
      return null;
    };
  }

export const dateGreaterThanValidator = (dateControl: AbstractControl): ValidatorFn => {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      if (control.value != null && dateControl.value != null && control.value < dateControl.value) {
        return {
          dateGreaterThan: true
        };
      }
      return null;
    };
  }  

export const dateLessThanTodayValidator = (control: AbstractControl): { [key: string]: boolean } | null => {
    if (control.value != null && control.value > new Date()) {
      return {
        dateLessThanToday: true
      };
    }
    return null;
  }


export const dateLessThanYearsValidator = (years: number): ValidatorFn => {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      if (control.value != null) {
        let dateCompare = new Date();
        dateCompare.setFullYear(new Date().getFullYear() - years); 

        if (dateCompare > control.value) {
          return {
            dateLessThanYears: true
          };
        }
      }
      
      return null;
    };
  }

export const dateDiffInDaysLessThanValidator = (toControl: AbstractControl, maxDays: number): ValidatorFn => {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
        if (control.value != null && toControl.value != null) {
          let f:Date = new Date(control.value);
          let t:Date = new Date(toControl.value);
          
          var diff = Math.abs(f.getTime() - t.getTime());
          var diffDays = Math.ceil(diff / (1000 * 3600 * 24)); 

          if (diffDays > maxDays) {
            return {
              dateDiffInDaysLessThan: true
            };
          }
        return null;
      }
      
      return null;
    };
  }

export const copyTimeValues = (date: Date, time: Date) : Date => {
  let dateTime = new Date(date);
  if (dateTime != null) {
    if (time != null) {
      dateTime.setHours(time.getHours());
      dateTime.setMinutes(time.getMinutes());
      dateTime.setSeconds(time.getSeconds());
      dateTime.setMilliseconds(time.getMilliseconds());
    } else {
      dateTime.setHours(0);
      dateTime.setMinutes(0);
      dateTime.setSeconds(0);
      dateTime.setMilliseconds(0);
    }
    return dateTime;
  }
}

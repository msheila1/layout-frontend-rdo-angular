import { FormGroup, ValidationErrors, AbstractControl } from "@angular/forms";
import { Input, Output, EventEmitter } from '@angular/core';
import { MessageService } from 'primeng/api';
import { map } from 'rxjs/operators';

export class AbstractComponent {
    
    @Input()
    formGroup: FormGroup;

    protected validationMessages: { [keyControl: string]: { [validationMessage: string]: string; }; }; 

    protected messageService: MessageService;

    protected resetControl(formControl: AbstractControl) {
      resetControl(formControl);
    }

    protected removeErrors(errorKey: string, controls: AbstractControl | AbstractControl[]) {
      removeErrors(errorKey, controls);
    }

    protected setErrors(error: ValidationErrors, controls: AbstractControl | AbstractControl[]) {
      setErrors(error, controls);
    }

    protected isValidOrCurrentError(errorKey: string, control: AbstractControl) : boolean {
      return isValidOrCurrentError(errorKey, control);
    }
    
    protected isValueNotNullAndValidOrCurrentError(errorKey: string, control: AbstractControl) : boolean {
      return control.value != null && isValidOrCurrentError(errorKey, control);
    } 

    protected getAllFormValidationErrors() : ControlValidationErrors[] {
        return getAllValidationErrors(this.formGroup.controls);
    }
    
    public validateControls() {
      validateControls(this.formGroup);
    }
}

export const isValidOrCurrentError = (errorKey: string, control: AbstractControl) : boolean => {
  return control.valid || isCurrentError(errorKey, control);
} 

export const isCurrentError = (errorKey: string, control: AbstractControl) : boolean => {
  const controlErrors: ValidationErrors = control.errors;
  return controlErrors ? Object.keys(controlErrors)[0] === errorKey : false;
}

export const removeErrors = (errorKey: string, controls: AbstractControl | AbstractControl[]) => {
  let arrayControls:Array<AbstractControl> = [].concat(controls);
  if (arrayControls) {
    arrayControls.forEach(control => {
      const err = control.errors;
      if (control.value != null && err) {
        delete err[errorKey];
        if (!Object.keys(err).length) {
          control.setErrors(null);
          control.updateValueAndValidity();
        } else {
          control.setErrors(err);
        }
      }
    });
  }
}

export const resetControl = (formControl: AbstractControl) => {
  formControl.setValue(null, {emitEvent: false});
  formControl.setErrors(null, {emitEvent: false});
  formControl.clearValidators();
  formControl.updateValueAndValidity();
}

export const setErrors = (error: ValidationErrors, controls: AbstractControl | AbstractControl[]) => {
  let arrayControls:Array<AbstractControl> = [].concat(controls);
  if (arrayControls) {
    arrayControls.forEach(control => {
      if (control.value != null && !control.errors) {
        control.setErrors(error);
      }
    });
  }  
}

export const getControlName = (control: AbstractControl) : string => {
  var controlName = null;
  var parent = control.parent;
  if (parent instanceof FormGroup) {
    Object.keys(parent.controls).forEach((name) => {
      if (control === parent.controls[name]) {
        controlName = name;
      }
    });
  }
  return controlName;
}

export interface ControlValidationErrors {
  control: string;
  error: string;
  value: any;
}

export interface FormGroupControls {
  [key: string]: AbstractControl;
}

export const getAllValidationErrors = (controls: FormGroupControls): ControlValidationErrors[] => {
  let errors: ControlValidationErrors[] = [];
  Object.keys(controls).forEach(key => {
    const control = controls[key];
    if (control instanceof FormGroup) {
      errors = errors.concat(getAllValidationErrors(control.controls));
    }
    const controlErrors: ValidationErrors = controls[key].errors;
    if (controlErrors !== null) {
      Object.keys(controlErrors).forEach(keyError => {
        errors.push({
          control: key,
          error: keyError,
          value: controlErrors[keyError]
        });
      });
    }
  });
  return errors;
}

export const validateControls = (formGroup: FormGroup) => {
  Object.keys(formGroup.controls).forEach(key => {
    const control = formGroup.get(key);
    if (control instanceof FormGroup) {
      validateControls(control);
    }
    control.markAsTouched();
    control.markAsDirty();
    control.updateValueAndValidity(); 
  });
}
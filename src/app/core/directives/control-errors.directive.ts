import { NgControl, AbstractControl, FormControl } from '@angular/forms';
import { Directive, Self, ComponentRef, ViewContainerRef, ComponentFactoryResolver, Input, Inject, OnInit, OnDestroy, HostListener } from '@angular/core';
import { ControlErrorsComponent } from '../components/control-errors/control-errors.component';
import { FORM_ERRORS } from '../utils/form-errors-messages';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Directive({
 selector: '[displayErrors]'
})
export class ControlErrorsDirective implements OnInit, OnDestroy{
    
    private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

    private _error: {severity: any, text: any};

    @Input() errorMsgs: any;

    ref: ComponentRef<ControlErrorsComponent>;

    constructor(@Self() private _control: NgControl, 
                @Inject(FORM_ERRORS) private _errors,
                private _viewContainerRef: ViewContainerRef, 
                private _resolver: ComponentFactoryResolver) {}

    ngOnInit() {
        this._control.valueChanges.pipe(takeUntil(this.destroyed$)).subscribe(() => {
            this._error = null;
            this.setError(null, null);
            const controlErrors = this._control.errors;
            if (controlErrors) {
                const firstKey = Object.keys(controlErrors)[0];
                let getError = this.errorMsgs && this.errorMsgs[firstKey] ? this.errorMsgs[firstKey] : this._errors[firstKey];
                const message = getError(controlErrors[firstKey]);

                const severity = message.severity ? message.severity : 'error';
                const text = message.detail ? message.detail : message;
                
                this._error = {'severity': severity, 'text': text};
            }

            if (this._control.touched && this._error) {
                this.setError(this._error.severity, this._error.text);
            } else {
                this.setError(null, null);
            }
        })
    }

    @HostListener('focus', ['$event.target'])
    onFocus(target) {
        this._control.control.markAsUntouched();
    }

    @HostListener('focusout', ['$event.target'])
    onFocusout(target) {
        if (this._error) {
            this.setError(this._error.severity, this._error.text);
        }
    }

    private setError(severity: any, text: any) {
        if (!this.ref) {
            const factory = this._resolver.resolveComponentFactory(ControlErrorsComponent);
            this.ref = this._viewContainerRef.createComponent(factory);
        }
        this.ref.instance.text = text;
        this.ref.instance.severity = severity;
    }

    ngOnDestroy() {
        this.destroyed$.next(true);
        this.destroyed$.complete();
    }
}

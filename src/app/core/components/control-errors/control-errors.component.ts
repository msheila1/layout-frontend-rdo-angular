import { Component, ChangeDetectionStrategy, Input, ChangeDetectorRef, ViewChild, Inject } from "@angular/core";
import { NgControl } from '@angular/forms';
import { FORM_ERRORS } from '../../utils/form-errors-messages';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'control-errors',
    templateUrl: './control-errors.component.html',
    styleUrls: ['./control-errors.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlErrorsComponent {

    private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

    @Input() errorMsgs: any;

    _text: string;
    _severity: string = 'error';

    hide = true;

    constructor(@Inject(FORM_ERRORS) private _errors, private _cdr: ChangeDetectorRef) { }

    @Input()
    set controlName (control: NgControl) {
        control.valueChanges.pipe(takeUntil(this.destroyed$)).subscribe(() => {
            console.log('valueChanges');
            const controlErrors = control.errors;
            if (controlErrors) {
                const firstKey = Object.keys(controlErrors)[0];
                let getError = this.errorMsgs && this.errorMsgs[firstKey] ? this.errorMsgs[firstKey] : this._errors[firstKey];
                const message = getError(controlErrors[firstKey]);

                this._severity = message.severity ? message.severity : 'error';
                this._text = message.detail ? message.detail : message;
            } else {
                this._severity = null;
                this._text = null;
            }
            this._cdr.detectChanges();
        })
    }

    @Input()
    set severity(value: string) {
        if (value !== this._severity) {
            this._severity = value;
            this._cdr.detectChanges();
        }
    };

    get severity() : string {
        return this._severity;
    }

    @Input()
    set text(value: string) {
        if (value !== this._text) {
            this._text = value;
            this.hide = !value;
            this._cdr.detectChanges();
        }
    };

    get text() : string {
        return this._text;
    }

    ngOnDestroy() {
        this.destroyed$.next(true);
        this.destroyed$.complete();
    }
}
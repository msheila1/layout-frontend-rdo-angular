import { Component, Input } from '@angular/core';

@Component({
    selector: 'vmessage',
    templateUrl: './vmessage.component.html',
    styleUrls: ['./vmessage.component.css']
})
export class VMessageComponent {

    @Input() text = '';
 }
import { Component, Input, OnInit } from "@angular/core";
import { BackendErrorsInterface } from "src/app/shared/types/backendErrors.interface";

@Component({
    selector: 'an-backend-error-messages',
    templateUrl: './backendErrorsMessages.component.html',
    styleUrls: ['./backendErrorsMessages.component.scss']
})
export class BackendErrorsMessagesComponent implements OnInit {
    @Input('backendErrors') backendErrorsProps: BackendErrorsInterface;

    errorMessages: Array<string>;

    ngOnInit(): void {
        this.errorMessages = Object
            .keys(this.backendErrorsProps)
            .map((name: string) => `${name} ${this.backendErrorsProps[name].join(', ')}`)
    }
}
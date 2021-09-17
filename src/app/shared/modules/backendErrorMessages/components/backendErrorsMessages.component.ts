import { Component, Input, OnInit } from "@angular/core";
import { BackendErrorItemInterface, BackendErrorsInterface } from "src/app/shared/types/backendErrors.interface";

@Component({
    selector: 'an-backend-error-messages',
    templateUrl: './backendErrorsMessages.component.html',
    styleUrls: ['./backendErrorsMessages.component.scss']
})
export class BackendErrorsMessagesComponent implements OnInit {
    @Input('backendErrors') backendErrorsProps: BackendErrorsInterface;

    globalMessage: string;
    errorMessages: Array<string>;

    ngOnInit(): void {
        this.globalMessage = this.backendErrorsProps.message
        this.errorMessages = this.backendErrorsProps.errors
            .map((error: BackendErrorItemInterface) => `${error.type}: ${error.messages.join(', ')}`)
    }
}
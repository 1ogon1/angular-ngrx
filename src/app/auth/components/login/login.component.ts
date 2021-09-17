import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'an-login',
    templateUrl: './login.component.html',
    styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(private storage: Storage) {
        
    }

    ngOnInit(): void {

    }
}
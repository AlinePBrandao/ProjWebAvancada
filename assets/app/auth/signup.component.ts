import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { UserServices } from "./user.services";
import { User } from "./user.models";

@Component({
    selector: 'app-signup',
    templateUrl: './signup-component.html',
    providers:[UserServices]
})

export class SignupComponent implements OnInit{
    myForm: FormGroup;
    constructor(private userService: UserServices){}

    onSubmit(){
        console.log(this.myForm);
        let user = new User(
            this.myForm.value.emailTS,
            this.myForm.value.passwordTS,
            this.myForm.value.firstNameTS,
            this.myForm.value.lastNameTS,
        );
        console.log("indo" + JSON.stringify(user.email));
        this.userService.addUser(user).subscribe(dadosSucesso => console.log(dadosSucesso),
            dadosErro => console.log(dadosErro)
        );
        this.myForm.reset();
    }

    ngOnInit(){
        this.myForm = new FormGroup({
            firstNameTS: new FormControl(null,Validators.required),
            lastNameTS: new FormControl(null,Validators.required),
            emailTS: new FormControl(null, [
                Validators.required,
                Validators.pattern("[a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9\-\_\.]+")
            ]),
            passwordTS: new FormControl(null,Validators.required)
        })
    }

}
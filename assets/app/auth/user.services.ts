import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import { User} from "./user.models"
import 'rxjs/Rx';
import { Observable } from "rxjs";

@Injectable()
export class UserServices{
   
    constructor(private http: Http) { }
    addUser(user: User) {
    
        const bodyreq = JSON.stringify(user);
        const myHeaders = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:3000/auth', bodyreq, { headers: myHeaders })
            .map((responseRecebida: Response) =>{
                const aux=responseRecebida.json();
                const newObjUser=new User(
                    aux.objUserSave.email,
                    aux.objUserSave.password,
                    aux.objUserSave.firstName,
                    aux.objUserSave.lastName,
                );
                console.log(newObjUser);
                return newObjUser;
            }) 
            .catch((errorRecebido: Response) => Observable.throw(errorRecebido.json()));
    }
}
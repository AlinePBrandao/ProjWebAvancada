import {Message} from "./message.model"
import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import 'rxjs/add/operator/map'
import { Observable } from "rxjs/Observable";
import { transform } from "typescript";

@Injectable()
export class MessageService{
    private messageSService: Message[] = [];

    constructor(private http: Http){}

    addMessage(message : Message){
        this.messageSService.push(message);
        console.log(this.messageSService);

        const bodyReq = JSON.stringify(message);
        const myHeaders = new Headers({'Content-type': 'application/json'});
        return this.http.post('http://localhost:3000/message', bodyReq, {headers: myHeaders})
            .map((responseRecebida: Response) => responseRecebida.json())
            .catch((errorRecebido: Response) => Observable.throw(errorRecebido.json()));
    }

    getMessages(){
        return this.http.get('http://localhost:3000/message')
            .map((responseRecebida: Response) => {
                const responseEmJSON = responseRecebida.json();
                const messageSResponseRecebida = responseEmJSON.objMessageSRecuperadoS;
                let transformedCastMessagesModelFrontend: Message[] = [];
                    for(let msg of messageSResponseRecebida){
                        transformedCastMessagesModelFrontend.push(
                            new Message(msg.content, 'Vinicius', msg._id, null));
                    }
                this.messageSService = transformedCastMessagesModelFrontend;
                return transformedCastMessagesModelFrontend;
           })
           .catch((errorRecebido: Response) => Observable.throw(errorRecebido.json()));
    }

    deleteMessage(message: Message){
        this.messageSService.splice(this.messageSService.indexOf(message),1);
    }
}
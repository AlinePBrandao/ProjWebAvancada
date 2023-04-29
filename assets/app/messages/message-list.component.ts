import { Component, OnInit } from '@angular/core';  
import { Message } from './message.model';
import { MessageService } from './message.services';

@Component({
    selector: 'app-message-list',
    template: `
        <div class ="col-md-8 col-md-offset-2">
            <app-message [messageVarClasse]="msg"
            (editClicked_MessageMetodoClasse)="msg.content = $event"
            *ngFor="let msg of messageS"
            > </app-message>
        </div>
    `
})

export class MessageListComponent implements OnInit{
    messageS: Message[]= [
        new Message("Texto da Mensagem-List-Comp", "ViniciusRosalem-List-Comp"),
        new Message("Texto 2 da Mensagem-List-Comp", "RosalemSilva-List-Comp"),
        new Message("Texto 3 da Mensagem-List-Comp", "SilvaRosalem-List-Comp"),
    ];
    constructor( private messageService: MessageService){}

    ngOnInit(): void {
        //this.messageS = this.messageService.getMessages();
        this.messageService.getMessages()
            .subscribe(
                (dadosSucesso: Message[]) => {
                    this.messageS = dadosSucesso;
                    console.log(dadosSucesso)
                },
                dadosErro => console.log(dadosErro)
            );
    }

}
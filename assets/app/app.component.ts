import { Component } from '@angular/core';  
import { Message } from './messages/message.model';
import { MessageService } from './messages/message.services';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styles: [`
        .author {
            display: inline-block;
            font-style: italic;
            font-size: 12px;
            width: 80%;
        }
        .config {
           display:inline-block;
           text-align: right;
           font-size: 12px;
           width:19%;
        } 
    `],
    providers: [MessageService]
})

export class AppComponent {
    nomeNgSwitch: string = "";

    valorNgSwitch: number;

    mostrarElemento: boolean = true;
    onMudaMostrarElemento(){
        this.mostrarElemento = !this.mostrarElemento;
    }

    messageS: Message[]= [
        new Message("Texto da Mensagem", "ViniciusRosalem"),
        new Message("Texto 2 da Mensagem", "RosalemSilva"),
        new Message("Texto 3 da Mensagem", "SilvaRosalem"),


    ]

    //messageBinding: Message = new Message("Texto da Mensagem", "Vinicius Rosalem");
    
    //messageBindingAlias: Message = new Message("Texto da Mensagem Alias", "ViniciusRosalemAlias");
    
}
    

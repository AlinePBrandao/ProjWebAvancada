import {Component, EventEmitter, Input, Output} from "@angular/core";
import { Message } from './message.model';
import { MessageService } from "./message.services"

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styles: [`
        .author {
            display: inline-block;
            font-style: italic;
            font-size: 12px;
            witdh: 80%;
        }
        .config {
            display: inline-block;
            text-align: right;
            font-size: 12px;
            width: 19%;
        }
    `]   
})
export class MessageComponent{

    color = 'yellow';
    tam = 12;
    onMudaStyle(){
        this.color = 'red';
        this.tam = 16;
    }

    @Input() messageVarClasse : Message = new Message("","");
    @Input('InputMessage') messageVarClasseAlias : Message = new Message("","");
    @Output() editClicked_MessageMetodoClasse = new EventEmitter<string>();
    @Output() editClicked_MessageMetodoClasseAlias = new EventEmitter<string>();

    constructor(private messageServiceObj: MessageService){}
    onDelete(){
        this.messageServiceObj.deleteMessage(this.messageVarClasse);
    }

    onEdit(){
        //alert("Táh funcionando...")
        this.editClicked_MessageMetodoClasse.emit("Texto veio de message (child) para o app (pai)");
        this.editClicked_MessageMetodoClasseAlias.emit("Texto veio de message (child para o app (pai) - Alias");

    }

}
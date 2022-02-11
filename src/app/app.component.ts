import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('MessageSend') messageElelement : any;
  @ViewChild('areaMessageChat') groupMessageChat:any;
  title = 'socket-io-with-angular';
  test(){

    let current_message = this.messageElelement.nativeElement;
    const messageChat = this.groupMessageChat.nativeElement;

    // const newMessage = `<li class="sendMessage"><h1>`+current_message.value+`</h1></li>`;
    // messageChat.insertAdjacentHTML("beforeend",newMessage);
    // current_message.createElement('li')
    const newElement = document.createElement('li');
    const textElement = document.createTextNode(current_message.value);
    newElement.className = 'sendMessage';
    newElement.appendChild(textElement);
    messageChat.appendChild(newElement);
    current_message.value= '';
  }
  sendRequestFormOpen(){
    console.log('request form !');
  }
  deleteAllMessage(){
    const messageChat = this.groupMessageChat.nativeElement;
    messageChat.innerHTML = "";

  }
}





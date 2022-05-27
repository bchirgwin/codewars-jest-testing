import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    greetingWord: string = 'Hello'; // 'Howdy

    getWelcomingMessage(username: string):string {
        return `${this.greetingWord}, ${userName}!`;
    }
}

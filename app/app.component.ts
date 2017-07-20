import { Component } from '@angular/core';
import { User } from './shared/models/user';

@Component({
    selector: 'my-app',
    templateUrl: `./app/app.component.html`,
    styleUrls: [`./app/app.component.css`]
})
export class AppComponent {
    message: string = 'Hello!';
    users: User[] = [
        { id: 25, name: 'Perry', username: 'pgowdy' },
        { id: 26, name: 'Kirby', username: 'ckuiper' },
        { id: 27, name: 'Nancy', username: 'nkennedy' },
        { id: 28, name: 'Crab', username: 'ccranston' }
    ];
    activeUser: User;

    selectUser(user) {
        this.activeUser = user;
        console.log(this.activeUser);
    }

    onUserCreated(event) {
        this.users.push(event.user);
    }
}

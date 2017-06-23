import { Component } from '@angular/core';

// This is a built in decorator to tell angular the class is a component
@Component({
    templateUrl: 'app/home/welcome.component.html'
})

export class WelcomeComponent {
    public pageTitle: string = 'Welcome';
}

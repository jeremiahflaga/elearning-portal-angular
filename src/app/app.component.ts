import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'elearning';
  showHeaderAndFooter = false;

  constructor(private router: Router) {
    // on route change to '/login', set the variable showHead to false
      router.events.forEach((event) => {
        if (event instanceof NavigationStart) {
          if (event['url'] === '/login' || event['url'] === '/sign-up' ) {
            this.showHeaderAndFooter = false;
          } else {
            this.showHeaderAndFooter = true;
          }
        }
      });
    }
}

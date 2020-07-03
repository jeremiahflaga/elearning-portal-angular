import { Component } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { User } from './shared/models/user';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'elearning';
  showHeaderAndFooter = false;
  currentUser: User;

  constructor(
    private router: Router,
    private authenticationService: AuthService
    ) {
    // on route change to '/login', set the variable showHead to false
    router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event['url'].startsWith('/login') || event['url'].startsWith('/sign-up')) {
          this.showHeaderAndFooter = false;
        } else {
          this.showHeaderAndFooter = true;
        }
      }
    });
  }

  manageSubjects() {
    this.router.navigate(['/cms']);
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
}

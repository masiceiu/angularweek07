import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {UserService} from './common/services/user-service';
import {UserPermission} from './shared/interfaces';
import {UserPermissionService} from './common/services/user-permission.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {

  title = 'Angular-Week05 Assignment';
  public userType: string | undefined = '';

  constructor(private userService: UserService,
              private userPermissionService: UserPermissionService
  ){
    userService.getUserPermission().then(res => {
      // console.log(res);
      this.userType = res.userType;
      // this.userType = 'admin';
      const userPermission: UserPermission = {
        userType : res.userType
      };
      this.userPermissionService.setUserPermission(userPermission);
    });
  }
  ngOnInit(): void {

  }
  /*constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // console.log('Router', this.router);
    // console.log('ActivatedRoute', this.route);
    this.router.events.subscribe((event) => {
      if (!(event instanceof NavigationEnd)) {
        return;
        // console.log('!(event instanceof NavigationEnd)', event);
      } else {
        // console.log('Router', this.router);
        // console.log('ActivatedRoute', this.route);
        console.log('(event instanceof NavigationEnd)', event);
      }
      // window.scrollTo(0, 0);
    });
  }*/
}

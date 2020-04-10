import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {

  }

  logout() {
   this.authService.logout();
   this.router.navigate(['/Login']); 
  }

}

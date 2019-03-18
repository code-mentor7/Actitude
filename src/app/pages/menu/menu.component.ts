import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @Output() dismiss = new EventEmitter();
  @Output() logout = new EventEmitter();
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goAllProjects() {
    this.router.navigate(['all']);
  }

  goSignUp() {
    this.router.navigate(['signup']);
  }

  goLogout() {
    this.logout.emit();
    this.router.navigate(['home']);
  }

  onDismiss() {
    this.dismiss.emit();
  }

}

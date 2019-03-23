import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  showMenu = false;
  @Input() flag;
  @Output() triggerShowMenu = new EventEmitter();
  @Output() triggerCloseMenu = new EventEmitter();
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goHome() {
    this.router.navigate(['home']);
  }

  goMenu() {
    this.triggerShowMenu.emit();
    this.showMenu = true;
  }

  goLogin() {
    this.router.navigate(['login']);
  }

  onCancel() {
    this.triggerCloseMenu.emit();
    this.showMenu = false;
  }

}

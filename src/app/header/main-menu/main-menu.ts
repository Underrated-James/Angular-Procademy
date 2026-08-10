import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-main-menu',
  imports: [ButtonModule],
  templateUrl: './main-menu.html',
  styleUrl: './main-menu.scss',
})
export class MainMenu {
  home = "Home";
  display = false;

  onclick(){
    this.display = !this.display;
  }
}

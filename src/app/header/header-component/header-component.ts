import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MainMenu } from '../main-menu/main-menu';
import { TopMenu } from '../top-menu/top-menu';
@Component({
  selector: 'app-header-component',
  standalone: true,
  imports: [ButtonModule, TopMenu, MainMenu],
  templateUrl: './header-component.html',
  styleUrls: ['./header-component.scss'],
})
export class HeaderComponent {
  display = false;

  onClick(){
    this.display = !this.display; 
  }
}

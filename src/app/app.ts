import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header-component/header-component';
import { MainMenu } from './header/main-menu/main-menu';
import { TopMenu } from './header/top-menu/top-menu';
import { ProductList } from './product-list/product-list';
import { TopHeader } from './top-header/top-header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, TopHeader, TopMenu, MainMenu, ProductList],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {
  protected readonly title = signal('angular');
}

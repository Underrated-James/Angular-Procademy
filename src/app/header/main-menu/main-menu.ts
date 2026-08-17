import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-main-menu',
  imports: [ButtonModule],
  templateUrl: './main-menu.html',
  styleUrls: ['./main-menu.scss'],
})
export class MainMenu {
  menuItems: { href: string; label: string }[] = [
    { href: '/home', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' }
  ]
}

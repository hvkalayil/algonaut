import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  toggleTheme() {
    const currentMode = document.body.getAttribute('data-bs-theme') ?? 'light'
    const newMode = currentMode == 'dark' ? 'light' : 'dark'

    document.body.setAttribute('data-bs-theme', newMode)
    localStorage.setItem('CURRENT_THEME',newMode)
  }
  
}

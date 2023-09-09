import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  ngOnInit() {
    this.setTheme()
  }

  setTheme() {
    const theme = localStorage.getItem('CURRENT_THEME') ?? 'light'
    document.body.setAttribute('data-bs-theme', theme)
  }
}

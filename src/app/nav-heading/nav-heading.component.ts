import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-nav-heading',
  templateUrl: './nav-heading.component.html',
  styleUrls: ['./nav-heading.component.scss']
})
export class NavHeadingComponent implements OnInit {

  public themeCheckM:boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  addTheme() {
    if (this.themeCheckM) {
      document.documentElement.style.setProperty('--bg-color', '#272727');
      document.documentElement.style.setProperty('--font-color', '#fff');
    } else {
      document.documentElement.style.setProperty('--bg-color', '#ffffff');
      document.documentElement.style.setProperty('--font-color', '#000000');
    }
  }

  navLink(link: string) {
    this.router.navigateByUrl(link);
  }

}

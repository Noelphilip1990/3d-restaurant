import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-nav-heading',
  templateUrl: './nav-heading.component.html',
  styleUrls: ['./nav-heading.component.scss']
})
export class NavHeadingComponent implements OnInit {

  public themeCheckM:boolean = false;
  public litecolor: string = "#ffffff";
  public darkcolor: string = "#272727";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  addTheme() {
    if (this.themeCheckM) {
      document.documentElement.style.setProperty('--bg-color', this.darkcolor);
      document.documentElement.style.setProperty('--font-color', '#fff');
    } else { 
      document.documentElement.style.setProperty('--bg-color', this.litecolor);
      document.documentElement.style.setProperty('--font-color', '#000000');
    }
  }

  setLiteColor(color: string) {
    this.litecolor = color;
  }

  setDarkColor(color: string) {
    this.darkcolor = color;
  }

  navLink(link: string) {
    this.router.navigateByUrl(link);
  }

}

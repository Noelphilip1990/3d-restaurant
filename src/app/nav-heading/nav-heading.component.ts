import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-nav-heading',
  templateUrl: './nav-heading.component.html',
  styleUrls: ['./nav-heading.component.scss']
})
export class NavHeadingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navLink(link: string) {
    this.router.navigateByUrl(link);
  }

}

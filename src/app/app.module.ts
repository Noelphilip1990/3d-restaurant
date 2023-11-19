import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavHeadingComponent } from './nav-heading/nav-heading.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatCommonModule } from '@angular/material/core';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { FooterComponent } from './footer/footer.component';
import { ViewDialogComponent } from './view-dialog/view-dialog.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavHeadingComponent,
    FooterComponent,
    ViewDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCommonModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatGridListModule,
    FormsModule,
    MatMenuModule,
    ReactiveFormsModule,
  ],
  providers: [MatDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }

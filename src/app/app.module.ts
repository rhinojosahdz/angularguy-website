import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact.component';
import { ContentComponent } from './content.component';
import { HamburgerButtonComponent } from './hamburger-button.component';
import { HeaderComponent } from './header.component';
import { HomeComponent } from './home.component';
import { ModelService } from './model.service';
import { ResumeComponent } from './resume.component';
import { TechnologiesComponent } from './technologies.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    HamburgerButtonComponent,
    HeaderComponent,
    ContentComponent,
    HomeComponent,
    ContactComponent,
    TechnologiesComponent,
    ResumeComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full', redirectTo: '' },
      { component: ResumeComponent, path: 'resume' },
      { component: TechnologiesComponent, path: 'technologies' },
      { component: ContactComponent, path: 'contact' },
    ]),
  ],
  providers: [
    ModelService,
  ],
})
export class AppModule { }

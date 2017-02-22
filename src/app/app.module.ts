import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact.component';
import { ContentComponent } from './content.component';
import { HamburgerButtonComponent } from './hamburger-button.component';
import { HeaderComponent } from './header.component';
import { HomeComponent } from './home.component';
import { LikePipe } from './like.pipe';
import { ModelService } from './model.service';
import { ProjectsComponent } from './projects.component';
import { ResumeComponent } from './resume.component';
import { SideHeaderComponent } from './side-header.component';
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
    SideHeaderComponent,
    ProjectsComponent,
    LikePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full', redirectTo: '' },
      { component: ResumeComponent, path: 'resume' },
      { component: TechnologiesComponent, path: 'technologies' },
      { component: ContactComponent, path: 'contact' },
    ], { useHash: true }),
  ],
  providers: [
    ModelService,
  ],
})
export class AppModule { }

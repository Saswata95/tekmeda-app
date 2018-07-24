import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AuthguardService } from './services/authguard.service';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import {AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseconf),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    NgbModule.forRoot()
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,

  ],
  providers: [AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

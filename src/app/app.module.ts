import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from 'src/app/share/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
import { AuthenticationModule } from './authentication/authentication.module';
import { VotesModule } from './votes/votes.module';
import { UsersModule } from './users/users.module';
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    AuthenticationModule,
    VotesModule,
    UsersModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule { }

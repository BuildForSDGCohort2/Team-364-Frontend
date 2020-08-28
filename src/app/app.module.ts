import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ChannelsComponent } from './pages/channels/channels.component';
import { PostcastCategoryComponent } from './pages/postcast-category/postcast-category.component';
import { PostcastsListComponent } from './pages/postcasts-list/postcasts-list.component';
import { SinglePosdcastComponent } from './pages/single-posdcast/single-posdcast.component';
import { PosdcastsListComponent } from './pages/posdcasts-list/posdcasts-list.component';
import { PosdcastsCategoriesComponent } from './pages/posdcasts-categories/posdcasts-categories.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ChannelsComponent,
    PostcastCategoryComponent,
    PostcastsListComponent,
    SinglePosdcastComponent,
    PosdcastsListComponent,
    PosdcastsCategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

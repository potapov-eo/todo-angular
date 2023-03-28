import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../modules/material/material.module';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { HeaderComponent } from './components/header/header.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { AppRoutingModule } from './app-routing.module';
import { MainPageComponent } from './components/main-page/main-page.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PreloaderInterceptor } from './interceptors/preloader.interceptor';
import { SpinerComponent } from './components/spiner/spiner.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    HeaderComponent,
    TodoListComponent,
    MainPageComponent,
    SpinerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: PreloaderInterceptor,
      multi: true
    }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }

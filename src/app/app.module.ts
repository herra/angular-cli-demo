import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { SearchFieldComponent } from './components/search-field/search-field.component';
import { HomeComponent } from './components/home/home.component';
import { TaskInputComponent } from './components/task-input/task-input.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HeaderComponent, SearchFieldComponent, HomeComponent, TaskInputComponent, TasksListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

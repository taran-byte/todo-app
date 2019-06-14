import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule} from '@angular/cdk/drag-drop';
import { AppComponent } from './app.component';
import { HomeboardComponent } from './homeboard/homeboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AngularFireModule }from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import{ environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeboardComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase,'todo-app'),
    AngularFireDatabaseModule
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

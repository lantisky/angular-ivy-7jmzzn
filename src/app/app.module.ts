import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { StoreModule } from "@ngrx/store";
import { listReducer } from "./lib/list.reducer";


@NgModule({
  imports: [BrowserModule, FormsModule, StoreModule.forRoot({list:  listReducer}),
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

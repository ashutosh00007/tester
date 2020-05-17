import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmplistComponent } from './emplist/emplist.component';
import { EmpdetailComponent } from './empdetail/empdetail.component';
import { EmpserviceService } from './empservice.service';
import { TesterComponent } from './tester/tester.component';

@NgModule({
  declarations: [
    AppComponent,
    EmplistComponent,
    EmpdetailComponent,
    TesterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [EmpserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

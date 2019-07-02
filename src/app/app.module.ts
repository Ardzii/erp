import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatToolbarModule, MatExpansionModule, MatButtonModule, MatListModule, MatMenuModule } from '@angular/material';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomerComponent } from './customer/customer.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerDetailComponent } from './customer/customer-detail/customer-detail.component';
import { CustomerEditComponent } from './customer/customer-detail/customer-edit/customer-edit.component';
import { CusInfoFormComponent } from './customer/customer-detail/customer-edit/cus-info-form/cus-info-form.component';
import { DocRefsFormComponent } from './customer/customer-detail/customer-edit/doc-refs-form/doc-refs-form.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes = [
  {path: 'customers', component: CustomerListComponent},
  {path: 'customer-detail/:id', component: CustomerDetailComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    CustomerListComponent,
    CustomerDetailComponent,
    CustomerEditComponent,
    CusInfoFormComponent,
    DocRefsFormComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatExpansionModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

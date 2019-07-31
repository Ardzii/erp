import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  MatToolbarModule,
  MatExpansionModule,
  MatButtonModule,
  MatListModule,
  MatMenuModule,
  MatSidenavModule,
  MatIconModule,
  MatCardModule,
  MatProgressBarModule,
  MatInputModule,
  MatTabsModule,
  MatTableModule,
  MatTooltipModule,
  MatProgressSpinnerModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomersComponent } from './customers/customers.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { CustomerDetailsComponent } from './customers/customer-list/customer-details/customer-details.component';
import { CustomerEditComponent } from './customers/customer-list/customer-edit/customer-edit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BasicComponent } from './customers/customer-list/customer-details/basic/basic.component';
import { DocsComponent } from './customers/customer-list/customer-details/docs/docs.component';
import { ContactsComponent } from './customers/customer-list/customer-details/contacts/contacts.component';
import { CustomerCommentsComponent } from './customers/customer-list/customer-details/customer-comments/customer-comments.component';
import { BasicEditComponent } from './customers/customer-list/customer-edit/basic-edit/basic-edit.component';
import { CustomerCommentsEditComponent } from './customers/customer-list/customer-edit/customer-comments-edit/customer-comments-edit.component';
import { DocsEditComponent } from './customers/customer-list/customer-edit/docs-edit/docs-edit.component';
import { ContactsEditComponent } from './customers/customer-list/customer-edit/contacts-edit/contacts-edit.component';

// APP ROUTING MODULE TO BE CREATED ************************************************* BEG
const appRoutes = [
  { path: 'customers', component: CustomerListComponent },
  // { path: 'customer', component: CustomerDetailsComponent },
  { path: 'customers/customer-detail/:id', component: CustomerDetailsComponent },
  { path: 'customers/new-customer', component: CustomerEditComponent },
  { path: 'customers/customer-edit/:id', component: CustomerEditComponent },
  { path: 'home', component: DashboardComponent },
];
// APP ROUTING MODULE TO BE CREATED ************************************************* END

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CustomersComponent,
    CustomerListComponent,
    CustomerDetailsComponent,
    CustomerEditComponent,
    DashboardComponent,
    BasicComponent,
    DocsComponent,
    ContactsComponent,
    CustomerCommentsComponent,
    BasicEditComponent,
    CustomerCommentsEditComponent,
    DocsEditComponent,
    ContactsEditComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    ),
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatExpansionModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatProgressBarModule,
    MatInputModule,
    MatTabsModule,
    MatTableModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

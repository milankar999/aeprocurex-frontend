import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CrmHeaderComponent } from './components/crm/crm-header/crm-header.component';
import { PoTypeEntryComponent } from './components/crm/crm-po/po-entry/po-type-entry/po-type-entry.component';
import { PoEntryCustomerSelectionComponent } from './components/crm/crm-po/po-entry/po-entry-customer-selection/po-entry-customer-selection.component';
import { PoEntryProductComponent } from './components/crm/crm-po/po-entry/po-entry-product/po-entry-product.component';

const routes:Routes=[
  {path:'login',component:LoginComponent},
  {path:'crm/crmheader',component:CrmHeaderComponent},
  {path:'crm/crmheader/crmpo-type',component: PoTypeEntryComponent},
  {path:'crm/po-entry/po-entry-customer-selection', component:PoEntryCustomerSelectionComponent},
  {path:'crm/po-entry/po-entry-product', component:PoEntryProductComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

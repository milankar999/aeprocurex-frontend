import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CrmHeaderComponent } from './components/crm/crm-header/crm-header.component';
import { PoTypeEntryComponent } from './components/crm/crm-po/po-entry/po-type-entry/po-type-entry.component';
import { PoEntryCustomerSelectionComponent } from './components/crm/crm-po/po-entry/po-entry-customer-selection/po-entry-customer-selection.component';
import { PoEntryProductComponent } from './components/crm/crm-po/po-entry/po-entry-product/po-entry-product.component';
import { CrmHomeComponent } from './components/crm/crm-home/crm-home.component';
import { PoEntryReceiverSelectionComponent } from './components/crm/crm-po/po-entry/po-entry-receiver-selection/po-entry-receiver-selection.component';
import { PoEntryRequesterSelectionComponent } from './components/crm/crm-po/po-entry/po-entry-requester-selection/po-entry-requester-selection.component';
import { PoEntrySupportingInfoComponent } from './components/crm/crm-po/po-entry/po-entry-supporting-info/po-entry-supporting-info.component';
import { CrmFooterComponent } from './components/crm/crm-footer/crm-footer.component';

const routes:Routes=[
  {path:'login',component:LoginComponent},
  {path:'crm/crmheader',component:CrmHeaderComponent},
  {path:'crm/crmheader/crmpo-type',component: PoTypeEntryComponent},
  {path:'crm/po-entry/po-entry-customer-selection', component:PoEntryCustomerSelectionComponent},
  {path:'crm/po-entry/po-entry-product', component:PoEntryProductComponent},
  { path:'crm/po-entry/po-entry-receiver-selection',component: PoEntryReceiverSelectionComponent},
  {path:'crm/crm-home',component:CrmHomeComponent},
  {path:'crm/po-entry/po-entry-request-selection',component: PoEntryRequesterSelectionComponent},
  {path:'crm/po-entry/po-entry-supportinginfo',component: PoEntrySupportingInfoComponent},
  {path:'crm/crmfooter',component:CrmFooterComponent},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

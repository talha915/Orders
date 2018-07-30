import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import {ScrollToModule} from 'ng2-scroll-to';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { AdminComponent } from './admin/admin.component';
import { CommonComponent } from './common/common.component';
import { ShopsComponent } from './shops/shops.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShopsDetailsComponent } from './shops-details/shops-details.component';
import { UserService } from './user.service';
import { AuthguardGuard } from './authguard.guard';
import { HeaderComponent } from './header/header.component';
import { ShopsmallimageComponent } from './shopsmallimage/shopsmallimage.component';
import { ShoplargeimageComponent } from './shoplargeimage/shoplargeimage.component';
import { ShopdetailssidebarComponent } from './shopdetailssidebar/shopdetailssidebar.component';
import { ShopdetailssidebarbuttonComponent } from './shopdetailssidebarbutton/shopdetailssidebarbutton.component';
import { FooterComponent } from './footer/footer.component';
import { AccordionfooterComponent } from './accordionfooter/accordionfooter.component';
@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    AdminComponent,
    CommonComponent,
    ShopsComponent,
    DashboardComponent,
    ShopsDetailsComponent,
    HeaderComponent,
    ShopsmallimageComponent,
    ShoplargeimageComponent,
    ShopdetailssidebarComponent,
    ShopdetailssidebarbuttonComponent,
    FooterComponent,
    AccordionfooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: ClientComponent
      },
      {
        path: 'Shops',
        component: ShopsComponent,
        canActivate: [AuthguardGuard]
      },
      {
        path: 'admin',
        component: AdminComponent
      },
      {
        path: 'common',
        component: CommonComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'ShopsDetails/:slug',
        component: ShopsDetailsComponent,
        canActivate: [AuthguardGuard]
      }
    ]),
    Ng4LoadingSpinnerModule.forRoot(),
    ScrollToModule.forRoot()
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

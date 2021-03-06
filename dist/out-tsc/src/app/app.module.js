import * as tslib_1 from "tslib";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { FlashMessagesModule } from "angular2-flash-messages";
import { environment } from "../environments/environment";
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { AddClientComponent } from "./components/add-client/add-client.component";
import { EditClientComponent } from "./components/edit-client/edit-client.component";
import { ClientDetailsComponent } from "./components/client-details/client-details.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { SettingsComponent } from "./components/settings/settings.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { ClientsComponent } from "./components/clients/clients.component";
import { AppRoutingModule } from "./app-routing.module";
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                NavbarComponent,
                DashboardComponent,
                SidebarComponent,
                AddClientComponent,
                EditClientComponent,
                ClientDetailsComponent,
                LoginComponent,
                RegisterComponent,
                SettingsComponent,
                NotFoundComponent,
                ClientsComponent
            ],
            imports: [
                BrowserModule,
                AppRoutingModule,
                AngularFireModule.initializeApp(environment.firebase, "AngularProject"),
                AngularFirestoreModule,
                AngularFireAuthModule,
                FormsModule,
                FlashMessagesModule.forRoot()
            ],
            providers: [],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map
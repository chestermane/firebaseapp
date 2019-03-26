import * as tslib_1 from "tslib";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { AddClientComponent } from "./components/add-client/add-client.component";
import { ClientDetailsComponent } from "./components/client-details/client-details.component";
import { EditClientComponent } from "./components/edit-client/edit-client.component";
import { SettingsComponent } from "./components/settings/settings.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
var routes = [
    { path: "", component: DashboardComponent },
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent },
    { path: "client/add", component: AddClientComponent },
    { path: "client/:id", component: ClientDetailsComponent },
    { path: "client/edit/:id", component: EditClientComponent },
    { path: "settings", component: SettingsComponent },
    { path: "**", component: NotFoundComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            exports: [RouterModule],
            imports: [RouterModule.forRoot(routes)],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map
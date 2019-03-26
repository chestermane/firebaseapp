import * as tslib_1 from "tslib";
import { Component, ViewChild } from "@angular/core";
import { FlashMessagesService } from "angular2-flash-messages";
import { ClientService } from "../../services/client.service";
import { Router } from "@angular/router";
var AddClientComponent = /** @class */ (function () {
    //Injecting instance of flash message service for toast errors
    function AddClientComponent(flashMessage, clientService, router) {
        this.flashMessage = flashMessage;
        this.clientService = clientService;
        this.router = router;
        this.client = {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            balance: 0
        };
        this.disableBalanceOnAdd = true;
    }
    AddClientComponent.prototype.ngOnInit = function () {
        this.flashMessage.show("Evan Chesterman this is working");
    };
    //Add client to database
    AddClientComponent.prototype.onSubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        if (this.disableBalanceOnAdd) {
            value.balance = 0;
        }
        if (!valid) {
            //show error
            this.flashMessage.show("Please complete form correctly", {
                cssClass: "alert-danger",
                timeout: 4000
            });
        }
        else {
            //add client
            this.clientService.newClient(value);
            //show success message
            this.flashMessage.show("Client added successfully", {
                cssClass: "alert-success",
                timeout: 4000
            });
            //Redirect to Dashboard
            this.router.navigate(["/"]);
        }
    };
    tslib_1.__decorate([
        ViewChild("clientForm"),
        tslib_1.__metadata("design:type", Object)
    ], AddClientComponent.prototype, "form", void 0);
    AddClientComponent = tslib_1.__decorate([
        Component({
            selector: "app-add-client",
            templateUrl: "./add-client.component.html",
            styleUrls: ["./add-client.component.css"]
        }),
        tslib_1.__metadata("design:paramtypes", [FlashMessagesService,
            ClientService,
            Router])
    ], AddClientComponent);
    return AddClientComponent;
}());
export { AddClientComponent };
//# sourceMappingURL=add-client.component.js.map
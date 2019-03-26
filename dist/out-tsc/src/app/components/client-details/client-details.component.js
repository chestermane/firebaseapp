import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { ClientService } from "../../services/client.service";
import { Router, ActivatedRoute } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";
var ClientDetailsComponent = /** @class */ (function () {
    function ClientDetailsComponent(clientService, router, route, flashMessage) {
        this.clientService = clientService;
        this.router = router;
        this.route = route;
        this.flashMessage = flashMessage;
        this.hasBalance = false;
        this.showBalanceUpdateInput = false;
    }
    ClientDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Get id from URL
        this.id = this.route.snapshot.params["id"];
        //Get client
        this.clientService.getClient(this.id).subscribe(function (client) {
            _this.client = client;
            console.log(_this.client);
        });
    };
    ClientDetailsComponent = tslib_1.__decorate([
        Component({
            selector: "app-client-details",
            templateUrl: "./client-details.component.html",
            styleUrls: ["./client-details.component.css"]
        }),
        tslib_1.__metadata("design:paramtypes", [ClientService,
            Router,
            ActivatedRoute,
            FlashMessagesService])
    ], ClientDetailsComponent);
    return ClientDetailsComponent;
}());
export { ClientDetailsComponent };
//# sourceMappingURL=client-details.component.js.map
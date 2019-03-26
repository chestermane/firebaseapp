import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { ClientService } from "../../services/client.service";
var ClientsComponent = /** @class */ (function () {
    function ClientsComponent(clientService) {
        this.clientService = clientService;
    }
    ClientsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clientService.getClients().subscribe(function (client) {
            _this.clients = client;
            console.log(_this.clients);
        });
    };
    ClientsComponent = tslib_1.__decorate([
        Component({
            selector: "app-clients",
            templateUrl: "./clients.component.html",
            styleUrls: ["./clients.component.css"]
        }),
        tslib_1.__metadata("design:paramtypes", [ClientService])
    ], ClientsComponent);
    return ClientsComponent;
}());
export { ClientsComponent };
//# sourceMappingURL=clients.component.js.map
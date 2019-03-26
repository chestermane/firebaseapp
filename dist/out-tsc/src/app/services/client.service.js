import * as tslib_1 from "tslib";
import { Injectable } from "@angular/core";
import { AngularFirestore } from "angularfire2/firestore";
import { map } from "rxjs/operators";
var ClientService = /** @class */ (function () {
    function ClientService(afs) {
        this.afs = afs;
        this.clientColletion = afs.collection("clients", function (ref) {
            return ref.orderBy("lastName", "asc");
        });
    }
    //Get single client from database
    ClientService.prototype.getClient = function (id) {
        this.clientDoc = this.afs.doc("client/" + id);
        this.client = this.clientDoc.snapshotChanges().pipe(map(function (action) {
            if (action.payload.exists === false) {
                return null;
            }
            else {
                var data = action.payload.data();
                data.id = action.payload.id;
                return data;
            }
        }));
        return this.client;
    };
    //Get all clients in database
    ClientService.prototype.getClients = function () {
        this.clients = this.clientColletion.snapshotChanges().pipe(map(function (changes) {
            return changes.map(function (action) {
                var data = action.payload.doc.data();
                data.id = action.payload.doc.id;
                return data;
            });
        }));
        return this.clients;
    };
    //Add new client to database
    ClientService.prototype.newClient = function (client) {
        this.clientColletion.add(client);
    };
    ClientService = tslib_1.__decorate([
        Injectable({
            providedIn: "root"
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFirestore])
    ], ClientService);
    return ClientService;
}());
export { ClientService };
//# sourceMappingURL=client.service.js.map
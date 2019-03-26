import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "angularfire2/firestore";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Client } from "../models/clients";

@Injectable({
  providedIn: "root"
})
export class ClientService {
  clientColletion: AngularFirestoreCollection<Client>;
  clientDoc: AngularFirestoreDocument<Client>;
  clients: Observable<Client[]>;
  client: Observable<Client>;

  constructor(private afs: AngularFirestore) {
    this.clientColletion = afs.collection("clients", ref =>
      ref.orderBy("lastName", "asc")
    );
  }

  //Get single client from database
  getClient(id: string): Observable<Client> {
    this.clientDoc = this.afs.doc<Client>(`clients/${id}`);
    this.client = this.clientDoc.snapshotChanges().pipe(
      map(action => {
        if (action.payload.exists === false) {
          return null;
        } else {
          const data = action.payload.data() as Client;
          data.id = action.payload.id;
          return data;
        }
      })
    );
    return this.client;
  }

  //Get all clients in database
  getClients(): Observable<Client[]> {
    this.clients = this.clientColletion.snapshotChanges().pipe(
      map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as Client;
          data.id = action.payload.doc.id;
          return data;
        });
      })
    );
    return this.clients;
  }
  //Add new client to database
  newClient(client: Client) {
    this.clientColletion.add(client);
  }
  //Update client infomation
  updateClient(client: Client) {
    this.clientDoc = this.afs.doc(`clients/${client.id}`);
    this.clientDoc.update(client);
  }
  //Remove Client from database
  deleteClient(client: Client) {
    this.clientDoc = this.afs.doc(`clients/${client.id}`);
    this.clientDoc.delete();
  }
}

import { Component, OnInit, ViewChild } from "@angular/core";
import { FlashMessagesService } from "angular2-flash-messages";
import { ClientService } from "../../services/client.service";
import { Router } from "@angular/router";
import { Client } from "../../models/clients";

import { SettingsService } from "../../services/settings.service";

@Component({
  selector: "app-add-client",
  templateUrl: "./add-client.component.html",
  styleUrls: ["./add-client.component.css"]
})
export class AddClientComponent implements OnInit {
  client: Client = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    balance: 0
  };

  disableBalanceOnAdd: boolean;

  @ViewChild("clientForm") form: any;

  //Injecting instance of flash message service for toast errors
  constructor(
    private flashMessage: FlashMessagesService,
    private clientService: ClientService,
    private router: Router,
    private settingsService: SettingsService
  ) {}

  ngOnInit() {
    this.disableBalanceOnAdd = this.settingsService.getSettings().disableBalanceOnAdd;
  }

  //Add client to database
  onSubmit({ value, valid }: { value: Client; valid: boolean }) {
    if (this.disableBalanceOnAdd) {
      value.balance = 0;
    }

    if (!valid) {
      //show error
      this.flashMessage.show("Please complete form correctly", {
        cssClass: "alert-danger",
        timeout: 4000
      });
    } else {
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
  }
}

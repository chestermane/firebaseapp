import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FlashMessagesService } from "angular2-flash-messages";
import { SettingsService } from "../../services/settings.service";
import { SettingsModel } from "../../models/Settings";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.css"]
})
export class SettingsComponent implements OnInit {
  settings: SettingsModel;

  constructor(
    private flashMessagesService: FlashMessagesService,
    private settingsService: SettingsService,
  ) {}

  ngOnInit() {
    this.settings = this.settingsService.getSettings();
  }

  onSubmit() {
    this.settingsService.changeSettings(this.settings);
    this.flashMessagesService.show("Settings Saved", {
      cssClass: "alert-success",
      timeout: 4000
    });
  }
}
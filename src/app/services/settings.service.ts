import { Injectable } from "@angular/core";
import { SettingsModel } from "../models/Settings";

@Injectable({
  providedIn: "root"
})
export class SettingsService {
  settings: SettingsModel = {
    allowRegistration: true,
    disableBalanceOnAdd: false,
    disableBalanceOnEdit: false
  };

  constructor() {
    if (localStorage.getItem("settings") != null) {
      this.settings = JSON.parse(localStorage.getItem("settings"));
    }
  }

  getSettings(): SettingsModel {
    return this.settings;
  }

  changeSettings(settings: SettingsModel) {
    localStorage.setItem("settings", JSON.stringify(settings));
  }
}

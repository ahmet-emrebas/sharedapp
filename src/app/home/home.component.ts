import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  title = "Login Page";
  username = "";
  password = "";
  constructor() {}

  ngOnInit() {}

  alertUser() {
    alert(`username: ${this.username}\npassword:${this.password}`);
  }
}

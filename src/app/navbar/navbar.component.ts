import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  navLinksClass = "hide";
  constructor() {}

  ngOnInit(): void {}

  openNavLinks() {
    if (this.navLinksClass === "nav-links") {
      this.navLinksClass = "hide";
    } else {
      this.navLinksClass = "nav-links";
    }
  }
}

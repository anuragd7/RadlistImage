import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "secondlist",
  moduleId: module.id,
  templateUrl: "./second-list.component.html"
})
export class SecondListComponent {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(["items"]);
  }
}

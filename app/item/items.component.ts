import { Component, OnInit, NgZone } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";
import { ObservableArray } from "tns-core-modules/data/observable-array/observable-array";
import { Router } from "@angular/router";

@Component({
  selector: "ns-items",
  moduleId: module.id,
  templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {
  items: Item[];
  searchResults: ObservableArray<any>;
  private searchServiceSubscriber: any;
  private _templateSelector: (item: any, index: number, items: any) => string;
  private currentSearchResults;

  // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class.
  // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
  constructor(
    private itemService: ItemService,
    private ngZone: NgZone,
    private router: Router
  ) {}

  ngOnInit(): void {
    const self = this;
    // this.items = this.itemService.getItems();
    this.searchServiceSubscriber = this.itemService.searchResultx.subscribe(
      result => {
        // self.ngZone.run(() => {
        if (result.length === 0) {
          console.log("No results returned!");
        } else if (result[0].questionType) {
          self.searchResults = new ObservableArray(result);
          this.itemService.saveSearchResult(JSON.stringify(result));
          console.log("Results returned! from init");
        }
        // });
      }
    );
    this._templateSelector = this.templateSelectorFunction;

    if (JSON.parse(this.itemService.retreiveSearchResult()) !== undefined) {
      this.currentSearchResults = JSON.parse(
        this.itemService.retreiveSearchResult()
      );
      this.searchResults = new ObservableArray(this.currentSearchResults);
    }
  }

  public onSubmit(value: string) {
    console.log("On Feed Component You are searching for " + value);
    this.itemService.getSearchResult(value);
  }

  public goToSecondlist() {
    console.log("going to second list");

    this.router.navigate(["secondlist"]);
  }

  //Selects the template on question type.

  public templateSelectorFunction = (item: any, index: number, items: any) => {
    if (item.questionType) {
      console.log("Question Type " + item.questionType + " Index" + index);
      return item.questionType;
    }
    throw new Error("Unrecognized template!");
  };

  //Get and set methods for the the radlistview template selector implementation
  get templateSelector(): (item: any, index: number, items: any) => string {
    return this._templateSelector;
  }

  set templateSelector(
    value: (item: any, index: number, items: any) => string
  ) {
    this._templateSelector = value;
  }
}

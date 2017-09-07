import { Component, OnInit } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";
import { ObservableArray } from "tns-core-modules/data/observable-array/observable-array";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    items: Item[];
    searchResults: ObservableArray<any>;
    private searchServiceSubscriber: any;
    private _templateSelector: (item: any, index: number, items: any) => string;



    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        // this.items = this.itemService.getItems();
        this.searchServiceSubscriber = this.itemService.searchResultx.subscribe(
            (result) => {
                if (result.length === 0) {
                    console.log("No results returned!");
                }
                else {
                    this.searchResults = new ObservableArray(result);
                    console.log("Results returned! from init" + JSON.stringify(this.searchResults));
                }
            },
        );
        this._templateSelector = this.templateSelectorFunction;

    }

    public onSubmit(value: string) {

        console.log("On Feed Component You are searching for " + value);
        this.itemService.getSearchResult(value);
    }

    //Selects the template on question type.

    public templateSelectorFunction = (item: any, index: number, items: any) => {
        if (item.questionType) {
            return item.questionType;
        }
        throw new Error("Unrecognized template!");
    }

    //Get and set methods for the the radlistview template selector implementation
    get templateSelector(): (item: any, index: number, items: any) => string {
        return this._templateSelector;
    }

    set templateSelector(value: (item: any, index: number, items: any) => string) {
        this._templateSelector = value;
    }

}
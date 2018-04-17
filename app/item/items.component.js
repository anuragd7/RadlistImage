"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var item_service_1 = require("./item.service");
var observable_array_1 = require("tns-core-modules/data/observable-array/observable-array");
var router_1 = require("@angular/router");
var ItemsComponent = (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function ItemsComponent(itemService, ngZone, router) {
        this.itemService = itemService;
        this.ngZone = ngZone;
        this.router = router;
        //Selects the template on question type.
        this.templateSelectorFunction = function (item, index, items) {
            if (item.questionType) {
                console.log("Question Type " + item.questionType + " Index" + index);
                return item.questionType;
            }
            throw new Error("Unrecognized template!");
        };
    }
    ItemsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var self = this;
        // this.items = this.itemService.getItems();
        this.searchServiceSubscriber = this.itemService.searchResultx.subscribe(function (result) {
            // self.ngZone.run(() => {
            if (result.length === 0) {
                console.log("No results returned!");
            }
            else if (result[0].questionType) {
                self.searchResults = new observable_array_1.ObservableArray(result);
                _this.itemService.saveSearchResult(JSON.stringify(result));
                console.log("Results returned! from init");
            }
            // });
        });
        this._templateSelector = this.templateSelectorFunction;
        if (JSON.parse(this.itemService.retreiveSearchResult()) !== undefined) {
            this.currentSearchResults = JSON.parse(this.itemService.retreiveSearchResult());
            this.searchResults = new observable_array_1.ObservableArray(this.currentSearchResults);
        }
    };
    ItemsComponent.prototype.onSubmit = function (value) {
        console.log("On Feed Component You are searching for " + value);
        this.itemService.getSearchResult(value);
    };
    ItemsComponent.prototype.goToSecondlist = function () {
        console.log("going to second list");
        this.router.navigate(["secondlist"]);
    };
    Object.defineProperty(ItemsComponent.prototype, "templateSelector", {
        //Get and set methods for the the radlistview template selector implementation
        get: function () {
            return this._templateSelector;
        },
        set: function (value) {
            this._templateSelector = value;
        },
        enumerable: true,
        configurable: true
    });
    ItemsComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "./items.component.html"
        }),
        __metadata("design:paramtypes", [item_service_1.ItemService,
            core_1.NgZone,
            router_1.Router])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBEO0FBRzFELCtDQUE2QztBQUM3Qyw0RkFBMEY7QUFDMUYsMENBQXlDO0FBT3pDO0lBT0UsNElBQTRJO0lBQzVJLGlIQUFpSDtJQUNqSCx3QkFDVSxXQUF3QixFQUN4QixNQUFjLEVBQ2QsTUFBYztRQUZkLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBd0N4Qix3Q0FBd0M7UUFFakMsNkJBQXdCLEdBQUcsVUFBQyxJQUFTLEVBQUUsS0FBYSxFQUFFLEtBQVU7WUFDckUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLEdBQUcsS0FBSyxDQUFDLENBQUM7Z0JBQ3JFLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQzNCLENBQUM7WUFDRCxNQUFNLElBQUksS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDNUMsQ0FBQyxDQUFDO0lBL0NDLENBQUM7SUFFSixpQ0FBUSxHQUFSO1FBQUEsaUJBd0JDO1FBdkJDLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQztRQUNsQiw0Q0FBNEM7UUFDNUMsSUFBSSxDQUFDLHVCQUF1QixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FDckUsVUFBQSxNQUFNO1lBQ0osMEJBQTBCO1lBQzFCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1lBQ3RDLENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7Z0JBQ2xDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxrQ0FBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNqRCxLQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1lBQzdDLENBQUM7WUFDRCxNQUFNO1FBQ1IsQ0FBQyxDQUNGLENBQUM7UUFDRixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDO1FBRXZELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUN0RSxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FDcEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxvQkFBb0IsRUFBRSxDQUN4QyxDQUFDO1lBQ0YsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLGtDQUFlLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDdEUsQ0FBQztJQUNILENBQUM7SUFFTSxpQ0FBUSxHQUFmLFVBQWdCLEtBQWE7UUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQ0FBMEMsR0FBRyxLQUFLLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRU0sdUNBQWMsR0FBckI7UUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFFcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFhRCxzQkFBSSw0Q0FBZ0I7UUFEcEIsOEVBQThFO2FBQzlFO1lBQ0UsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztRQUNoQyxDQUFDO2FBRUQsVUFDRSxLQUF1RDtZQUV2RCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQ2pDLENBQUM7OztPQU5BO0lBakVVLGNBQWM7UUFMMUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1NBQ3RDLENBQUM7eUNBV3VCLDBCQUFXO1lBQ2hCLGFBQU07WUFDTixlQUFNO09BWmIsY0FBYyxDQXdFMUI7SUFBRCxxQkFBQztDQUFBLEFBeEVELElBd0VDO0FBeEVZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE5nWm9uZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IEl0ZW0gfSBmcm9tIFwiLi9pdGVtXCI7XG5pbXBvcnQgeyBJdGVtU2VydmljZSB9IGZyb20gXCIuL2l0ZW0uc2VydmljZVwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZUFycmF5IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlLWFycmF5L29ic2VydmFibGUtYXJyYXlcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm5zLWl0ZW1zXCIsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiBcIi4vaXRlbXMuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBJdGVtc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGl0ZW1zOiBJdGVtW107XG4gIHNlYXJjaFJlc3VsdHM6IE9ic2VydmFibGVBcnJheTxhbnk+O1xuICBwcml2YXRlIHNlYXJjaFNlcnZpY2VTdWJzY3JpYmVyOiBhbnk7XG4gIHByaXZhdGUgX3RlbXBsYXRlU2VsZWN0b3I6IChpdGVtOiBhbnksIGluZGV4OiBudW1iZXIsIGl0ZW1zOiBhbnkpID0+IHN0cmluZztcbiAgcHJpdmF0ZSBjdXJyZW50U2VhcmNoUmVzdWx0cztcblxuICAvLyBUaGlzIHBhdHRlcm4gbWFrZXMgdXNlIG9mIEFuZ3VsYXLigJlzIGRlcGVuZGVuY3kgaW5qZWN0aW9uIGltcGxlbWVudGF0aW9uIHRvIGluamVjdCBhbiBpbnN0YW5jZSBvZiB0aGUgSXRlbVNlcnZpY2Ugc2VydmljZSBpbnRvIHRoaXMgY2xhc3MuXG4gIC8vIEFuZ3VsYXIga25vd3MgYWJvdXQgdGhpcyBzZXJ2aWNlIGJlY2F1c2UgaXQgaXMgaW5jbHVkZWQgaW4geW91ciBhcHDigJlzIG1haW4gTmdNb2R1bGUsIGRlZmluZWQgaW4gYXBwLm1vZHVsZS50cy5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBpdGVtU2VydmljZTogSXRlbVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAvLyB0aGlzLml0ZW1zID0gdGhpcy5pdGVtU2VydmljZS5nZXRJdGVtcygpO1xuICAgIHRoaXMuc2VhcmNoU2VydmljZVN1YnNjcmliZXIgPSB0aGlzLml0ZW1TZXJ2aWNlLnNlYXJjaFJlc3VsdHguc3Vic2NyaWJlKFxuICAgICAgcmVzdWx0ID0+IHtcbiAgICAgICAgLy8gc2VsZi5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vIHJlc3VsdHMgcmV0dXJuZWQhXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdFswXS5xdWVzdGlvblR5cGUpIHtcbiAgICAgICAgICBzZWxmLnNlYXJjaFJlc3VsdHMgPSBuZXcgT2JzZXJ2YWJsZUFycmF5KHJlc3VsdCk7XG4gICAgICAgICAgdGhpcy5pdGVtU2VydmljZS5zYXZlU2VhcmNoUmVzdWx0KEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiUmVzdWx0cyByZXR1cm5lZCEgZnJvbSBpbml0XCIpO1xuICAgICAgICB9XG4gICAgICAgIC8vIH0pO1xuICAgICAgfVxuICAgICk7XG4gICAgdGhpcy5fdGVtcGxhdGVTZWxlY3RvciA9IHRoaXMudGVtcGxhdGVTZWxlY3RvckZ1bmN0aW9uO1xuXG4gICAgaWYgKEpTT04ucGFyc2UodGhpcy5pdGVtU2VydmljZS5yZXRyZWl2ZVNlYXJjaFJlc3VsdCgpKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmN1cnJlbnRTZWFyY2hSZXN1bHRzID0gSlNPTi5wYXJzZShcbiAgICAgICAgdGhpcy5pdGVtU2VydmljZS5yZXRyZWl2ZVNlYXJjaFJlc3VsdCgpXG4gICAgICApO1xuICAgICAgdGhpcy5zZWFyY2hSZXN1bHRzID0gbmV3IE9ic2VydmFibGVBcnJheSh0aGlzLmN1cnJlbnRTZWFyY2hSZXN1bHRzKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgb25TdWJtaXQodmFsdWU6IHN0cmluZykge1xuICAgIGNvbnNvbGUubG9nKFwiT24gRmVlZCBDb21wb25lbnQgWW91IGFyZSBzZWFyY2hpbmcgZm9yIFwiICsgdmFsdWUpO1xuICAgIHRoaXMuaXRlbVNlcnZpY2UuZ2V0U2VhcmNoUmVzdWx0KHZhbHVlKTtcbiAgfVxuXG4gIHB1YmxpYyBnb1RvU2Vjb25kbGlzdCgpIHtcbiAgICBjb25zb2xlLmxvZyhcImdvaW5nIHRvIHNlY29uZCBsaXN0XCIpO1xuXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wic2Vjb25kbGlzdFwiXSk7XG4gIH1cblxuICAvL1NlbGVjdHMgdGhlIHRlbXBsYXRlIG9uIHF1ZXN0aW9uIHR5cGUuXG5cbiAgcHVibGljIHRlbXBsYXRlU2VsZWN0b3JGdW5jdGlvbiA9IChpdGVtOiBhbnksIGluZGV4OiBudW1iZXIsIGl0ZW1zOiBhbnkpID0+IHtcbiAgICBpZiAoaXRlbS5xdWVzdGlvblR5cGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiUXVlc3Rpb24gVHlwZSBcIiArIGl0ZW0ucXVlc3Rpb25UeXBlICsgXCIgSW5kZXhcIiArIGluZGV4KTtcbiAgICAgIHJldHVybiBpdGVtLnF1ZXN0aW9uVHlwZTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiVW5yZWNvZ25pemVkIHRlbXBsYXRlIVwiKTtcbiAgfTtcblxuICAvL0dldCBhbmQgc2V0IG1ldGhvZHMgZm9yIHRoZSB0aGUgcmFkbGlzdHZpZXcgdGVtcGxhdGUgc2VsZWN0b3IgaW1wbGVtZW50YXRpb25cbiAgZ2V0IHRlbXBsYXRlU2VsZWN0b3IoKTogKGl0ZW06IGFueSwgaW5kZXg6IG51bWJlciwgaXRlbXM6IGFueSkgPT4gc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdGVtcGxhdGVTZWxlY3RvcjtcbiAgfVxuXG4gIHNldCB0ZW1wbGF0ZVNlbGVjdG9yKFxuICAgIHZhbHVlOiAoaXRlbTogYW55LCBpbmRleDogbnVtYmVyLCBpdGVtczogYW55KSA9PiBzdHJpbmdcbiAgKSB7XG4gICAgdGhpcy5fdGVtcGxhdGVTZWxlY3RvciA9IHZhbHVlO1xuICB9XG59XG4iXX0=
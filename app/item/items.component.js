"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var item_service_1 = require("./item.service");
var observable_array_1 = require("tns-core-modules/data/observable-array/observable-array");
var ItemsComponent = (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function ItemsComponent(itemService) {
        this.itemService = itemService;
        //Selects the template on question type.
        this.templateSelectorFunction = function (item, index, items) {
            if (item.questionType) {
                return item.questionType;
            }
            throw new Error("Unrecognized template!");
        };
    }
    ItemsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.items = this.itemService.getItems();
        this.searchServiceSubscriber = this.itemService.searchResultx.subscribe(function (result) {
            if (result.length === 0) {
                console.log("No results returned!");
            }
            else {
                _this.searchResults = new observable_array_1.ObservableArray(result);
                console.log("Results returned! from init" + JSON.stringify(_this.searchResults));
            }
        });
        this._templateSelector = this.templateSelectorFunction;
    };
    ItemsComponent.prototype.onSubmit = function (value) {
        console.log("On Feed Component You are searching for " + value);
        this.itemService.getSearchResult(value);
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
            templateUrl: "./items.component.html",
        }),
        __metadata("design:paramtypes", [item_service_1.ItemService])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBR2xELCtDQUE2QztBQUM3Qyw0RkFBMEY7QUFPMUY7SUFRSSw2SUFBNkk7SUFDN0ksaUhBQWlIO0lBQ2pILHdCQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQXlCNUMsd0NBQXdDO1FBRWpDLDZCQUF3QixHQUFHLFVBQUMsSUFBUyxFQUFFLEtBQWEsRUFBRSxLQUFVO1lBQ25FLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO2dCQUNwQixNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUM3QixDQUFDO1lBQ0QsTUFBTSxJQUFJLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQzlDLENBQUMsQ0FBQTtJQWhDK0MsQ0FBQztJQUVqRCxpQ0FBUSxHQUFSO1FBQUEsaUJBZUM7UUFkRyw0Q0FBNEM7UUFDNUMsSUFBSSxDQUFDLHVCQUF1QixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FDbkUsVUFBQyxNQUFNO1lBQ0gsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7WUFDeEMsQ0FBQztZQUNELElBQUksQ0FBQyxDQUFDO2dCQUNGLEtBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxrQ0FBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNqRCxPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7WUFDcEYsQ0FBQztRQUNMLENBQUMsQ0FDSixDQUFDO1FBQ0YsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQztJQUUzRCxDQUFDO0lBRU0saUNBQVEsR0FBZixVQUFnQixLQUFhO1FBRXpCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMENBQTBDLEdBQUcsS0FBSyxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQVlELHNCQUFJLDRDQUFnQjtRQURwQiw4RUFBOEU7YUFDOUU7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1FBQ2xDLENBQUM7YUFFRCxVQUFxQixLQUF1RDtZQUN4RSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQ25DLENBQUM7OztPQUpBO0lBL0NRLGNBQWM7UUFMMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1NBQ3hDLENBQUM7eUNBV21DLDBCQUFXO09BVm5DLGNBQWMsQ0FxRDFCO0lBQUQscUJBQUM7Q0FBQSxBQXJERCxJQXFEQztBQXJEWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuL2l0ZW1cIjtcbmltcG9ydCB7IEl0ZW1TZXJ2aWNlIH0gZnJvbSBcIi4vaXRlbS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXkvb2JzZXJ2YWJsZS1hcnJheVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1pdGVtc1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9pdGVtcy5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBJdGVtc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgaXRlbXM6IEl0ZW1bXTtcbiAgICBzZWFyY2hSZXN1bHRzOiBPYnNlcnZhYmxlQXJyYXk8YW55PjtcbiAgICBwcml2YXRlIHNlYXJjaFNlcnZpY2VTdWJzY3JpYmVyOiBhbnk7XG4gICAgcHJpdmF0ZSBfdGVtcGxhdGVTZWxlY3RvcjogKGl0ZW06IGFueSwgaW5kZXg6IG51bWJlciwgaXRlbXM6IGFueSkgPT4gc3RyaW5nO1xuXG5cblxuICAgIC8vIFRoaXMgcGF0dGVybiBtYWtlcyB1c2Ugb2YgQW5ndWxhcuKAmXMgZGVwZW5kZW5jeSBpbmplY3Rpb24gaW1wbGVtZW50YXRpb24gdG8gaW5qZWN0IGFuIGluc3RhbmNlIG9mIHRoZSBJdGVtU2VydmljZSBzZXJ2aWNlIGludG8gdGhpcyBjbGFzcy4gXG4gICAgLy8gQW5ndWxhciBrbm93cyBhYm91dCB0aGlzIHNlcnZpY2UgYmVjYXVzZSBpdCBpcyBpbmNsdWRlZCBpbiB5b3VyIGFwcOKAmXMgbWFpbiBOZ01vZHVsZSwgZGVmaW5lZCBpbiBhcHAubW9kdWxlLnRzLlxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaXRlbVNlcnZpY2U6IEl0ZW1TZXJ2aWNlKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICAvLyB0aGlzLml0ZW1zID0gdGhpcy5pdGVtU2VydmljZS5nZXRJdGVtcygpO1xuICAgICAgICB0aGlzLnNlYXJjaFNlcnZpY2VTdWJzY3JpYmVyID0gdGhpcy5pdGVtU2VydmljZS5zZWFyY2hSZXN1bHR4LnN1YnNjcmliZShcbiAgICAgICAgICAgIChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vIHJlc3VsdHMgcmV0dXJuZWQhXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hSZXN1bHRzID0gbmV3IE9ic2VydmFibGVBcnJheShyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlc3VsdHMgcmV0dXJuZWQhIGZyb20gaW5pdFwiICsgSlNPTi5zdHJpbmdpZnkodGhpcy5zZWFyY2hSZXN1bHRzKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5fdGVtcGxhdGVTZWxlY3RvciA9IHRoaXMudGVtcGxhdGVTZWxlY3RvckZ1bmN0aW9uO1xuXG4gICAgfVxuXG4gICAgcHVibGljIG9uU3VibWl0KHZhbHVlOiBzdHJpbmcpIHtcblxuICAgICAgICBjb25zb2xlLmxvZyhcIk9uIEZlZWQgQ29tcG9uZW50IFlvdSBhcmUgc2VhcmNoaW5nIGZvciBcIiArIHZhbHVlKTtcbiAgICAgICAgdGhpcy5pdGVtU2VydmljZS5nZXRTZWFyY2hSZXN1bHQodmFsdWUpO1xuICAgIH1cblxuICAgIC8vU2VsZWN0cyB0aGUgdGVtcGxhdGUgb24gcXVlc3Rpb24gdHlwZS5cblxuICAgIHB1YmxpYyB0ZW1wbGF0ZVNlbGVjdG9yRnVuY3Rpb24gPSAoaXRlbTogYW55LCBpbmRleDogbnVtYmVyLCBpdGVtczogYW55KSA9PiB7XG4gICAgICAgIGlmIChpdGVtLnF1ZXN0aW9uVHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0ucXVlc3Rpb25UeXBlO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVucmVjb2duaXplZCB0ZW1wbGF0ZSFcIik7XG4gICAgfVxuXG4gICAgLy9HZXQgYW5kIHNldCBtZXRob2RzIGZvciB0aGUgdGhlIHJhZGxpc3R2aWV3IHRlbXBsYXRlIHNlbGVjdG9yIGltcGxlbWVudGF0aW9uXG4gICAgZ2V0IHRlbXBsYXRlU2VsZWN0b3IoKTogKGl0ZW06IGFueSwgaW5kZXg6IG51bWJlciwgaXRlbXM6IGFueSkgPT4gc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RlbXBsYXRlU2VsZWN0b3I7XG4gICAgfVxuXG4gICAgc2V0IHRlbXBsYXRlU2VsZWN0b3IodmFsdWU6IChpdGVtOiBhbnksIGluZGV4OiBudW1iZXIsIGl0ZW1zOiBhbnkpID0+IHN0cmluZykge1xuICAgICAgICB0aGlzLl90ZW1wbGF0ZVNlbGVjdG9yID0gdmFsdWU7XG4gICAgfVxuXG59Il19
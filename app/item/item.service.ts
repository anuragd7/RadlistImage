import { Injectable, EventEmitter, NgZone } from "@angular/core";
import { Http, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { setString, getString, remove } from "application-settings";
// import "rxjs/Rx";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";

import { Item } from "./item";

@Injectable()
export class ItemService {
  searchResultx = new EventEmitter<any>();

  private items = new Array<Item>(
    { id: 1, name: "Ter Stegen", role: "Goalkeeper" },
    { id: 3, name: "Piqué", role: "Defender" },
    { id: 4, name: "I. Rakitic", role: "Midfielder" },
    { id: 5, name: "Sergio", role: "Midfielder" },
    { id: 6, name: "Denis Suárez", role: "Midfielder" },
    { id: 7, name: "Arda", role: "Midfielder" },
    { id: 8, name: "A. Iniesta", role: "Midfielder" },
    { id: 9, name: "Suárez", role: "Forward" },
    { id: 10, name: "Messi", role: "Forward" },
    { id: 11, name: "Neymar", role: "Forward" },
    { id: 12, name: "Rafinha", role: "Midfielder" },
    { id: 13, name: "Cillessen", role: "Goalkeeper" },
    { id: 14, name: "Mascherano", role: "Defender" },
    { id: 17, name: "Paco Alcácer", role: "Forward" },
    { id: 18, name: "Jordi Alba", role: "Defender" },
    { id: 19, name: "Digne", role: "Defender" },
    { id: 20, name: "Sergi Roberto", role: "Midfielder" },
    { id: 21, name: "André Gomes", role: "Midfielder" },
    { id: 22, name: "Aleix Vidal", role: "Midfielder" },
    { id: 23, name: "Umtiti", role: "Defender" },
    { id: 24, name: "Mathieu", role: "Defender" },
    { id: 25, name: "Masip", role: "Goalkeeper" }
  );
  constructor(
    private http: Http // private ngZone: NgZone, // private setMyTestService: SetMyTestService,
  ) {}

  getItems(): Item[] {
    return this.items;
  }

  getItem(id: number): Item {
    return this.items.filter(item => item.id === id)[0];
  }

  public getSearchResult(value: string) {
    const headers = new Headers({
      "X-Algolia-Application-Id": "5KDUCXJL1M",
      "X-Algolia-API-Key": "573fbb46cc01f1543f35cca24b80d1e1"
    });
    const options = new RequestOptions({ headers: headers });
    const valueSent = new URLSearchParams(value);
    this.http
      .get(
        "https://5KDUCXJL1M-dsn.algolia.net/1/indexes/Questions?query=" +
          valueSent,
        options
      )
      .map(result => result.json())
      .do(result =>
        console.log("HALLELUAH! THE SEARCH IS RETURNED FOR : " + valueSent)
      )
      .subscribe(
        result => {
          const self = this;
          const myArray = [];
          //console.log("Data came : " + JSON.stringify(result.hits));
          for (const key in result.hits) {
            if (key) {
              myArray.push(result.hits[key]);
            }
          }

          console.log("Number of Search Results is:", myArray.length);

          self.searchResultx.emit(myArray);
        },
        error => {
          alert(
            "Oops! There seems to be a problem connecting to our server. Please try again in a few seconds."
          );
        }
      );
  }

  public saveSearchResult(result: string) {
    setString("searchresult", result);
  }

  public retreiveSearchResult() {
    return getString("searchresult");
  }

  public removeSearchResult() {
    remove("searchResult");
  }
}

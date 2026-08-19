import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';

interface AutoCompleteCompleteEvent {
    originalEvent: Event;
    query: string;
}

@Component({
  selector: 'app-search',
  imports: [AutoCompleteModule, FormsModule],
  templateUrl: './search.html',
  styleUrl: './search.scss',
})
export class Search {

  searchText: string = "Mens wears";

  items: any[] = [];
    value: any;

  currentValue(event: any){
    this.searchText = event.target.value;
  }

  search(event: AutoCompleteCompleteEvent) {
        this.items = [...Array(10).keys()].map((item) => event.query + '-' + item);
  }
}

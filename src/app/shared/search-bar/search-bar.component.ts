import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Output() searchTextChanged = new EventEmitter<string>()
  @Output() searchAddressChanged = new EventEmitter<string>()

  selectedAddress = ""
  searchText = ""
  
  constructor() { }

  ngOnInit(): void {
  }

}

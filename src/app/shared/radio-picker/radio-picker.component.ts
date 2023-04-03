import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface Choice {
  id: number
  name: string
}

@Component({
  selector: 'app-radio-picker',
  templateUrl: './radio-picker.component.html',
  styleUrls: ['./radio-picker.component.scss']
})
export class RadioPickerComponent implements OnInit {

  @Input() choices:any[] = []
  @Output() selected = new EventEmitter<Choice|null>()
  private _selectedChoice: Choice | null = null;
  public get selectedChoice() {
    return this._selectedChoice;
  }
  public set selectedChoice(value) {
    this._selectedChoice = value;
  }

  select(choice:Choice|null) {
    this.selectedChoice = choice
    this.selected.emit(choice)
  }

  constructor() { }

  ngOnInit(): void {
  }

}

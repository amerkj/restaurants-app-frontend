import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-drag-scroll',
  templateUrl: './drag-scroll.component.html',
  styleUrls: ['./drag-scroll.component.scss']
})
export class DragScrollComponent implements OnInit {
  
  private _isDown = false;
  public get isDown() {
    return this._isDown;
  }
  public set isDown(value) {
    this._isDown = value;
  }

  private _startX = 0;
  public get startX() {
    return this._startX;
  }
  public set startX(value) {
    this._startX = value;
  }

  private _scrollLeft = 0;
  public get scrollLeft() {
    return this._scrollLeft;
  }
  public set scrollLeft(value) {
    this._scrollLeft = value;
  }

  @Output() onDragEnd: EventEmitter<any> = new EventEmitter();
  @Output() onDragStart: EventEmitter<any> = new EventEmitter();
  @Input() className = '';

  getSTlWrapperElement = (elem:any) => elem.closest('.drag-slider-wrapper');
  

  mouseDown(e:any) {
    this.isDown = true
    this.startX = e.pageX - this.getSTlWrapperElement(e.target).offsetLeft
    this.scrollLeft = this.getSTlWrapperElement(e.target).scrollLeft
  };

  mouseUp() {
    this.isDown = false
    this.onDragEnd.emit();
  };
  mouseLeave() {
    this.isDown = false
    this.onDragEnd.emit()
  };
  mouseMove(e:any) {
    if (!this.isDown) return;
    e.preventDefault();
    this.onDragStart.emit()
    const x = e.pageX - this.getSTlWrapperElement(e.target).offsetLeft;
    const walk = (x - this.startX) * 2;
    this.getSTlWrapperElement(e.target).scrollLeft = this.scrollLeft - walk;
  };

  constructor() { }

  ngOnInit(): void {
  }

}

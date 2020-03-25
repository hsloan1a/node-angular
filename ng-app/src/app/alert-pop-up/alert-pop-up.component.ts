import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-alert-pop-up',
  templateUrl: './alert-pop-up.component.html',
  styleUrls: ['./alert-pop-up.component.css']
})
export class AlertPopUpComponent implements OnInit {

  @Input() errorMessage;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}

import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlertPopUpComponent } from '../alert-pop-up/alert-pop-up.component';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpErrorService {

  constructor(private _ngbModal: NgbModal) { }

  showError(errors: HttpErrorResponse) {
    const modelRef = this._ngbModal.open(AlertPopUpComponent);
    modelRef.componentInstance.errorMessage = errors.message;
  }
}

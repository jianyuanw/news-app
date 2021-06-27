import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private subject = new Subject<any>();

  sendAlert(message: string): void {
    this.subject.next(message);
  }

  clearAlert(): void {
    this.subject.next();
  }

  getAlert(): Observable<any> {
    return this.subject.asObservable();
  }
}
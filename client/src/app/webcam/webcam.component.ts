import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebcamImage, WebcamUtil } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-webcam',
  templateUrl: './webcam.component.html',
  styleUrls: ['./webcam.component.css']
})
export class WebcamComponent implements OnInit {
  multipleWebcamsAvailable: boolean;
  trigger: Subject<void> = new Subject<void>();
  nextWebcam: Subject<boolean|string> = new Subject<boolean|string>();

  constructor(private router: Router) {}

  ngOnInit(): void {
    WebcamUtil.getAvailableVideoInputs()
      .then((mediaDevices: MediaDeviceInfo[]) => {
        this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
      });
  }

  back(): void {
    this.router.navigateByUrl('articles/post');
  }

  capture(): void {
    this.trigger.next();
  }

  switch(): void {
    this.nextWebcam.next(true);
  }

  handleImage(webcamImage: WebcamImage): void {
    localStorage.setItem('imageSrc', webcamImage.imageAsDataUrl);
    this.router.navigateByUrl('articles/post');
  }

  get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  get nextWebcamObservable(): Observable<boolean|string> {
    return this.nextWebcam.asObservable();
  }
}

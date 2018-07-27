import { Component } from '@angular/core';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private spinnerService: Ng4LoadingSpinnerService){
     this.spinnerService.show();
  }
}

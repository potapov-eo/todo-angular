import { Component } from '@angular/core';
import { TodosServiceService } from '../../service/todos-service.service';
import { PreloaderService } from '../../service/preloader.service';

@Component({
  selector: 'app-spiner',
  templateUrl: './spiner.component.html',
  styleUrls: ['./spiner.component.scss']
})
export class SpinerComponent {
  constructor(public preloaderService: PreloaderService ) {
  }
}

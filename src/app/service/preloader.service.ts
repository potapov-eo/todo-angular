import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreloaderService {
  public static loadingCount: number = 0
  constructor() { }

  getPreloaderCount():number{
    return  PreloaderService.loadingCount

  }
  showPreloader(): void {
    PreloaderService.loadingCount++
  }
  hidePreloader(): void {
    // таймаут для наглядности
    setTimeout(function(){
      PreloaderService.loadingCount--
    }, 2000)

  }
}

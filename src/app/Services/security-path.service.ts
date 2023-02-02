import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecurityPathService {

  constructor() { }

  public hasPermissions(path: string): boolean {
    if (path.toLocaleLowerCase() === '/standalone') {
      return true;
    } else {
      alert('No tiene permisos.!');
      console.log('No tiene permisos');
      return false;
    }
  }
}

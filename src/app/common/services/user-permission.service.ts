import {Injectable} from '@angular/core';
import {HttpService} from './http.service';
import {UserPermission} from '../../shared/interfaces/user-permission';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable()
export  class UserPermissionService {
   private userPermissionSubject = new Subject<UserPermission>();
  // private userPermissionSubject = new BehaviorSubjectect<UserPermission>({});
  /*constructor(private httpService: HttpService) {
  }*/
  public setUserPermission(userPermission: UserPermission): void{
      this.userPermissionSubject.next(userPermission);
  }
  public getUserPermission(): Observable<UserPermission>{
    return this.userPermissionSubject.asObservable();
  }
}

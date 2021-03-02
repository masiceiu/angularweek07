import {Injectable} from '@angular/core';
import {TeacherListRest} from '../../shared/interfaces';
import {HttpService} from './http.service';
import {UserServiceRes} from '../../shared/interfaces/user-service-res';
import {environment} from '../../../environments/environment';

@Injectable()
export  class UserService{
  constructor(private httpService: HttpService) {
  }
  public getUserPermission(): Promise<UserServiceRes>{
    const url = environment.url.getUserPermissionJson;
    return this.httpService.get(url);
  }
}

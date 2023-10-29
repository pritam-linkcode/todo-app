import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: any;
  employees: any[] = [
    {
      firstName: 'Pritam',
      lastName: 'Kamble',
      email: 'Test@test.com'
    },
    {
      firstName: 'Pritam2',
      lastName: 'Kamble2',
      email: 'Test@test.com2 '
    },
  ];

  constructor() { }
}

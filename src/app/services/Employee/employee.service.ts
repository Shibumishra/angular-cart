import { Injectable } from '@angular/core';
import { Employee } from '../../interface/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employee:Employee = {
    sno: 'aa101',
    name: 'john',
    age: 35,
    designation: 'Software Engineer',
    doj: new Date(),
    salary: 45000
  };

  constructor() { }

  public getEmployee():Employee{
    return this.employee;
  }
}

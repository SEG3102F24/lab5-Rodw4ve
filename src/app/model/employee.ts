export class Employee {

  public name: string;
  public dateOfBirth: string;
  public city: string;
  public salary: number;
  public gender?: string;
  public email?: string;
  public id?: string | null;



  constructor(name: string, dateOfBirth: string, city: string, salary: number,gender?: string, email?: string, id?: string | null) {
    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.city = city;
    this.salary = salary;
    this.gender = gender;
    this.email = email;
    this.id = null;
  }
 
  
}

import { Injectable,inject } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Employee} from "../model/employee";
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { collection } from '@angular/fire/firestore';
import {
  Firestore,
  collectionData,
  addDoc,
  doc,
  setDoc,
  deleteDoc
  } from '@angular/fire/firestore';
  


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private firestore: Firestore = inject(Firestore);

  getEmployee(): Observable<Employee[]> {
    const employees = collection(this.firestore, 'employees');
    return collectionData(employees, {idField: 'id'}) as Observable<Employee[]>;
    
  }

  addEmployee(employee: Employee) {
    const employees = collection(this.firestore, 'employees');
    delete employee.id;
    // @ts-ignore
    return addDoc(employees, {...employee});
  }
}

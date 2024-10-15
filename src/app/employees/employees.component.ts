import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { RouterLink } from '@angular/router';
import { NgFor, AsyncPipe, DatePipe } from '@angular/common';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrA97S18beIhkznwPyrL30e5BDsv3gTiE",
  authDomain: "rodl5-9d10b.firebaseapp.com",
  projectId: "rodl5-9d10b",
  storageBucket: "rodl5-9d10b.appspot.com",
  messagingSenderId: "885906608766",
  appId: "1:885906608766:web:1e001720a527c40bff7e2f",
  measurementId: "G-NF2HV8MGD6"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  standalone: true,
  imports: [RouterLink, NgFor, AsyncPipe, DatePipe],
})
export class EmployeesComponent implements OnInit {
  protected employees: any[] = [];

  async ngOnInit() {
    const querySnapshot = await getDocs(collection(db, 'employees'));
    this.employees = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      // Ensure dateOfBirth is a Date object
      if (data['dateOfBirth']) {
        data['dateOfBirth'] = data['dateOfBirth'].toDate();
      }
      return data;
    });
  }
}
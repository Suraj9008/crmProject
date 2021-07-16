import {Component, ViewChild,OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-email-logs',
  templateUrl: './email-logs.component.html',
  styleUrls: ['./email-logs.component.scss']
})
export class EmailLogsComponent implements OnInit {
  displayedColumns = ['id', 'contactName', 'email','content', 'date',  'status','action'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor() {
    // Create 100 users
    const users: UserData[] = [];
    for (let i = 1; i <= 100; i++) { users.push(createNewUser(i)); }

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }
  ngOnInit(): void {}

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    contactName: name,
    mail:Mail[Math.round(Math.random() * (Mail.length - 1))],
    content:Content[Math.round(Math.random() * (Content.length - 1))],
    date:DATE[Math.round(Math.random() * (DATE.length - 1))],
    status:Status[Math.round(Math.random() * (Status.length - 1))]
  };
}

// progress: Math.round(Math.random() * 100).toString(),
/** Constants used to fill up our data base. */

const NAMES = ['Michael Holz', ' Paula Wilson', 'Antonio Moreno', ' Mary Saveley', 'Martin Sommer', 'Cap gemini','TCS', 'Wiprow','Infosyce'];
const Content = ['Lorem ipsum dolor sit amet....'];
const DATE = ['7-02-021','12-08-020','25-12-020','20-01-021','28-06-021'];
const Mail = ['samplemail@gmail.com','samplemail@gmail.com','samplemail@gmail.com','samplemail@gmail.com','samplemail@gmail.com','samplemail@gmail.com','samplemail@gmail.com','samplemail@gmail.com','samplemail@gmail.com','samplemail@gmail.com'];
const Status = ['active','pending','suspended','active','pending','complete','reject','pending','active','suspended'];

export interface UserData {
  id: string;
  contactName: string;
  mail:string;
  content:string;
  date:string;
  status:string
}

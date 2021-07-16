import {Component, ViewChild,OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
  styleUrls: ['./profile-list.component.scss']
})
export class ProfileListComponent implements OnInit {
  displayedColumns = ['id', 'name', 'email', 'role', 'status', 'compareWith','password','action'];
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
    name: name,
    email:Mail[Math.round(Math.random() * (Mail.length - 1))],
    role:Role[Math.round(Math.random() * (Role.length - 1))],
    status:Address[Math.round(Math.random() * (Address.length - 1))],
    compareWith:Compare[Math.round(Math.random() * (Compare.length - 1))],
  };
}

// progress: Math.round(Math.random() * 100).toString(),
/** Constants used to fill up our data base. */

const NAMES = ['Jon Doe','Sam Doe','Alis Maxigun','Kelis Mark','Bruse Mark','Sam Maxigun','kelis Mark','Bruse Doe','Alies Mark','jon maxign'];
const Address = ['Active','Suspended','Inactive'];
const Phone = [9890359008,9665872937,9922331178,8484871686,7030757578,8007576575,9595971696,8380848521,7325068822,7040757825];
const Mail = ['samplemail@gmail.com','samplemail@gmail.com','samplemail@gmail.com','samplemail@gmail.com','samplemail@gmail.com','samplemail@gmail.com','samplemail@gmail.com','samplemail@gmail.com','samplemail@gmail.com','samplemail@gmail.com'];
const Role = ['manager','tester','developer','Hr','Data-Scientist','business analyst','developer','manager','tester','Data-Scientist'];
const Compare = ["1","6","3","4","2","5","7","4"]
export interface UserData {
  id: string;
  name: string;
  email:string;
  role:string;
  status:string;
  compareWith:string;
}

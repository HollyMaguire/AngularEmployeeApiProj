import { Component,OnInit} from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ EmployeeService ],
})
export class AppComponent implements OnInit{
 
  public employees: any;
  public errorMsg: any;
  constructor(private epmService: EmployeeService) { }

  ngOnInit( ): void {
    this.epmService.getEmployees().subscribe(
      (data) => {this.employees = data; console.log(data)},
      (error) => this.errorMsg = error,
      () => console.log("Completed")
 )
}

}
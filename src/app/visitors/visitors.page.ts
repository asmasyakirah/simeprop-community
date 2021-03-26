import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visitors',
  templateUrl: './visitors.page.html',
  styleUrls: ['./visitors.page.scss'],
})
export class VisitorsPage implements OnInit {

  visitorsData: any = [];

  constructor(private router: Router) 
  {
  }

  ngOnInit() 
  {
    this.getVisitors(); 
  }

  getVisitors()
  {    
    fetch('../../assets/data/data-visitors.json').then(res => res.json())
    .then(json => {
      this.visitorsData = json;
      console.log(this.visitorsData);
    });
  }

  getVisitor(id: any)
  {
    this.router.navigate(['visitor', id]);
  }

  getVisitorEdit(id: any)
  {
    this.router.navigate(['visitor-edit', id]);
  }

  getVisitorDelete(id: any)
  {
    console.log("todo delete visitor " + id);
  }

}

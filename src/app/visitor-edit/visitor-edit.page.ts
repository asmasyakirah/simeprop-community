import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-visitor-edit',
  templateUrl: './visitor-edit.page.html',
  styleUrls: ['./visitor-edit.page.scss'],
})
export class VisitorEditPage implements OnInit {

  visitorId: number;
  visitorData: any = [];
  visitorsData: any = [];

  constructor(private activatedRoute: ActivatedRoute) 
  {
    this.activatedRoute.params.subscribe(result => {
      this.visitorId = Number(result.id);
      console.log(this.visitorId);
      this.getVisitor(); 
    })
  }

  ngOnInit() {
  }

  getVisitor()
  {
    fetch('../../assets/data/data-visitors.json').then(res => res.json())
    .then(json => {
      const pId = this.visitorId;
      this.visitorsData = json;
      this.visitorsData.forEach((value: { id: number; }) => {
        if(value.id==pId)
        {
          this.visitorData = value;
        }
      });
    });
  }
  
  saveForm(form: any) 
  {
    console.log(form.value);
  }

}

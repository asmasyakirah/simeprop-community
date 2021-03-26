import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property',
  templateUrl: './property.page.html',
  styleUrls: ['./property.page.scss'],
})
export class PropertyPage implements OnInit {

  data: any;
  dataProperty: any;
  propertyId: number;
  propertyData: any = {};

  constructor(private activatedRoute: ActivatedRoute) 
  {
    this.activatedRoute.params.subscribe(result => {
      this.propertyId = Number(result.id);
      console.log(this.propertyId);
      this.getProperty(); 
    })
  }

  ngOnInit() {
  }

  getProperties()
  {    
    fetch('../../assets/data/data-properties.json').then(res => res.json())
    .then(json => {
      this.data = json;
      console.log(this.data);
    });
  }

  getProperty()
  {
    fetch('../../assets/data/data-properties.json').then(res => res.json())
    .then(json => {
      const pId = this.propertyId;
      this.data = json;
      this.data.forEach((value: { id: number; }) => {
        if(value.id==pId)
        {
          this.propertyData = value;
        }
      });
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property',
  templateUrl: './property.page.html',
  styleUrls: ['./property.page.scss'],
})
export class PropertyPage implements OnInit {

  propertyId: number;
  propertyData: any = {};
  propertiesData: any;

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
      this.propertiesData = json;
      console.log(this.propertiesData);
    });
  }

  getProperty()
  {
    fetch('../../assets/data/data-properties.json').then(res => res.json())
    .then(json => {
      const pId = this.propertyId;
      this.propertiesData = json;
      this.propertiesData.forEach((value: { id: number; }) => {
        if(value.id==pId)
        {
          this.propertyData = value;
        }
      });
    });
  }
}

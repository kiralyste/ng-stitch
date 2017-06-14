import { Component, OnInit } from '@angular/core';
import { stitches } from "./../data/stitches";

@Component({
  selector: 'app-stitch-listing',
  templateUrl: './stitch-listing.component.html',
  styleUrls: ['./stitch-listing.component.css']
})
export class StitchListingComponent implements OnInit {

  stitches: Array<any> = stitches;
  selected:string=null; 


  SelectedFun(a){
    this.selected=a;
    console.log(a)
  }

  constructor() { }

  ngOnInit() {
  }

}

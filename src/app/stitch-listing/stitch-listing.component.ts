import { Component, OnInit } from '@angular/core';
import { stitches } from "./../data/stitches";

@Component({
  selector: 'app-stitch-listing',
  templateUrl: './stitch-listing.component.html',
  styleUrls: ['./stitch-listing.component.css']
})
export class StitchListingComponent implements OnInit {

  stitches: Array<any> = stitches;

  constructor() { }

  ngOnInit() {
  }

}

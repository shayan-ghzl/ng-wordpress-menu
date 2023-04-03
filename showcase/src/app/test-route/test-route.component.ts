import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test-route',
  templateUrl: './test-route.component.html',
  styleUrls: ['./test-route.component.scss']
})
export class TestRouteComponent implements OnInit {

  pageName = '';

  constructor(private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.pageName = this.activatedRoute.snapshot.data['pageTitle'];
  }

}

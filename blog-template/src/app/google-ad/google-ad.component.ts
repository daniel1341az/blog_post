import { Component, OnInit, Input, ElementRef, AfterViewInit } from '@angular/core';

declare let window: any;

@Component({
  selector: 'app-google-ad',
  templateUrl: './google-ad.component.html',
  styleUrls: ['./google-ad.component.scss']
})
export class GoogleAdComponent implements OnInit, AfterViewInit {
  @Input() adSlot: string = '';
  @Input() adWidth: string | number = '100%';
  @Input() adHeight: string | number = 'auto';

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    if (!window.adsbygoogle) {
      window.adsbygoogle = [];
    }
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      try {
        window.adsbygoogle.push({});
      } catch (error) {
        console.error(error);
      }
    }, 200);
  }
}

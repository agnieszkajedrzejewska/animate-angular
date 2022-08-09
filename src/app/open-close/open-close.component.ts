import { animate, transition, trigger, state, style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { convertToParamMap } from '@angular/router';


@Component({
  selector: 'app-open-close',
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        backgroundImage:'url("https://fontsnetwork.com/wp-content/uploads/2019/07/batman-forever.jpg")',
        height: '400px',
        opacity: 1,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        magin:'20px auto'
        
      })),
      state('closed', style({
        backgroundImage:'url("https://cliparting.com/wp-content/uploads/2018/03/superman-logo-2018-24.png")',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        height: '400px',

      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.8s')
      ]),
    ]),
  ],
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.scss']
})
export class OpenCloseComponent implements OnInit {

  isOpen = true;
  toggle(){
    this.isOpen = !this.isOpen;
  }

  constructor() { }

  ngOnInit(): void {
    
  }

  
}

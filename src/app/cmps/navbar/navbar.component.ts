import { Component, OnInit , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() nav = new EventEmitter
  constructor() { }
  // active : string = ''
  public isActive:boolean = false;


  ngOnInit(): void {
  }

  // moveTo(page: string){
  //   this.active = page
  // }

}

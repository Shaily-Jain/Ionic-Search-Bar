import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public list: Array<{ title: string }> = [];
  public showList: any;

  constructor() {
    
    this.list = [
      { title: 'Afganistan' },
      { title: 'Bagalore' },
      { title: 'Chennai' },
      { title: 'Dubai' },
      { title: 'Europe' },
      { title: 'Faridabad' },
      { title: 'NewDelhi' },
      { title: 'UttarPradesh' },
      { title: 'Uttarakhand' }];

    this.showList = this.list;
  }
  updateList(event) {

    let prefix = event.target.value;
    console.log("hello");
    this.showList = [];
    for (let i = 0; i < this.list.length; i++) {
      if (this.list[i].title.length >= prefix.length && (this.list[i].title.substr(0, prefix.length).toLowerCase()) == prefix.toLowerCase() || (this.list[i].title.substr(0, prefix.length).toUpperCase() == prefix))
      {
        this.showList.push(this.list[i]);
        console.log(prefix);
      }
    }

    if (this.showList.length == 0 )
      this.showList.push({ title: 'Not Found' });
  }
}

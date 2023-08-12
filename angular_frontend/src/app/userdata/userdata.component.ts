import { Component, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { DataService } from './data.service';
@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.css']
})
export class UserdataComponent {
  data: any;
  model = {
    name: '',
    email: '',
    phone: ''
  };
  @ViewChild('phoneInput') phoneInput!: ElementRef;
  constructor(private dataService: DataService,
              private renderer: Renderer2) { }

  ngOnInit() {
    this.dataService.getData().subscribe((response) => {
      this.data = response;
      console.log(this.data);
    });

  }
  on_submit(){
    const table = this.renderer.createElement('table');
    const tr1 = this.renderer.createElement('tr');
    const td1 = this.renderer.createElement('td');
    const td2 = this.renderer.createElement('td');
    const tr2 = this.renderer.createElement('tr');
    const td3 = this.renderer.createElement('td');
    const td4 = this.renderer.createElement('td');

    const text1 = this.renderer.createText('姓名：');
    const text2 = this.renderer.createText(this.model.name);
    const text3 = this.renderer.createText('電子郵件：');
    const text4 = this.renderer.createText(this.model.email);

    this.renderer.appendChild(td1, text1);
    this.renderer.appendChild(td2, text2);
    this.renderer.appendChild(tr1, td1);
    this.renderer.appendChild(tr1, td2);
    this.renderer.appendChild(td3, text3);
    this.renderer.appendChild(td4, text4);
    this.renderer.appendChild(tr2, td3);
    this.renderer.appendChild(tr2, td4);
    this.renderer.appendChild(table, tr1);
    this.renderer.appendChild(table, tr2);

    this.renderer.appendChild(this.phoneInput.nativeElement, table);
  }

}

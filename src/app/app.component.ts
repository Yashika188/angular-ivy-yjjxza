import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
   title = 'Calculator';
  firstNo: any;
  secondNo:any;
  answer:any;
  op = 'op';

 click(opr){
   if (opr =='+') 
   {
    this.op = '+';
    this.answer = this.firstNo + this.secondNo;
   }
   else if(opr =='-')
   {
    this.op = '-';
    this.answer = this.firstNo - this.secondNo;
   }
   else if(opr =='*')
   {
    this.op = '*';
    this.answer = this.firstNo * this.secondNo;
   }
   else if(opr =='/')
   {
    this.op = '/';
    this.answer = this.firstNo / this.secondNo;
   }
   else if(opr =='c')
   {
    this.op = 'op';
    this.answer = 'answer';
    this.firstNo ='';
    this.secondNo='';
   }
 }
}

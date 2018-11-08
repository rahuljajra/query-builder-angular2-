import { Component,OnInit } from '@angular/core';
// import { DragulaService } from 'ng2-dragula/ng2-dragula';
import {DragulaModule , DragulaService} from "ng2-dragula"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})  
export class AppComponent implements OnInit {
  title = 'Assign';
  Innerfeild:any;
  Itemvalue:any;
  
  constructor(private dragulaService: DragulaService) {
    dragulaService.createGroup('COPYABLE', {
      copy: (el, source) => {
        return source.id === 'left';
      },
      accepts: ( el, target, source, _currentSibling) => {
        // To avoid dragging from right to left container
        return target.id !== 'left';
      }
      // removeOnSpill: true
    });
  }
  ngOnInit(){
    this.Innerfeild = [
      "destinationAddress",
      "app_name",
      "bytes_sent",
      "deviceHostName",
      "sourceUserName",
      "destinationZone",
      "pkts_sent",
     "repeat_count",
      "message",
      "bytes_recived"
    ]; 
   this.Itemvalue = [
    "destinationAddress",
    "app_name"
   ]; 
  }

  addInner() {
    var inner = ["destinationAddress"]
    this.Itemvalue.push(inner);
  }
 


}

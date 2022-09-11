import { Component, OnInit } from '@angular/core';

const Datas = [
  {
    "id": 1,
    "name": "Hill Stations in India",
    "img": "https://www.tourmyindia.com/blog//wp-content/uploads/2018/06/Hill-Stations-Holidays.jpg"
  },
  {
    "id": 2,
    "name": "Best Tourist Places",
    "img": "https://tourtoreview.com/wp-content/uploads/2020/07/best-tourist-places-in-el-nido-960x610.jpeg"
  },
  {
    "id": 3,
    "name": "Places to visit near hyderabad",
    "img": "https://www.hyderabadtourism.travel/images/popular/places-near-hyderabad/best-tourist-places-to-visit-near-hyderabad-header.jpg"
  },
  {
    "id": 4,
    "name": "Alappuzha in kerala",
    "img": "https://4.bp.blogspot.com/-j1rGJ7HQn1M/UtfKuF3yPRI/AAAAAAAAEVU/N2lUwaTodtw/s1600/alappuzha-in-kerala.jpg"
  }
]

interface Data {
  id: Number;
  name: String;
  img: String;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public time:string = new Date().toLocaleTimeString();
  public message:string = "Hello"

  constructor() {
    // this.udpateTime();
    // this.getDate();
  }

  ngOnInit(): void {}

  datas: Data[] = Datas;

  // public getDate():string{
  //   return new Date().toLocaleString();
  // }

  // public udpateTime():void{
  //   setInterval(()=> {
  //     this.time = new Date().toLocaleTimeString();
  //   },  1000);
  // };


  public count:number = 0;
  increment():void{
    this.count=this.count + 1;
  }
  dicrement():void{
    this.count > 0 ? this.count=this.count - 1 : alert("Not a negative number dicrement")
  };

  public updateMessage(msg:string){
    this.message = msg;
  };
  
}

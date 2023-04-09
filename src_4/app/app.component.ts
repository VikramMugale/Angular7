import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  public Data = "";
  public NewData = "";
  public Upper()
  {
    this.Data = "Marvellous Infosystems";
  }
  public Lower()
  {
    this.NewData = "Marvellous Infosystems";
  }
  
}

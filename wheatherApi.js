import { LightningElement } from 'lwc';
import getWeatherapi from '@salesforce/apex/Weatherapi.getWeatherapi'

export default class WheatherApi extends LightningElement {
    city;
    imageUrl;
    condition;
    temprature;
    dissplay=false;

    handleCityChange(event)
    {
      this.city=event.target.value;
    }
    handleGetResult()
    {
       this.dissplay=true;
        getWeatherapi({city: this.city}).then((response) => {
            console.log('Data received:',response)
        let result=JSON.parse(response);
        this.imageUrl=result.current.condition.icon;
        this.condition=result.current.condition.text;
        this.temprature=result.current.temp_c;
        }
    )
        .catch((error) =>
            { 
                this.dissplay=false;
                this.condition='no location found';
                console.error('Error fetching data:', error);
            
    });
}
}
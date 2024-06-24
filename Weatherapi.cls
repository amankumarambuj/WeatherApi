public with sharing class Weatherapi {
    @AuraEnabled
    public static string getWeatherapi(string city) {
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint('callout:WeatherApi/current.json?q='+city);
        request.setMethod('GET');
        HttpResponse response = http.send(request);
        return response.getBody();

    }    
}
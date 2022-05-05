//step 01:create an XHR object
var request=new XMLHttpRequest();
//step 02: request a connection
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
// step 03: once the data connection request
request.send();
//step 04: once the data sucessfully received
//from the server(249)
request.onload=function(){
    var data=JSON.parse(request.response);
    console.log(data);
    
    // Question 2 print the all country flags in the console
    for(var i=0;i<data.length;i++){
        console.log(`flag:${data[i].flag}`);
    // Question 3 print all countries name, region, sub region and population
    for(var i=0;i<data.length;i++){
        console.log(`name:${data[i].name} region:${data[i].region} subregion:${data[i].subregion} population:${data[i].population}`);
    }
}
}
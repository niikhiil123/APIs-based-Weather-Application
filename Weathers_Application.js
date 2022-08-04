const t=document.getElementById('timess');
const d=document.getElementById('dates');
const currentWeathers=document.getElementById('current_weathers_items');
const timesZones=document.getElementById('times_zones');
const country=document.getElementById('country');
const temperatures=document.getElementById('t');
const aqis=document.getElementById('aqi')
const aa=document.getElementById('aa');
const bb=document.getElementById('bb');
const cc=document.getElementById('cc');
const dd=document.getElementById('dd');
const ee=document.getElementById('ee');
const aass=document.getElementById('aass');
const bbss=document.getElementById('bbss');
const ccss=document.getElementById('ccss');
const ddss=document.getElementById('ddss');
const eess=document.getElementById('eess');
const citys=document.getElementById('city')
const today=document.getElementById('today');
const dayss=document.getElementById('day[1]');
const daysss=document.getElementById('day[2]');
const dayssss=document.getElementById('day[3]');
const daysssss=document.getElementById('day[4]');
const dayssssss=document.getElementById('day[5]');
const daysssssss=document.getElementById('day[6]');
const humiditys=document.getElementById('humidity');
const Pressure=document.getElementById('pressure');
const wind_speeds=document.getElementById('speed');
const current_temp=document.getElementById('current_temp');

const api='c85fd735362882cfd6a7572dc12ce9ba';
const apis='iHogu3jQjg6azf9T7WQBCWAwvOyyaBMf';

let city='';

setInterval(()=>{
    
    const days=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];  
    const months=['January','February','March','April','May','June','July','August','September','October','Novembers','Decembers']
    const times=new Date();
    const month=times.getMonth();
    const day=times.getDay();
    const dates=times.getDate();
    const hours=times.getHours();
    const hourss=hours>=13?hours%12:hours;
    const minutes=times.getMinutes();
    const am_pm=hours>=12?'PM':'AM';
    
    
    t.innerHTML=hourss+':'+minutes+' '+am_pm
    
    if(day==0)
    {
        d.innerHTML='Sunday,'+' '+dates+' '+months[month-1];
    }
    else{
        d.innerHTML=days[day-1]+','+' '+dates+' '+months[month-1];
    }
    
    let j=0;
    
    for(let i=0;i<=6;i++){
        if(day==0){
            day=6;
        }   

        if(days[day-1]==days[i])
        j=i;
    }
    
    today.innerHTML=days[j];

    j++;
    j=j>6?j%6-1:j;

    dayss.innerHTML=days[j];

    j++;
    j=j>6?j%6-1:j;

    daysss.innerHTML=days[j];

    j++;
    j=j>6?j%6-1:j;

    dayssss.innerHTML=days[j];

    j++;
    j=j>6?j%6-1:j;

    daysssss.innerHTML=days[j];
},1000);

getWeathersData()

function getWeathersData(){
    navigator.geolocation.getCurrentPosition((success)=>{
        console.log(success);
        
        let latitude=success.coords.latitude;
        let longitude=success.coords.longitude;
        
        // let {latitude,longitude}=success.coords;
        
        let link1='https://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&units=metric&appid='+api;
        
        fetch(link1).then(response=>response.json()).then(data=>{
            console.log(data)
            
            let humidity=data.main.humidity;
            let pressure=data.main.pressure;
            let wind_speed=data.wind.speed;
            wind_speed=wind_speed*3.6;
            wind_speed=wind_speed.toFixed(2);

            city=data.name;
            citys.innerHTML=city;
            
            currentWeathers.innerHTML=
            
            `<div class="weathers_items">
            <div class="humidity">Humidity</div>
            <div class="a" id="humidity">${humidity}%</div>
            </div>
            <div class="weathers_items">
            <div class="Pressure">Pressure</div>
            <div class="a" id="pressure">${pressure}hPa</div>
            </div>
            <div class="weathers_items">
            <div class="Wind_speed">Wind Speed</div>
            <div class="a" id="speed">${wind_speed}km/h</div>
            </div>`;
            
            let icon=data.weather[0].main;
    
            document.getElementById('conditions').innerHTML=icon;
            
            const times=new Date();
            const hours=times.getHours();
            const hourss=hours>=13?hours%12:hours;
            const minutes=times.getMinutes();
            const seconds=times.getSeconds();
            const am_pm=hours>=12?'PM':'AM';
            
            switch(icon){
                case 'Clear':

                    if(hourss>=6 && hourss<12 && am_pm=='AM' || hourss==12 && am_pm=='PM' || hourss>=1 && hourss<7  && am_pm=='PM' ){
                        document.body.style.background="url('https://tse3.mm.bing.net/th?id=OIP.2fuYWeeojtBQlMGsLAy5ygHaFj&pid=Api&P=0&w=227&h=170')";
                        document.body.style.backgroundRepeat="no-repeat";
                        document.body.style.backgroundSize="cover";
                    }
                    
                    else{
                        document.body.style.background="url('https://vinsweb.org/wp-content/uploads/2020/04/AtHome-NightSky-1080x810-1.jpg')";
                        document.body.style.backgroundRepeat="no-repeat";
                        document.body.style.backgroundSize="cover";    
                    }

                break;
                
                case 'Clouds':
                    
                    document.body.style.background="url('https://ak.picdn.net/shutterstock/videos/17698261/thumb/1.jpg')";
                    document.body.style.backgroundRepeat="no-repeat";
                    document.body.style.backgroundSize="cover";        
                break;

                case 'Sand':
                    
                    document.body.style.background="url('https://cloudatlas.wmo.int/images/compressed/5439_main_dust-haze_lithometeors.jpg')";
                    document.body.style.backgroundRepeat="no-repeat";
                    document.body.style.backgroundSize="cover";
                break;

                case 'Smoke':
                    
                    document.body.style.background="url('https://live.staticflickr.com/5349/9598630112_1b58f8e276_b.jpg')";
                    document.body.style.backgroundRepeat="no-repeat";
                    document.body.style.backgroundSize="cover";
                break;

                case 'Dust':
                    
                    document.body.style.background="url('https://cloudatlas.wmo.int/images/compressed/5439_main_dust-haze_lithometeors.jpg')";
                    document.body.style.backgroundRepeat="no-repeat";
                    document.body.style.backgroundSize="cover";
                break;
                
                
                case 'Ash':
                    
                    document.body.style.background="url('https://live.staticflickr.com/5349/9598630112_1b58f8e276_b.jpg')";
                    document.body.style.backgroundRepeat="no-repeat";
                    document.body.style.backgroundSize="cover";
                break;
                
                case 'Haze':
                    
                    document.body.style.background="url('https://cloudatlas.wmo.int/images/compressed/5439_main_dust-haze_lithometeors.jpg')";
                    document.body.style.backgroundRepeat="no-repeat";
                    document.body.style.backgroundSize="cover";
                break;

                case 'Drizzle':
                                    
                    document.body.style.background="url('https://i.gifer.com/embedded/download/17Ki.gif')";
                    document.body.style.backgroundRepeat="no-repeat";
                    document.body.style.backgroundSize="cover";
                break;
                
                case 'Rain':
                    
                    if(hourss>=6 && hourss<12 && am_pm=='AM' || hourss==12 && am_pm=='PM' || hourss>=1 && hourss<7 && am_pm=='AM'){
                        document.body.style.background="url('https://bestanimations.com/media/rain/1666979470rain-nature-animated-gif-16.gif')";
                        document.body.style.backgroundRepeat="no-repeat";
                        document.body.style.backgroundSize="cover";
                    }
                    else{
                    document.body.style.background="url('https://i.pinimg.com/originals/9f/72/a4/9f72a4881c7f3791da3dadf12e218efb.gif')";
                    document.body.style.backgroundRepeat="no-repeat";
                    document.body.style.backgroundSize="cover";
                    }
                break;

                case 'Thunderstorm':
                    
                    document.body.style.background="url('https://i.gifer.com/Rnim.gif')";
                    document.body.style.backgroundRepeat="no-repeat";
                    document.body.style.backgroundSize="cover";
                    break;
                    
                case 'Tornado':
                    
                document.body.style.background="url('https://api.time.com/wp-content/uploads/2017/04/2.gif')";                        
                document.body.style.backgroundRepeat="no-repeat";
                document.body.style.backgroundSize="cover";
                break;

                case 'Squall':
                    
                    document.body.style.background="url('https://64.media.tumblr.com/a2ce1e258b3fbf940614f373a709436c/d544d70696384cb9-56/s640x960/a503d05b0d672cffa6d991e9408809f683412e52.gifv')";
                    document.body.style.backgroundRepeat="no-repeat";
                    document.body.style.backgroundSize="cover";
                break;
                    
                case 'Mist':
                        
                    document.body.style.background="url('http://68.media.tumblr.com/55ab69e8654f7b40c0f6855c8ca22961/tumblr_omjk2lVUt31tliyzbo1_540.gif')";
                    document.body.style.backgroundRepeat="no-repeat";
                    document.body.style.backgroundSize="cover";
                break;
                    
                case 'Fog':
                        
                    document.body.style.background="url('http://68.media.tumblr.com/55ab69e8654f7b40c0f6855c8ca22961/tumblr_omjk2lVUt31tliyzbo1_540.gif')";
                    document.body.style.backgroundRepeat="no-repeat";
                    document.body.style.backgroundSize="cover";
                break;

            
                case 'Snow':
                    
                    document.body.style.background="url('https://www.icegif.com/wp-content/uploads/snow-icegif-29.gif')";
                    document.body.style.backgroundRepeat="no-repeat";
                    document.body.style.backgroundSize="cover";
                break;

                default:
                    document.body.style.background="url('https://tse3.mm.bing.net/th?id=OIP.2fuYWeeojtBQlMGsLAy5ygHaFj&pid=Api&P=0&w=227&h=170')";
                    document.body.style.backgroundRepeat="no-repeat";
                    document.body.style.backgroundSize="cover";
            }

            let link2='http://dataservice.accuweather.com/locations/v1/cities/search?apikey='+apis+'&q='+city;
            
            let key='';
            
            fetch(link2).then(response=> response.json()).then(location=>{
                console.log(location);
                key+=location[0].Key;
        
            // temperatures.innerHTML=data.main.temp+'&#176;'+'C';
            // console.log(data.main.temp);

            let links='http://dataservice.accuweather.com/currentconditions/v1/'+key+'?apikey='+apis;
            
            fetch(links).then(response=>response.json()).then(temperaturess=>{
                console.log(temperaturess);
                temperatures.innerHTML=Math.round((temperaturess[0].Temperature.Metric.Value))+'&#176;'+'C';
            });
            
            links='http://api.airvisual.com/v2/nearest_city?lat='+latitude+'&lon='+longitude+'&key=d61e45c3-0aec-4c73-a8e8-7a92b54548af'

            fetch(links).then(response=>response.json()).then(aqi=>{
                console.log(aqi);

                aqis.innerHTML='AQI: '+aqi.data.current.pollution.aqius;
            });


            links='http://dataservice.accuweather.com/forecasts/v1/daily/5day/'+key+'?&units=metric&apikey='+apis;
    
            fetch(links).then(response=> response.json()).then(datas=>{
                console.log(datas);
            
                aa.innerHTML='Maximum '+Math.round((datas.DailyForecasts[0].Temperature.Maximum.Value-32)*(5/9))+'&#176;'+'C';
                bb.innerHTML='Maximum '+Math.round((datas.DailyForecasts[1].Temperature.Maximum.Value-32)*(5/9))+'&#176;'+'C';
                cc.innerHTML='Maximum '+Math.round((datas.DailyForecasts[2].Temperature.Maximum.Value-32)*(5/9))+'&#176;'+'C';
                dd.innerHTML='Maximum '+Math.round((datas.DailyForecasts[3].Temperature.Maximum.Value-32)*(5/9))+'&#176;'+'C';
                ee.innerHTML='Maximum '+Math.round((datas.DailyForecasts[4].Temperature.Maximum.Value-32)*(5/9))+'&#176;'+'C';
                aass.innerHTML='Minimum '+Math.round((datas.DailyForecasts[0].Temperature.Minimum.Value-32)*(5/9))+'&#176;'+'C';
                bbss.innerHTML='Minimum '+Math.round((datas.DailyForecasts[1].Temperature.Minimum.Value-32)*(5/9))+'&#176;'+'C';
                ccss.innerHTML='Minimum '+Math.round((datas.DailyForecasts[2].Temperature.Minimum.Value-32)*(5/9))+'&#176;'+'C';
                ddss.innerHTML='Minimum '+Math.round((datas.DailyForecasts[3].Temperature.Minimum.Value-32)*(5/9))+'&#176;'+'C';
                eess.innerHTML='Minimum '+Math.round((datas.DailyForecasts[4].Temperature.Minimum.Value-32)*(5/9))+'&#176;'+'C';  

                for(let i=0;i<=4;i++){
                    let j=datas.DailyForecasts[i].Day.Icon;
                    
                    if(i==0){
                        if(hourss>=6 && hourss<12 && am_pm=='AM' || hourss==12 && am_pm=='PM' || hourss>=1 && hourss<7  && am_pm=='PM' ){
                            j=j;
                        }
                        else{
                            j=datas.DailyForecasts[0].Night.Icon;
                        }
                    }

                    let id='a'+i;
                    
                    switch(j){
                        case 1:

                        document.getElementById(id).src='https://developer.accuweather.com/sites/default/files/01-s.png';
                        break;

                        case 2:

                        document.getElementById(id).src='https://developer.accuweather.com/sites/default/files/02-s.png';
                        break;

                        case 3:

                        document.getElementById(id).src='https://developer.accuweather.com/sites/default/files/03-s.png';
                        break;

                        case 4:

                        document.getElementById(id).src='https://developer.accuweather.com/sites/default/files/04-s.png';
                        break;

                        case 5:

                        document.getElementById(id).src='https://developer.accuweather.com/sites/default/files/05-s.png';
                        break;

                        case 6:

                        document.getElementById(id).src='https://developer.accuweather.com/sites/default/files/06-s.png';
                        break;

                        case 7:

                        document.getElementById(id).src='https://developer.accuweather.com/sites/default/files/07-s.png';
                        break;

                        case 8:

                        document.getElementById(id).src='https://developer.accuweather.com/sites/default/files/08-s.png';
                        break;

                        case 11:

                        document.getElementById(id).src='https://developer.accuweather.com/sites/default/files/11-s.png';
                        break;

                        case 12:

                        document.getElementById(id).src='https://developer.accuweather.com/sites/default/files/12-s.png';
                        break;

                        case 13:

                        document.getElementById(id).src='https://developer.accuweather.com/sites/default/files/13-s.png';
                        break;

                        case 14:

                        document.getElementById(id).src='https://developer.accuweather.com/sites/default/files/14-s.png';
                        break;

                        case 15:

                        document.getElementById(id).src='https://developer.accuweather.com/sites/default/files/15-s.png';
                        break;

                        case 16:

                        document.getElementById(id).src='https://developer.accuweather.com/sites/default/files/16-s.png';
                        break;

                        case 17:

                        document.getElementById(id).src='https://developer.accuweather.com/sites/default/files/17-s.png';
                        break;
                        
                        case 18:

                        document.getElementById(id).src='https://developer.accuweather.com/sites/default/files/18-s.png';
                        break;

                        case 19:

                        document.getElementById(id).src='https://developer.accuweather.com/sites/default/files/19-s.png';
                        break;

                        case 20:

                        document.getElementById(id).src='https://developer.accuweather.com/sites/default/files/20-s.png';
                        break;

                        case 21:

                        document.getElementById(id).src='https://developer.accuweather.com/sites/default/files/21-s.png';
                        break;

                        case 22:

                        document.getElementById(id).src='https://developer.accuweather.com/sites/default/files/22-s.png';
                        break;

                        case 23:

                        document.getElementById(id).src='https://developer.accuweather.com/sites/default/files/23-s.png';
                        break;

                        case 24:

                        document.getElementById(id).src='https://developer.accuweather.com/sites/default/files/24-s.png';
                        break;

                        case 25:

                        document.getElementById(id).src='https://developer.accuweather.com/sites/default/files/25-s.png';
                        break;

                        case 26:

                        document.getElementById(id).src='https://developer.accuweather.com/sites/default/files/26-s.png';
                        break;

                        case 29:

                        document.getElementById(id).src='https://developer.accuweather.com/sites/default/files/29-s.png';
                        break;

                        case 30:

                        document.getElementById(id).src='https://developer.accuweather.com/sites/default/files/30-s.png';
                        break;

                        case 31:

                        document.getElementById(id).src='https://developer.accuweather.com/sites/default/files/31-s.png';
                        break;

                        case 32:

                        document.getElementById(id).src='https://developer.accuweather.com/sites/default/files/32-s.png';
                        break;

                        case 33:

                        document.getElementById(id).src='https://developer.accuweather.com/sites/default/files/33-s.png';
                        break;

                        case 34:

                        document.getElementById(id).src='https://developer.accuweather.com/sites/default/files/34-s.png';
                        break;

                        case 35:

                        document.getElementById(id).src='https://developer.accuweather.com/sites/default/files/35-s.png';
                        break;

                        case 36:

                        document.getElementById(id).src='https://developer.accuweather.com/sites/default/files/36-s.png';
                        break;

                        case 37:

                        document.getElementById(id).src='https://developer.accuweather.com/sites/default/files/37-s.png';
                        break;

                        case 38:

                        document.getElementById(id).src='https://developer.accuweather.com/sites/default/files/38-s.png';
                        break;

                        case 39:

                        document.getElementById(id).src='https://developer.accuweather.com/sites/default/files/39-s.png';
                        break;

                        case 40:

                        document.getElementById(id).src='https://developer.accuweather.com/sites/default/files/40-s.png';
                        break;

                        case 41:

                        document.getElementById(id).src='https://developer.accuweather.com/sites/default/files/41-s.png';
                        break;

                        case 42:

                        document.getElementById(id).src='https://developer.accuweather.com/sites/default/files/42-s.png';
                        break;

                        case 43:

                        document.getElementById(id).src='https://developer.accuweather.com/sites/default/files/43-s.png';
                        break;

                        case 44:

                        document.getElementById(id).src='https://developer.accuweather.com/sites/default/files/44-s.png';
                        break;

                        default:

                        document.getElementById(id).src='https://developer.accuweather.com/sites/default/files/01-s.png';
                    }
                }

            });
            
            });   
    
        });
    })
}


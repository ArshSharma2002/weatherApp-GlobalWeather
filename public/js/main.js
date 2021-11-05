
// Func. for preloader
loading=()=>{
  const load = document.querySelector('.loading')
  load.style.display = 'none';
}

var currentDate = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var Day = weekday[currentDate.getDay()];

var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var Month = month[currentDate.getMonth()];
var Date = Month + " , " + currentDate.getDate();
//  + "/" + currentDate.getFullYear();
// console.log(Date);

var Hours = currentDate.getHours();
var Minutes = currentDate.getMinutes();

let period = "AM";
if (Hours <= 11) {
  period = "AM";
} else {
  period = "PM";
  if (Hours > 12) Hours -= 12;
}

if (Minutes < 10) {
  Minutes = "0" + Minutes;
}

var time = Hours + ":" + Minutes + " " + period;
// console.log(time);



////////////////////////////////////////////////////////////////////////////////////


const city = document.getElementById('searchcity');
const outcome = document.getElementById('location');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');
const temp_desc = document.getElementById('temp_desc');
const wind_speed = document.getElementById('wind_speed');
const day = document.getElementById("day");
const date = document.getElementById("date");
const data_hide = document.querySelector('.full_data');
day.innerText = Day ;
date.innerText = Date ;

const info = async(event)=>{
  event.preventDefault();
  
  let cityval = city.value;
  
  if(cityval === ""){
    outcome.innerText = 'Enter a valid location';
    data_hide.classList.add('data_hide');
  }
  
  else{
    try {
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=c7e8ba35df751727d176f8bce2617ab9`
      const response = await fetch(url)
      // to  convert the info in json / js object
      const data = await response.json();
      // console.log(data);
      // to convert the data into array of objects
      const arrData = [data];
      data_hide.classList.remove('data_hide');
      temp.innerText = arrData[0].main.temp + '°' + 'C' ;
      outcome.innerText = `${arrData[0].name} , ${arrData[0].sys.country}` ;
      const tempMood =  arrData[0].weather[0].main;
      temp_desc.innerText = arrData[0].weather[0].description;
      wind_speed.innerHTML = `Wind speed : <span id='speed'>${arrData[0].wind.speed}</span> m/s`;
      console.log(tempMood)

      if (tempMood=='Clouds') {
        document.querySelector('div.navbar').style.backgroundColor = 'rgb(37 82 151)';
        document.querySelector('body').style.background = 'url(../images/bg.jpg) no-repeat center/cover';
        document.getElementsByClassName('tempinfo')[0].style.backgroundColor = 'rgb(37 82 151)';
        document.getElementsByClassName('btn')[0].style.backgroundColor = 'rgb(37 82 151)';
        document.querySelector('marquee').style.backgroundColor = 'rgb(37 82 151)';
        document.querySelector('hr').style.backgroundColor = '#6e8eb3';
        temp_status.innerHTML = '<i class="fas fa-cloud"></i>';
      } 

      else if(tempMood=='Clear'){
        document.querySelector('div.navbar').style.backgroundColor = 'rgb(244 132 34)';
        document.querySelector('body').style.background = 'url(../images/bg-sunny.jpg) no-repeat center/cover';
        document.getElementsByClassName('tempinfo')[0].style.backgroundColor = 'rgb(244 132 34)';
        document.getElementsByClassName('btn')[0].style.backgroundColor = 'rgb(244 132 34)';
        document.querySelector('marquee').style.backgroundColor = 'rgb(244 132 34)';
        document.querySelector('hr').style.backgroundColor = '#feab35';
        temp_status.innerHTML = '<i class="fas fa-sun"></i>';
      }

      else if(tempMood=='Snow'){
        document.querySelector('div.navbar').style.backgroundColor = '#9fa3ac';
        document.querySelector('body').style.background = 'url(../images/bg-snow.jpg) no-repeat center/cover';
        document.getElementsByClassName('tempinfo')[0].style.backgroundColor = '#9fa3ac';
        document.getElementsByClassName('btn')[0].style.backgroundColor = '#9fa3ac';
        document.querySelector('marquee').style.backgroundColor = '#9fa3ac';
        document.querySelector('hr').style.backgroundColor = 'rgb(247 251 252)';
        temp_status.innerHTML = '<i class="far fa-snowflake"></i>';
      }

      else if(tempMood=='Rain'){
        document.querySelector('div.navbar').style.backgroundColor = '#354c4a';
        document.querySelector('body').style.background = 'url(../images/bg-rain.jpg) no-repeat center/cover';
        document.getElementsByClassName('tempinfo')[0].style.backgroundColor = '#354c4a';
        document.getElementsByClassName('btn')[0].style.backgroundColor = '#354c4a';
        document.querySelector('marquee').style.backgroundColor = '#354c4a';
        document.querySelector('hr').style.backgroundColor = 'rgb(91 131 129)';
        temp_status.innerHTML = '<i class="fas fa-cloud-rain"></i>';
      }

      else if(tempMood=='Drizzle'){
        document.querySelector('div.navbar').style.backgroundColor = '#354c4a';
        document.querySelector('body').style.background = 'url(../images/bg-rain.jpg) no-repeat center/cover';
        document.getElementsByClassName('tempinfo')[0].style.backgroundColor = '#354c4a';
        document.getElementsByClassName('btn')[0].style.backgroundColor = '#354c4a';
        document.querySelector('marquee').style.backgroundColor = '#354c4a';
        document.querySelector('hr').style.backgroundColor = 'rgb(91 131 129)';
        temp_status.innerHTML = '<i class="fas fa-cloud-rain"></i>';
      }

      else if(tempMood=='Haze'){
        document.querySelector('div.navbar').style.backgroundColor = 'rgb(132 133 135)';
        document.querySelector('body').style.background = 'url(../images/bg-haze-2.jpg) no-repeat center/cover';
        document.getElementsByClassName('tempinfo')[0].style.backgroundColor = 'rgb(132 133 135)';
        document.getElementsByClassName('btn')[0].style.backgroundColor = 'rgb(132 133 135)';
        document.querySelector('marquee').style.backgroundColor = 'rgb(132 133 135)';
        document.querySelector('hr').style.backgroundColor = 'rgb(175 178 187)';
        temp_status.innerHTML = '<i class="fas fa-smog"></i>';
      }

      else if(tempMood=='Mist'){
        document.querySelector('div.navbar').style.backgroundColor = 'rgb(132 133 135)';
        document.querySelector('body').style.background = 'url(../images/bg-haze-2.jpg) no-repeat center/cover';
        document.getElementsByClassName('tempinfo')[0].style.backgroundColor = 'rgb(132 133 135)';
        document.getElementsByClassName('btn')[0].style.backgroundColor = 'rgb(132 133 135)';
        document.querySelector('marquee').style.backgroundColor = 'rgb(132 133 135)';
        document.querySelector('hr').style.backgroundColor = 'rgb(175 178 187)';
        temp_status.innerHTML = '<i class="fas fa-smog"></i>';
      }
      
      else {
        document.querySelector('div.navbar').style.backgroundColor = 'rgb(44 109 167)';
        document.querySelector('body').style.background = 'url(../images/bg-others.jpg) no-repeat center/cover';
        document.getElementsByClassName('tempinfo')[0].style.backgroundColor = 'rgb(44 109 167)';
        document.getElementsByClassName('btn')[0].style.backgroundColor = 'rgb(44 109 167)';
        document.querySelector('marquee').style.backgroundColor = 'rgb(44 109 167)';
        document.querySelector('hr').style.backgroundColor = 'rgb(247 251 252)';
        temp_status.innerHTML = '<i class="fas fa-cloud-sun"></i>';
      }

      // temp_status.innerText = arrData[0].weather[0].main;
      // day.innerText = Day ;
      // date.innerText = Date ;
      // + "  |  " + time
      
    } catch (error) {
      outcome.innerText = 'Enter a valid location';
      data_hide.classList.add('data_hide');
    }
  }
  
}

document.getElementsByClassName('btn')[0].addEventListener('click',info);



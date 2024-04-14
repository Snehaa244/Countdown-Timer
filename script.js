function timer(){
    //for reapeating the task
    setInterval(function() {
        
        let enddate = new Date("20 April ,2024 ,12:00").getTime();
        let startdate = new Date().getTime();
        let diff = enddate - startdate;

        let day = Math.floor(diff / (1000*60*60*24)); //differnce we will get in milisec so we divide the day with 1000 for proper output
        console.log(day);

        let hours = Math.floor(diff % (1000*60*60*24)/(1000*60*60));
        console.log(hours);


        let minute = Math.floor(diff % (1000*60*60)/(1000*60));
        console.log(minute);

        let sec = Math.floor(diff % (1000*60)/(1000));
        console.log(sec);
        
       document.getElementById("day").innerHTML=day+"<br/>"+"Day";
       document.getElementById("hours").innerHTML=hours+"<br/>"+"Hours";
       document.getElementById("minute").innerHTML=minute+"<br/>"+"Minute";
       document.getElementById("sec").innerHTML=sec+"<br/>"+"Seconds";
},1000);
}
timer();

function updateTime(){
     
var currentTime=new Date();

var hour=currentTime.getHours();
var minute=currentTime.getMinutes();
var second=currentTime.getSeconds();
var Mer='AM';
 if(hour>=12){
    Mer="PM"
 }
 if (hour>12){
    hour=hour-12;
 }
 if (hour < 10)
    {
        hour = "0" + hour;
    }
 if (minute < 10)
    {
        minute = "0" + minute;
    }
 
    if (second < 10)
    {
        second = "0" + second;
    }

    if(minute==37){
        //alert('helloo Goys')
    }
    var clockTime = hour + ':' + minute + ':' + second + " " + Mer    
document.getElementById("DisTime").innerHTML=clockTime;
 
 

}

setInterval(updateTime,1000)

function updateEvents() {
    var Time=new Date();
    var hours=Time.getHours();
    var minutes=Time.getMinutes();
    let eveningTime=16;
    //waketime=Wakeup.value
    //console.log(waketime);
    //console.log(hours)
    if(localStorage.getItem("Wtime")==hours){
        document.getElementById("img").src="https://png.pngtree.com/png-clipart/20200317/ourlarge/pngtree-hand-painted-pop-style-purple-alarm-clock-wake-up-alarm-wake-png-image_2161386.jpg"
    }
    else if(localStorage.getItem("Ltime")==hours){
        document.getElementById("img").src="https://image.shutterstock.com/shutterstock/photos/1388282729/display_1500/stock-vector-lunch-time-lettering-knife-fork-and-clock-vector-cartoon-illustration-1388282729.jpg"
    
    }
    else if(localStorage.getItem("Stime")==hours){
        document.getElementById("img").src="https://c8.alamy.com/comp/FW5C6C/cartoon-smile-little-boy-sleeping-in-the-bed-FW5C6C.jpg"
    }
    else if(hours < localStorage.getItem("Wtime")){
        document.getElementById("img").src="https://c8.alamy.com/comp/FW5C6C/cartoon-smile-little-boy-sleeping-in-the-bed-FW5C6C.jpg"
    }
    else if(hours < localStorage.getItem("Ltime")){
        document.getElementById("img").src="https://funkylife.in/wp-content/uploads/2022/08/good-morning-image-funkylife-468.jpg"
    }
    else if(hours < eveningTime){
        document.getElementById("img").src="https://shayarimaza.com/files/good-afternoon-images/good-afternoon-images/Beautiful-Good-Afternoon-Nature-Images.jpg"
    }
    else if(hours < localStorage.getItem("Stime")){
        document.getElementById("img").src="https://1.bp.blogspot.com/-RyUZ-M8wqao/X888Oh_Y7UI/AAAAAAAAJ6s/SXDJOQiExIUxwvZCVl6fJFn9xqcMs4bKgCLcBGAsYHQ/s500/good-morning-photos-download.jpg"
    }
    else{
        document.getElementById("img").src="https://c8.alamy.com/comp/FW5C6C/cartoon-smile-little-boy-sleeping-in-the-bed-FW5C6C.jpg"
    }
    }
    function wakeupEvent()
    {
         var a=document.getElementById("Wakeup").value
         console.log(a);
         localStorage.setItem("Wtime", a);
         
         var b=document.getElementById("Lunch").value
         console.log(b);
         localStorage.setItem("Ltime", b);
    
         var c=document.getElementById("Sleeping").value
         console.log(c);
         localStorage.setItem("Stime", c);
    };
    console.log(localStorage.getItem("Ltime"))
    console.log(localStorage.getItem("Wtime"))
    console.log(localStorage.getItem("Stime"))
    var Time=new Date();
    var Hours=Time.getHours();
    
    console.log(Hours)
    setTimeout(updateEvents,0)
    setInterval(updateEvents,1000)
    
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    const d = new Date();
    let day = weekday[d.getDay()];
    document.querySelector('.shead').innerHTML=`Whoop, it's ${day} 🌝 ☕`
    document.querySelector("#click").onclick=function() {
       if(document.querySelector('#list').value.length == 0){
        alert("Please Enter a Task")
    }else if (document.querySelector('#list').value.length > 25){
        alert("Please Enter maximum 25 characters")
    }

    else{
        document.querySelector('.tasks').innerHTML += `
            <div class="task">
            <div>
               <input type="checkbox" id="check" value="">
                <span id="taskname">
                    ${document.querySelector('#list').value}
                </span>
                </div>   
                <div>
                <button class="delete">
                   <i class="fa-solid fa-trash-can"></i>
                </button>
                </div>
            </div>
        `;
        document.querySelector('#list').value="";
        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentElement.parentNode.remove();
            }
        }
        

        var done_tasks = document.querySelectorAll("#check");
        for(var i=0; i<done_tasks.length; i++){
            done_tasks[i].onchange = function(){
        if(this.checked){
            this.parentNode.parentElement.style.backgroundColor = "green";
        } else{
            this.parentElement.parentNode.style.backgroundColor = "bisque";
        }
            }
        }
    }

    
}

        
        
    
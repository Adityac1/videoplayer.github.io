console.clear();

var videoContainer = document.getElementById("video-container");
var player = document.getElementById("player");
var video = document.getElementById("video");
var views = document.getElementById("views");
var videoTitle = document.getElementById("video-title");
var videoDesc = document.getElementById("video-desc");
var iframe = document.querySelector("iframe")
var ref = document.getElementById("ref");
var vId = window.location.href.split('=')[1];
var xhttp = new XMLHttpRequest();

xhttp.open("GET","https://5d76bf96515d1a0014085cf9.mockapi.io/video/" +vId, true);




xhttp.onreadystatechange = function(){
  console.log(xhttp.readyState)
    // if(xhttp.readyState === 2 || xhttp.readyState < 4 ){
    //   console.log("loading");
    //   var p = document.createElement("p");
      
    //   p.classList.add("loading");
    //   p.innerText = "Loading";
    //   videoContainer.appendChild(p);
    // } else
     if(xhttp.readyState === 4){
      console.log("loaded");
      
      var response = JSON.parse(xhttp.responseText);
      console.log(response)
       iframe.src = "https://player.vimeo.com/video/" +response.vimeoId;
       views.innerText = response.views + ' views'
       videoTitle.innerText = response.title;
       videoDesc.innerText = response.description;
    } 

};

xhttp.send();



//  implemented

//for reequest access we use XMLHttpRequest 
var xhttps = new XMLHttpRequest();

//configuring the request 
xhttps.open("GET",'https://5d76bf96515d1a0014085cf9.mockapi.io/playlist', 'true');

//sending request to backend

xhttps.send(); 

//handling the request

{/* <div class = "card">
<a href = "./videoplayer/video-player.html">
<img src = ""/>
<p></p>
</a>
</div> */}

xhttps.onreadystatechange = function(){
  console.log(xhttps.readyState);
    if(xhttps.readyState === 4){
        var responseArray = JSON.parse(xhttps.responseText);
        for(var i = 0; i<responseArray.length;i++){
         var data = responseArray[i];
          createVideoCard(data);
        }
        function createVideoCard(data){
          var div = document.createElement("div");
          div.classList.add("card");
          var link = document.createElement("a");
          link.classList.add("link")
          // link.id = responseArray[i].id;
          link.href = "video-player.html?vId=" +data.id;
          div.appendChild(link);
          var image = document.createElement("img");
          image.src = data.thumbnail;
          image.alt = data.title;
          link.appendChild(image);
          // // console.log(div)
          var p = document.createElement("p");
          p.innerText = data.title;
          link.appendChild(p);
          // // console.log(div) 
          // mainContainer.appendChild(div);
          
          ref.appendChild(div)
        }
    }
}




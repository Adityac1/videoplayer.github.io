console.clear();
var mainContainer = document.getElementById("main-container");
var loader = document.getElementById("Loading")

//for reequest access we use XMLHttpRequest 
var xhttps = new XMLHttpRequest();

//configuring the request 
xhttps.open("GET",'https://5d76bf96515d1a0014085cf9.mockapi.io/playlist', true);

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
  loader.style.display = "block";
    if(xhttps.readyState === 4){
      loader.style.display = "none";
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
          mainContainer.appendChild(div);
        }
    }
}


// uploading to backend api


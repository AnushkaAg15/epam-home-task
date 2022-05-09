// ******************************************** Making HTML elements through DOM**********************************
const outerDiv = document.createElement("div");
outerDiv.classList.add("searchDiv");
document.body.appendChild(outerDiv);

const img = document.createElement("img");
img.src="youtube.gif";
outerDiv.appendChild(img);

const searchDiv = document.createElement("div");
searchDiv.classList.add("inputDiv");
const input = document.createElement("input");
input.type="text";
input.classList.add("input");
searchDiv.appendChild(input);
const button = document.createElement("button");
const btnTxt = document.createTextNode("Seach");
button.appendChild(btnTxt);
searchDiv.appendChild(button);
outerDiv.appendChild(searchDiv);

const mainContent = document.createElement("div");
mainContent.classList.add("mainContent");
document.body.appendChild(mainContent);

var pagesDiv = document.createElement("div");
pagesDiv.classList.add("pagesDiv");
document.body.appendChild(pagesDiv);

//************ ***************************************** API WOrk ********************************************************

const key="AIzaSyBo7HQlrt14c1I-4npi61pOG2C5QPjhmRc";

button.addEventListener("click",async()=>{
  mainContent.innerHTML="";
  var inputTxt = input.value;
  //console.log(inputTxt);
  const url1 = `https://www.googleapis.com/youtube/v3/search?key=${key}&type=video&part=snippet&maxResults=15&q=${inputTxt}`;
  await fetch(url1)
  .then((response)=>{
    return response.json();
  })
  .then(async(data)=>{
    const items = data.items;
    console.log(items);
    var infoDivArr1 = [];
    
    //  items.forEach(async(video)=>{
    //   const id = video.id.videoId;
    //   const title = video.snippet.title;
    //   const link = `https://www.youtube.com/watch?=${id}`;
    //   const description = video.snippet.description;
    //   const preview = video.snippet.thumbnails.default.url;
    //   let pubDate = video.snippet.publishedAt;
    //   pubDate = pubDate.slice(0,10);
    //   console.log(pubDate);

    //   const url2 = `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${id}&key=${key}`;
    //   // fetch(url2)
    //   // .then((response)=>{
    //   //   return response.json();
    //   // })
    //   // .then((data)=>{
    //   //   const viewCount = data.items[0].statistics.viewCount;
    //   //   console.log(viewCount);
    //   //   makeDiv(title,link,preview,description,pubDate,viewCount);
    //   // })
    //   // const response = await fetch(url2)
    //   // const data = await response.json();
    //   // const viewCount = await data.items[0].statistics.viewCount;
    //   // console.log(viewCount);

    //   const viewCount = await vCount(url2);
    //   console.log(viewCount);

    //   makeDiv(title,link,preview,description,pubDate,viewCount);
    
    // })
    for(let i=0; i<items.length; i++) {
      const id = items[i].id.videoId;
      const title = items[i].snippet.title;
      const link = `https://www.youtube.com/watch?=${id}`;
      const description = items[i].snippet.description;
      const preview = items[i].snippet.thumbnails.medium.url;
      let pubDate = items[i].snippet.publishedAt;
      pubDate = pubDate.slice(0,10);
      console.log(pubDate);

      const url2 = `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${id}&key=${key}`;
      const viewCount = await vCount(url2);
      console.log(viewCount);

      makeDiv(title,link,preview,description,pubDate,viewCount,infoDivArr1);
      }
      console.log(infoDivArr1);

      const totalCount = items.length;
      const perpageCount = 5;
      const totalPages = Math.ceil(totalCount/perpageCount);

      renderPagination(totalPages, infoDivArr1);
  })
})
// ******************** API call for viewCount *********************
async function vCount(url2){
  const response = await fetch(url2)
  const data = await response.json();
   return data.items[0].statistics.viewCount;
} 

//********* ****************************************function to create the infoDiv*************************************
function makeDiv(title, link,preview,description,pubDate,viewCount,infoDivArr1){
  var infoDiv = document.createElement("div");
  infoDiv.classList.add("infoDiv");
  mainContent.appendChild(infoDiv);
  //infoDivArr1.push(infoDiv);
  
  const p1 = document.createElement("h3");
  const p1Txt = document.createTextNode(title);
  p1.appendChild(p1Txt);

  const a = document.createElement("a");
  a.href = link;
  const cont = document.createTextNode(link);
  a.appendChild(cont);

  const img = document.createElement("img");
  img.src = preview;

  const p2 = document.createElement("p");
  const p2Txt = document.createTextNode(description);
  p2.appendChild(p2Txt);

  const p3 = document.createElement("p");
  const p3Txt = document.createTextNode("Published On: "+pubDate);
  p3.classList.add("date");
  p3.appendChild(p3Txt);

  const vc = document.createElement("p");
  const cvTxt = document.createTextNode("View Count:"+viewCount);
  vc.appendChild(cvTxt);

  infoDiv.appendChild(p1);
  infoDiv.appendChild(a);
  infoDiv.appendChild(img);
  infoDiv.appendChild(p2);
  infoDiv.appendChild(p3);
  infoDiv.appendChild(vc);
}

const renderPagination=(totalPage, infoDivArr1)=>{
  for(let i=0;i<totalPage;i++){
    const pageBtn = document.createElement("button");
    var count = i+1
    pageBtn.innerHTML = count;

    pageBtn.addEventListener("click",(count,infoDivArr1)=>{
      mainContent.innerHTML="";
      let trimStart = (count-1)*5;
      let trimEnd = trimStart + 5;

      for(let i=trimStart; i<=trimEnd; i++){
        mainContent.appendChild(infoDivArr1[i]);
      }
    })
    pagesDiv.appendChild(pageBtn);
    }
}
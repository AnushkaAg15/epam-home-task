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

const pagination = document.createElement("div");
pagination.id = "paginationDiv"

//*****************************API work******************8 */
const KEY="AIzaSyBo7HQlrt14c1I-4npi61pOG2C5QPjhmRc";
let itemsArr ;
button.addEventListener("click",async()=>{
  //mainContent.innerHTML = "";
  while (pagination.firstChild) {
    pagination.removeChild(pagination.firstChild);
  }
  var inputTxt = input.value;
  //console.log(inputTxt);
  const URL = `https://www.googleapis.com/youtube/v3/search?key=${KEY}&type=video&part=snippet&maxResults=15&q=${inputTxt}`;
  await apiCalling(URL);
  console.log(itemsArr);
  testPagination(itemsArr);
  //pagination(itemsArr);
  // 
  
});

// *********************************** functions **********************************************
async function apiCalling(URL) {
  itemsArr = [];
  //document.getElementById("loader").classList.remove("box-hide");
  await fetch(URL)
  .then((response) => {
    return response.json();
  })
  .then(async (data) => {
    const items = data.items;
    console.log(items);

    for(let i=0; i<items.length; i++) {
      const id = items[i].id.videoId;
      const title = items[i].snippet.title;
      const link = `https://www.youtube.com/watch?=${id}`;
      const description = items[i].snippet.description;
      const preview = items[i].snippet.thumbnails.medium.url;
      let pubDate = items[i].snippet.publishedAt;
      pubDate = pubDate.slice(0,10);
      console.log(pubDate);

      const URL2 = `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${id}&key=${KEY}`;
      const viewCount = await vCount(URL2);
      console.log(viewCount);

      itemsArr.push({
        "title":title,
        "link":link,
        "description":description,
        "preview":preview,
        "pubDate":pubDate,
        "viewCount":viewCount
      })
    }
  });
}

async function vCount(URL2){
  const response = await fetch(URL2)
  const data = await response.json();
  console.log(data);

  return data.items[0].statistics.viewCount;
} 

function testPagination(data_obj) {
  let jsp_current_page = 1;
  var jsp_records_per_page = 5;

  const listing_table = document.createElement('div');
  listing_table.id = "listingTable";
  const btn = document.createElement('div');
  btn.className = 'btn-prev-next';
  const btn_prev = document.createElement('button');
  btn_prev.id = 'btn-prev';
  btn_prev.textContent = "Prev";
  const btn_next = document.createElement('button');
  btn_next.id = 'btn-next';
  btn_next.textContent = "Next";
  let page_count = document.createElement('p');
  page_count.textContent = "Page";
  page_count.classList = "page-count";
  let page_span = document.createElement('span');

  function jsp_num_pages() {
    return Math.ceil(data_obj.length / jsp_records_per_page);
  }
  function jsp_prev_page() {
    if (jsp_current_page > 1) {
      jsp_current_page--;
      jsp_change_page(jsp_current_page);
    }
  }
  function jsp_next_page() {
    if (jsp_current_page < jsp_num_pages()) {
      jsp_current_page++;
      jsp_change_page(jsp_current_page);
    }
  }
  function jsp_change_page(page) {
    while (listing_table.firstChild) {
      listing_table.removeChild(listing_table.firstChild);
    }
    if (page < 1) {
      page = 1;
    }
    if (page > jsp_num_pages()) {
      page = jsp_num_pages();
    }

    var list_elements = [];
    for (let i = (page - 1) * jsp_records_per_page; i < (page * jsp_records_per_page) && i < data_obj.length; i++) {
      list_elements[i] = document.createElement("div");
      list_elements[i].className = "infoDiv";
      list_elements[i].innerHTML = `<img src="${itemsArr[i].preview}" alt="">
                                    <h3>${itemsArr[i].title}</h3>
                                    <a href="${itemsArr[i].link}">${itemsArr[i].link}</a>
                                    <p>${itemsArr[i].description}</p>
                                    <p class="date">Published on: ${itemsArr[i].pubDate} </p>
                                    <p>View Count: ${itemsArr[i].viewCount}</p>`;
      console.log(listing_table.appendChild(list_elements[i]));
    }
    page_span.innerHTML = `${page}/${jsp_num_pages()}`;
    btn_prev.style.display = (page === 1) ? 'none' : 'inline-flex';
    btn_next.style.display = (page === jsp_num_pages()) ? 'none' : 'inline-flex';
  }
  btn_prev.addEventListener('click', (e) => {
    e.preventDefault();
    jsp_prev_page();
  });
  btn_next.addEventListener('click', (e) => {
    e.preventDefault();
    jsp_next_page();
  });
  jsp_change_page(1);

  function numFormatter(num) {
    if (num > 999 && num < 1000000) {
      return (num / 1000).toFixed(1) + 'K'; // convert to K for number from > 1000 < 1 million 
    } else if (num > 1000000) {
      return (num / 1000000).toFixed(1) + 'M'; // convert to M for number from > 1 million 
    } else if (num < 900) {
      return num; // if value < 1000, nothing to do
    }
  }
  page_count.appendChild(page_span);
  btn.append(btn_prev, btn_next);
  pagination.append(listing_table, btn, page_count);
  //document.getElementById("loader").classList.add("box-hide");
}

document.body.append(pagination);
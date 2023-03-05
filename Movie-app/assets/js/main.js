// / Buoc 1: khai bao bien cục bộ
// bước 1
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1`;
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';
// Buoc 2: goi du lieu API

/*------Phuong thuc: fetch------*/
// Cach 1: Dung fetch khong co async/await (Khong khuyen khich)
// function getMoviesAPI() {

//     const response = fetch(`${API_URL}`)
//         .then((response) => response.json())
//         .then((data) => console.log(data.results))
// }
// getMoviesAPI();
// fetch : call api - ít hỗ trợ token... có sẵn brower và dùng async await

// Cach 2: Dung fetch co async/await (Khuyen khich khi dung fecch)
// async function getMoviesAPI() {

//     const response = await fetch(`${API_URL}`)
//     const data = await response.json();
//     console.log(data.results, 'data');
// }
// getMoviesAPI();

/* -----Thu vien: axios----*/
// uu tien dung thu vien axios
// Cach 1: Khong dung async/await (Khong nen dung)
// function getMoviesAPI() {
//     axios.get(`${API_URL}`).then(function(response){
//         console.log(response.data.results);
//     })
// }
// getMoviesAPI();

// Cach 2: Dung async/await
// bước 2 :
 getMoviesAPI(API_URL);

 async function getMoviesAPI(API_URL) {

    const response = await axios.get(`${API_URL}`);
     const data = await response.data.results
    // console.log(data, 'data');
   showMovie(data) // lời gọi hàm , thực thi function showMovie

 }
//  bước 3 : hiển thị dữ liệu ra bên ngoài front-end
 function showMovie(data) {
     
     let htmlCode = ``;  

     data.forEach((value) => {
        // console.log(value); // console.log cái value ra để lấy key (poster_path,original_title,vote_average)(tên phim, ảnh phim, vote điểm) để đổ dữ liệu vào html
        // IMG_PATH là nơi lưu trữ ảnh trên sever
        // IMG_PATH+value.poster_path là ra 1 link ảnh hoàn chỉnh
        
        htmlCode += ` <div class="col-12 col-sm-6 col-md-3">
        <div class="item">
          <div class="box-image">
            <img
              src="${IMG_PATH+value.poster_path}" 
              alt=""
            />
          </div>
          <div class="box-content">
            <h3 class="title-film">${value.original_title}</h3>
            <p class="rating ${colorRating(value.vote_average)}">${value.vote_average}</p>
          </div>
          <div class="box-description">
            <h4>Over View</h4>
            <p>
            ${value.overview}
            </p>
          </div>
        </div>
      </div> `;
      // truy cập phần tử 
      const content = document.querySelector('.listing-product .row')
      content.innerHTML = htmlCode;
     });
 }
//  bước 4 ---thay đổi màu cho rating ----
function colorRating(rate) {
    if (rate > 8) {
        return 'good'
    } else if (rate > 5){
        return 'normal'
    } else {
        return 'bad'
    }
}
// bước 5 làm tìm kiếm web 
const elementForm = document.querySelector('.form')
const elementInput = document.querySelector('.input-form')
elementForm.addEventListener ('submit',(e) => {
    e.preventDefault ()
    // lấy giá trị (những gì người dùng nhập vào ô tìm kiếm)
    const valueInput = elementInput.value 
    // valueInput là biến để nhận những gì người dùng nhập vào ô tìm kiếm
    //elementInput.value là cú pháp trong đó elementInput là biến vừa khai báo ở trên sau đó .value để nhận những gì người dùng nhập vào ô tìm kiếm
    if (valueInput && valueInput !== '') {
        getMoviesAPI(SEARCH_API + valueInput )
        // SEARCH_API + valueInput : link api + với những gì người dùng nhập sẽ tìm ra những gì phim người dùng cần tìm
        elementInput.value = ''
        // elementInput.value là để trả lại ô tìm kiếm rỗng cho người dùng để người dùng có thể tìm phim khác  
    } else {
        window.location.reload(); //window.location.reload() là cú pháp khi người nhập ô tìm kiếm đã enter thì sẽ reload ra ô tìm kiếm trống để người dùng tìm kiếm phim khác
    }
})
// bước 6 : tạo pagination (loadmore...)(xem thêm...)
let currentPage = 1 

const nextMore = document.querySelector('.next')

// làm tính năng cho next page
nextMore.addEventListener ('click', () => {
    currentPage++; // currentPage++ là cộng thêm từ page = 1 ở trên thành page = 2 , page = 3...
    const api_nextmore = `${API_URL}&page=${currentPage}`//api nối tiếp các page2.. page3..
   // `${API_URL}&pages=${currentPage}` là cú pháp để cộng api nối thêm phim vào các trang (page)
    getMoviesAPI(api_nextmore)
})
// làm tính năng lùi trang pre page
const preMore = document.querySelector('.pre')

preMore.addEventListener ('click', () => {
    currentPage--; // currentPage-- là trừ đi từ page = mình ở hiện tại thành page = 3 , page = 2...
    //api nối tiếp các page3.. page2..
   // `${API_URL}&pages=${currentPage}` là cú pháp để cộng api nối thêm phim vào các trang (page)
   if (currentPage < 1){
    currentPage++

   } else {
    const api_premore = `${API_URL}&page=${currentPage}`
    getMoviesAPI(api_premore)
   }
    
})








// const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1`;
// const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
// const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query='

// // Tự động tải trang đầu tiên

// getMoviesAPI(API_URL);

// async function getMoviesAPI(url) {
//   const response = await axios.get(url);
//   const data = await response.data.results;
//   showMovie(data);
// }

// function showMovie(data) {
//   let htmlCode = ``;
//   data?.map((val) => {
//     htmlCode += `
//       <div class="col-12 col-sm-6 col-md-3">
//         <div class="item">
//           <div class="box-image">
//             <img src=${IMG_PATH + val.poster_path} alt="${val.title}"/>
//           </div>
//           <div class="box-content">
//             <h3 class="title-film">${val.title}</h3>
//             <p class="rating ${getClassByRate(val.vote_average)}">${val.vote_average}</p>
//           </div>
//           <div class="box-description">
//             <h4>Overview</h4>
//             <p>${val.overview}</p>
//           </div>
//         </div>
//       </div>`;
//   });

//   const content = document.querySelector('.listing-product .row');
//   content.innerHTML += htmlCode;
// }

// function getClassByRate(vote) {
//   if (vote >= 8) {
//     return 'green';
//   } else if (vote >= 5) {
//     return 'orange';
//   } else {
//     return 'red';
//   }
// }

// const form = document.querySelector('#form');
// const search = document.querySelector('#search');

// form.addEventListener('submit', function (e) {
//   e.preventDefault();
//   const searchTerm = search.value;
//   console.log(searchTerm, 'searchTerm');
//   if (searchTerm && searchTerm !== '') {
//     getMoviesAPI(SEARCH_API + searchTerm);
//     search.value = '';
//   } else {
//     window.location.reload();
//   }
// });

// // Thêm nút Load More
// const loadMoreButton = document.querySelector('#load-more');
// let currentPage = 1;

// loadMoreButton.addEventListener('click', function () {
//   currentPage++;
//   const apiUrl = `${API_URL}&page=${currentPage}`;
//   getMoviesAPI(apiUrl);
// });
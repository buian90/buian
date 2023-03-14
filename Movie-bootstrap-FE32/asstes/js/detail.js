const defaultAPI = "https://important-api-render-mauve.vercel.app/products";
const url = "https://important-api-render-mauve.vercel.app";
/*B1:  get id url*/
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
console.log(id);

/*B2: get api url*/
getDataDetail(id);
async function getDataDetail(id) {
    const res = await axios.get(`${defaultAPI}/${id}`);
    const data = await res.data;
    showImage(data);
    showContent(data);
}
// Hien thi anh
function showImage(data) {
    // console.log(data);
    const img = document.querySelector('.img-detail');
    img.innerHTML = `<img src="${url + data.image}" /> `
    console.log(img);
}
// Hien thi content #

function showContent(data) {
    console.log(data);
    const cnt = document.querySelector(".content");
    cnt.innerHTML = `
    <h3>${data.name}</h3>
    <p>${data.description}</p>
    <p>${data.price}</p>
    `;
}
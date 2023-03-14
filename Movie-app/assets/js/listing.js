//  buoc 1 khai bao bien
const API_URL_LISTING = "https://api-online-seven.vercel.app/products";
// buoc 2 goi du lieu
async function getListingAPI(api_url){
  const res = await.axios.get(`${api_url}`);
  const data = await res.data;
  showListing(data);
} 
// buoc 3 hien thi du lieu

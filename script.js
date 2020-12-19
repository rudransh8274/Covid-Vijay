const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "https://covid19-vaccine.herokuapp.com/api/"; 

fetch(proxyurl + url).then((apidata)=>{
  console.log(apidata);
  return apidata.json();

}).then((actualData)=>{
  console.log(actualData);
//for()
  console.log(actualData[1].aadhar_number);

}).catch((error)=>{
  console.log(error);
})


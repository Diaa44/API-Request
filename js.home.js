const res = 'https://api.artic.edu/api/v1/artworks';
async function art (){
    try {
   const [work1, work2, work3] = await Promise.all([
 fetch(`${res}/129883`),
 fetch(`${res}/129884`),
 fetch(`${res}/129885`),
   ])
   const [workJs1, workJs2, workJs3]=  await Promise.all([
     work1.json(),
     work2.json(),
     work3.json(),

   ])
   const [result1, result2, result3] = [
    workJs1.data,
    workJs2.data,
    workJs3.data,
  ];
  console.log(result1, result2, result3);
  return { result1, result2, result3 };
    }catch(err){
 alert("Try Again to fetch Your Data Not loaded")
    }
}
art();

async function resp (){
    
        const {result1, result2, result3 } = await art();
        const para1 = document.getElementById('data1'); 
        para1.innerText = result1.title; 
                para1.innerText = result1.title; 

     console.log(para1);
     const para2 = document.getElementById('data2'); 
     para2.innerText = result2.title; 
  console.log(para2);
  const para3 = document.getElementById('data3'); 
  para3.innerText = result3.title; 
console.log(para3);
}
resp()
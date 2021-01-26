//gain access to the medium api 
fetch('https://api.medium.com/v1/20495742bd453cb1aa3a20ba24ff428b54b7cac155afc49237489fac0a9ae501b')
  .then((response) => {
    return response.json()
  })
  .then((data) =>{
    console.log(data);
  })
//should display 1 article 

//create a container element 
//create a card element
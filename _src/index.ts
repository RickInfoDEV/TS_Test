let fMain=function() {
    test1(); // rien du tout !
};

//---------------------------------------

// j  jj !!
let test1 = function() { // mmm
  console.log("DEBUT - Avant Promise(...)"); // kkk

  new Promise((resolve, reject)=>  { //p22005558 8 88
    console.log("  Dans  Promise(...) !");
    resolve(88);
  })
  .then((pDataParam)=> {
    console.log("\nOn arrive de façon asynchrone dans le  then(...) !");
    console.log("pDataParam="+pDataParam);  //88
  });

  console.log("FIN (exécutée avant le then).");
};

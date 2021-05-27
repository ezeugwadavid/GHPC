const result = window.localStorage.getItem('username');
console.log(result);

const results = window.localStorage.getItem("data");
console.log(results);

const notificationDesc = () => {
  document.getElementById("notify").style.display = "block";
};
const notificationDescRemove = () => {
  document.getElementById("notify").style.display = "none";
};

const toggleActions = () => {
  let actionCard = document.getElementById("actions");
  if (actionCard.style.display === "none") {
    actionCard.style.display = "block";
  } else {
    actionCard.style.display = "none";
  }
};

const showNavs = () => {
  let x = window.matchMedia("(min-width: 769px)")
  let nav = document.getElementById("mobileNav");
  if (nav.style.display === "none") {
    nav.style.display = "block";
  } else {
    nav.style.display = "none";
  }
};

const showSetStatus = () => {
  let details = document.getElementById("setStatus");
  let emoji = document.getElementById("smiley");
    details.style.display = "block";
    emoji.style.borderRadius = "30px"
}


const changeSetStatus = () => {
  let details = document.getElementById("setStatus");
  let emoji = document.getElementById("smiley");
  details.style.display = "none";
  emoji.style.borderRadius = "50%"

}

const showBorder1 = () => {
 
  let tab1 = document.getElementById("tab1");
  let tab2 = document.getElementById("tab2");
  let tab3 = document.getElementById("tab3");
  let tab4 = document.getElementById("tab4");

  let tabone = document.getElementById("tabOne");
  let tabtwo = document.getElementById("tabTwo");
  let tabthree = document.getElementById("tabThree");
  let tabfour = document.getElementById("tabFour");


    tab1.style.visibility = "visible"; 
    tab2.style.visibility = "hidden"; 
    tab3.style.visibility = "hidden"; 
    tab4.style.visibility = "hidden"; 

    tabone.style.fontWeight = "600"; 
    tabtwo.style.fontWeight = "400"; 
    tabthree.style.fontWeight = "400"; 
    tabfour.style.fontWeight = "400"; 

    showEmptyPage1();
    


}


const showEmptyPage1 = () => {
  let firsttab = document.getElementById("first-tab");
  let secondtab = document.getElementById("second-tab");
  let thirdtab = document.getElementById("third-tab");
  let fourthtab = document.getElementById("fourth-tab");

  firsttab.style.display = "block";
  secondtab.style.display = "none";
  thirdtab.style.display = "none";
  fourthtab.style.display = "none";
 
}


const showBorder2 = () => {
  let tab1 = document.getElementById("tab1");
  let tab2 = document.getElementById("tab2");
  let tab3 = document.getElementById("tab3");
  let tab4 = document.getElementById("tab4");

  let tabone = document.getElementById("tabOne");
  let tabtwo = document.getElementById("tabTwo");
  let tabthree = document.getElementById("tabThree");
  let tabfour = document.getElementById("tabFour");



    tab1.style.visibility = "hidden"; 
    tab2.style.visibility = "visible"; 
    tab3.style.visibility = "hidden"; 
    tab4.style.visibility = "hidden"; 

    tabone.style.fontWeight = "400"; 
    tabtwo.style.fontWeight = "600"; 
    tabthree.style.fontWeight = "400"; 
    tabfour.style.fontWeight = "400"; 
    showEmptyPage2();


}

const showEmptyPage2 = () => {
  let firsttab = document.getElementById("first-tab");
  let secondtab = document.getElementById("second-tab");
  let thirdtab = document.getElementById("third-tab");
  let fourthtab = document.getElementById("fourth-tab");

  firsttab.style.display = "none";
  secondtab.style.display = "block";
  thirdtab.style.display = "none";
  fourthtab.style.display = "none";
 
}



const showBorder3 = () => {
  
  
   
  let tab1 = document.getElementById("tab1");
  let tab2 = document.getElementById("tab2");
  let tab3 = document.getElementById("tab3");
  let tab4 = document.getElementById("tab4");

  let tabone = document.getElementById("tabOne");
  let tabtwo = document.getElementById("tabTwo");
  let tabthree = document.getElementById("tabThree");
  let tabfour = document.getElementById("tabFour");

 



    tab1.style.visibility = "hidden"; 
    tab2.style.visibility = "hidden"; 
    tab3.style.visibility = "visible"; 
    tab4.style.visibility = "hidden"; 

    tabone.style.fontWeight = "400"; 
    tabtwo.style.fontWeight = "400"; 
    tabthree.style.fontWeight = "600"; 
    tabfour.style.fontWeight = "400"; 

    showEmptyPage3();
}

const showEmptyPage3 = () => {
  let firsttab = document.getElementById("first-tab");
  let secondtab = document.getElementById("second-tab");
  let thirdtab = document.getElementById("third-tab");
  let fourthtab = document.getElementById("fourth-tab");

  firsttab.style.display = "none";
  secondtab.style.display = "none";
  thirdtab.style.display = "block";
  fourthtab.style.display = "none";
 
}

const showBorder4 = () => {
  
  
   
  let tab1 = document.getElementById("tab1");
  let tab2 = document.getElementById("tab2");
  let tab3 = document.getElementById("tab3");
  let tab4 = document.getElementById("tab4");

  let tabone = document.getElementById("tabOne");
  let tabtwo = document.getElementById("tabTwo");
  let tabthree = document.getElementById("tabThree");
  let tabfour = document.getElementById("tabFour");

    tab1.style.visibility = "hidden"; 
    tab2.style.visibility = "hidden"; 
    tab3.style.visibility = "hidden"; 
    tab4.style.visibility = "visible"; 

    tabone.style.fontWeight = "400"; 
    tabtwo.style.fontWeight = "400"; 
    tabthree.style.fontWeight = "400"; 
    tabfour.style.fontWeight = "600"; 

    showEmptyPage4();


}

const showEmptyPage4 = () => {
  let firsttab = document.getElementById("first-tab");
  let secondtab = document.getElementById("second-tab");
  let thirdtab = document.getElementById("third-tab");
  let fourthtab = document.getElementById("fourth-tab");

  firsttab.style.display = "none";
  secondtab.style.display = "none";
  thirdtab.style.display = "none";
  fourthtab.style.display = "block";
 
}


const showDesc = () => {
  document.getElementById("repo-desc").style.display = "block";
  document.getElementById("desc-arrow").style.display = "block";

}
const hideDesc = () => {
  document.getElementById("repo-desc").style.display = "none";
  document.getElementById("desc-arrow").style.display = "none";

}

const showLabel = () => {
  document.getElementById("avatar-arrow").style.display = "block";
  document.getElementById("change-avatar").style.display = "block";

}

const hideLabel = () => {
  document.getElementById("avatar-arrow").style.display = "none";
  document.getElementById("change-avatar").style.display = "none";

}













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


}











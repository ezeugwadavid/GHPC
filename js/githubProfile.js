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
  let nav = document.getElementById("mobileNav");
  if (nav.style.display === "none") {
    nav.style.display = "block";
  } else {
    nav.style.display = "none";
  }
};



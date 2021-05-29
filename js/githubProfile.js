
const username = localStorage.getItem("username");
const logout = () => {
  localStorage.removeItem("username");
  window.location.assign("loginPage.html");
};
if (!username) {
  window.location.assign("loginPage.html");
}

// fetch repo details
const getRepoDetails = () => {
  document.getElementById("body").style.display = "none";
  document.getElementById("loader").style.display = "block";
  const token = "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";

  const query = `query { 
    user(login: "${username}") {
      websiteUrl
      bio
      avatarUrl(size: 500)
      name
      login
      repositories(last: 20, orderBy: {field: CREATED_AT, direction: DESC}) {
        nodes {
          name
          description
          forkCount
          stargazerCount
          updatedAt
          languages(orderBy: {field: SIZE, direction: DESC}, last: 20) {
            nodes {
              color
              name
            }
          }
        }
      }
      
  
    }
  

}`;

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },

    body: JSON.stringify({ query }),
  };

  fetch(`https://api.github.com/graphql`, options)
    .then((response) => {
      response.json().then((data) => {
        localStorage.setItem("data", data);
        console.log(data);

        const user = data.data.user;
        const avatar = user.avatarUrl;

        document.getElementById(
          "avatar"
        ).style.backgroundImage = `url(${avatar})`;
        document.getElementById(
          "mobile-avatar"
        ).style.backgroundImage = `url(${avatar})`;
        document.getElementById("img-lg").src = `${avatar}`;
        document.getElementById("profile-name").innerHTML = user.name;
        document.getElementById("profile-username").innerHTML = user.login;

        const bio = () => {
          if (user.bio !== null) {
            document.getElementById("bio").innerHTML = user.bio;
            document.getElementById("bio-mobile").innerHTML = user.bio;
          } else {
            document.getElementById("bio").innerHTML = "";
          }
        };
        bio();
        const repoCount = data.data.user.repositories.nodes.length;
        document.getElementById(
          "desc"
        ).innerHTML = `${repoCount} results for public repositories`;

        processQuery(data);
        document.getElementById("body").style.display = "block";
      });
    })
    .catch((err) => console.log(err));
};

const processQuery = (datas) => {
  const repoDetails = datas.data.user.repositories.nodes;

  let output = "";
  repoDetails.forEach((object) => {
    const repoName = object.name;
    const description = () => {
      if (object.description != null) {
        return object.description;
      } else {
        return "";
      }
    };

    const forkCount = object.forkCount;
    const stargazerCount = object.stargazerCount;
    const updatedAt = new Date(object.updatedAt);
    const date = updatedAt.toDateString();
    const languages = object.languages.nodes;

    const language = () => {
      if (languages.length !== 0) {
        return languages[0].name;
      } else {
        return "HTML";
      }
    };

    const languageColor = () => {
      if (languages.length !== 0) {
        return languages[0].color;
      } else {
        return "#563D7C";
      }
    };

    output += `

    <div class="repo-wrapper">
    <div class="name-container">
      <div class="repo-name">${repoName}</div>


      <div class="star-icon">
        <img src="../images/star_outline_black_24dp.svg" alt="">
        <div class="star"> Star</div>
      </div>
    </div>

    <div class="repo-desc">${description()}</div>

    <div class="repo-border" onmouseout="hideDesc()" onmouseover="showDesc()"></div>

    <div class="repo-type">
      <div class="type">
        <div class="color" style="background-color: ${languageColor()}"></div>
        <div class="html">${language()}</div>
      </div>

      <div class="stars">
        <div class="unstar-icon"><img src="../images/star_outline_sm.svg" alt=""></div>
        <div class="star-num">${stargazerCount}</div>

      </div>
      <div class="forks">
        <div class="fork-icon"><img src="../images/repo-forked.svg" alt=""></div>
        <div class="star-num">${forkCount}</div>

      </div>

      <div class="time">Updated on ${date}</div>

      <div class="hr-desc" id="repo-desc">Past year of activity</div>
      <div class="arrow" id="desc-arrow"></div>


    </div>

    <div class="repo-hr"></div>



  </div>



    `;
  });

  document.getElementById("dynamic-repositories-fetch").innerHTML = output;
};

getRepoDetails();

// for the user interface 

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
  let x = window.matchMedia("(min-width: 769px)");
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
  emoji.style.borderRadius = "30px";
};

const changeSetStatus = () => {
  let details = document.getElementById("setStatus");
  let emoji = document.getElementById("smiley");
  details.style.display = "none";
  emoji.style.borderRadius = "50%";
};

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
};

const showEmptyPage1 = () => {
  let firsttab = document.getElementById("first-tab");
  let secondtab = document.getElementById("second-tab");
  let thirdtab = document.getElementById("third-tab");
  let fourthtab = document.getElementById("fourth-tab");

  firsttab.style.display = "block";
  secondtab.style.display = "none";
  thirdtab.style.display = "none";
  fourthtab.style.display = "none";
};

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
};

const showEmptyPage2 = () => {
  let firsttab = document.getElementById("first-tab");
  let secondtab = document.getElementById("second-tab");
  let thirdtab = document.getElementById("third-tab");
  let fourthtab = document.getElementById("fourth-tab");

  firsttab.style.display = "none";
  secondtab.style.display = "block";
  thirdtab.style.display = "none";
  fourthtab.style.display = "none";
};

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
};

const showEmptyPage3 = () => {
  let firsttab = document.getElementById("first-tab");
  let secondtab = document.getElementById("second-tab");
  let thirdtab = document.getElementById("third-tab");
  let fourthtab = document.getElementById("fourth-tab");

  firsttab.style.display = "none";
  secondtab.style.display = "none";
  thirdtab.style.display = "block";
  fourthtab.style.display = "none";
};

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
};

const showEmptyPage4 = () => {
  let firsttab = document.getElementById("first-tab");
  let secondtab = document.getElementById("second-tab");
  let thirdtab = document.getElementById("third-tab");
  let fourthtab = document.getElementById("fourth-tab");

  firsttab.style.display = "none";
  secondtab.style.display = "none";
  thirdtab.style.display = "none";
  fourthtab.style.display = "block";
};

const showDesc = () => {
  document.getElementById("repo-desc").style.display = "block";
  document.getElementById("desc-arrow").style.display = "block";
};
const hideDesc = () => {
  document.getElementById("repo-desc").style.display = "none";
  document.getElementById("desc-arrow").style.display = "none";
};

const showLabel = () => {
  document.getElementById("avatar-arrow").style.display = "block";
  document.getElementById("change-avatar").style.display = "block";
};

const hideLabel = () => {
  document.getElementById("avatar-arrow").style.display = "none";
  document.getElementById("change-avatar").style.display = "none";
};













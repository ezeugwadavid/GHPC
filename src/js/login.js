
// get repos/login logic
const getRepos = () => {
  const username = document.getElementById("username").value.trim();

  if (username === "") {
    document.getElementById("error-container").style.display = "block";
    document.getElementById("mesg").innerHTML = "field must not be empty";
    setTimeout(function () {
      document.getElementById("error-container").style.display = "none";
    }, 4000);
    return;
  }

  document.getElementById("username").value = "";
  document.getElementById("loader").style.display = "block";

  localStorage.setItem("username", username);

  const token = "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";

  const query = `query { 
      user(login: "${username}") {
        websiteUrl
        bio
        avatarUrl(size: 1)
        name
        login
        repositories(last: 20, orderBy: {field: CREATED_AT, direction: DESC}) {
          nodes {
            name
            description
            forkCount
            languages(orderBy: {field: SIZE, direction: DESC}, last: 20) {
              nodes {
                color
                name
              }
            }
          }
        }
        updatedAt
        status {
          id
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
        if (data.data.user === null) {
          document.getElementById("error-container").style.display = "block";
          document.getElementById("mesg").innerHTML = "user not found";
          setTimeout(function () {
            document.getElementById("error-container").style.display = "none";
          }, 4000);
          return;
        }
        window.location.assign("githubProfile.html");
        document.getElementById("loader").style.display = "none";
        processQuery(data);
      });
    })
    .catch((err) => console.log(err));
};

const processQuery = (datas) => {
  const repoDetails = datas.data.user.repositories.nodes;

  console.log(repoDetails);
  let output = "";
  repoDetails.forEach((object) => {
    const repoName = object.name;

    output += `

      <div class="repo-wrapper">
      <div class="name-container">
        <div class="repo-name">${repoName}</div>


        <div class="star-icon">
          <img src="../images/star_outline_black_24dp.svg" alt="">
          <div class="star"> Star</div>
        </div>
      </div>

      <div class="repo-desc">This is the repo for epic mail</div>

      <div class="repo-border" onmouseout="hideDesc()" onmouseover="showDesc()"></div>

      <div class="repo-type">
        <div class="type">
          <div class="color"></div>
          <div class="html">HTML</div>

        </div>

        <div class="stars">
          <div class="unstar-icon"><img src="../images/star_outline_sm.svg" alt=""></div>
          <div class="star-num">22</div>

        </div>
        <div class="forks">
          <div class="fork-icon"><img src="../images/repo-forked.svg" alt=""></div>
          <div class="star-num">1</div>

        </div>

        <div class="time">Updated on 4 Sep</div>

        <div class="hr-desc" id="repo-desc">Past year of activity</div>
        <div class="arrow" id="desc-arrow"></div>


      </div>

      <div class="repo-hr"></div>



    </div>



      `;
  });
  console.log(output);

  document.getElementById("dynamic-repositories-fetch").innerHTML = output;
};

  
  
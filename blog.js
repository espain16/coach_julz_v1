const blogDisplay = document.getElementById("app");
const logo = document.createElement("img");
const header = document.createElement("header");
const container = document.createElement("div");
const efpTitle = document.createElement("h1");
// Card variables 
//Header section
logo.src = "/images/efp-final-logo.jpg";
efpTitle.innerHTML = "Elite Financial Professionals Blog";
header.append(logo, efpTitle);
blogDisplay.append(header, container);

//Container section
container.setAttribute("class", "blog-container");

//gain access to the medium api 
fetch("https://v1.nocodeapi.com/espain/medium/qyYrQcocgvklnkmC")
.then((response) => {
  return response.json()
})
.then((data) => {
  data.forEach((blog) => {
    const blogCard = document.createElement("div");
    const blogTitle = document.createElement("h1");
    const blogAuthor = document.createElement("h2");
    const blogDate = document.createElement("h3");
    const blogBody = document.createElement("p");
    const blogLink = document.createElement("a");
    blogTitle.textContent = blog.title;
    blogAuthor.textContent = blog.creator;
    blogDate.textContent = blog.pubDate;
    blogBody.innerHTML = blog["content:encoded"];
    blogLink.textContent = "Read More";

    container.append(blogCard);
    blogCard.append(blogTitle, blogAuthor, blogDate, blogBody, blogLink);
  })
  
})
//should display 1 article 

//create a container element 
//create a card element
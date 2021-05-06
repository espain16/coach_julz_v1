
let blogDisplay, header, container,logo,backArrow;
blogDisplay = document.getElementById("app");
header = document.createElement("header");
container = document.createElement("div");
logo = document.createElement("img");



blogDisplay.append( container);
container.setAttribute("class", "blog-container");



fetch("https://v1.nocodeapi.com/espain/medium/qyYrQcocgvklnkmC")
.then((response) => {
  return response.json()
})
.then((data) => {
  data.forEach((blog) => {
    let blogCard, blogTitle, blogAuthor,blogDate,blogBody, authorInfo;
    blogCard = document.createElement("article");
    blogTitle = document.createElement("h1");
    blogAuthor = document.createElement("h2");
    blogDate = document.createElement("h3");
    blogBody = document.createElement("p");
    authorInfo = document.createElement("div");
    blogTitle.textContent = blog.title;
    blogAuthor.textContent = blog.creator;
    blogDate.textContent = blog.pubDate;
    blogBody.innerHTML = blog["content:encoded"];
    

    container.append(blogCard);
    authorInfo.append(blogAuthor, blogDate);
    blogCard.append(blogTitle, authorInfo, blogBody);
    authorInfo.setAttribute("class", "block");
    blogCard.setAttribute("class", "blog");
    blogTitle.setAttribute("class", "blog__title");
    blogAuthor.setAttribute("class", "block__author");
    blogDate.setAttribute("class", "block__date");

   
  })
  
})

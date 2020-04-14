// posts
const postList = document.querySelector(".posts");

// setup posts

const setupPosts = (data) => {
  if (data.length) {
    let html = "";
    data.forEach((doc) => {
      const post = doc.data();
      const li = `
      <li>
        <div>${post.title}</div>
        <div>${post.content}</div>
      </li>
    `;
      html += li;
    });
    postList.innerHTML = html;
  } else {
    postList.innerHTML = "<h5>Login to view posts</h5>";
  }
};

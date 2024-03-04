const loadAllPosts = async (postData) => {
  const res = await fetch(
    'https://openapi.programming-hero.com/api/retro-forum/posts'
  )
  const data = await res.json();
  postData = data.posts;

  setTimeout(() => {
    displayDailyPosts(postData);
  }, 2000)
  
};

loadAllPosts();

const loadLatestPosts = async () => {
  const res = await fetch(
    'https://openapi.programming-hero.com/api/retro-forum/latest-posts'
  );
  const data = await res.json();
  const posts = data;

  displayLatestPosts(posts)
};

loadLatestPosts();

const customDataLoad = async(searchText) =>{
    const res = await fetch(
        `
        https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}
        `
      );
      const data = await res.json();
      const postData = data.posts;
      displayDailyPosts(postData);
}





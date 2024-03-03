const loadAllPosts = async () => {
  const res = await fetch(
    'https://openapi.programming-hero.com/api/retro-forum/posts'
  )
  const data = await res.json();
  const postData = data.posts;

  displayDailyPosts(postData);
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

function customSearch(){
    const searchText = searchInputField.value.toLowerCase();

    if(searchText == "comedy"){
        customDataLoad(searchText);
    }
    else if(searchText == 'music'){
        customDataLoad(searchText);
    }
    else if(searchText == 'coding'){
        customDataLoad(searchText);
    }
    else{
        alert("Please type correct catagory");
    }
    
  }

const customDataLoad = async(searchText) =>{
    const res = await fetch(
        `
        https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}
        `
      )
      const data = await res.json();
      const postData = data.posts;
      displayDailyPosts(postData);
}



// customDataLoad();

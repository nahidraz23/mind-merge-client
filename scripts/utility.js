const dailyPostContainer = document.getElementById('daily-post-container');

const latestPostContainer = document.getElementById('latest-post-container');

const searchInputField = document.getElementById('search-input-field');

const searchBtn = document.getElementById('btn-search');


function displayDailyPosts (posts) {
    dailyPostContainer.textContent = '';   
    posts.forEach(post => {
   
      const postCard = document.createElement('div');
      
      postCard.className =
        'flex flex-col lg:flex-row gap-6 p-12 bg-gray-100 rounded-2xl border-2 border-gray-300 grow'

         
      postCard.innerHTML = `
      <div>
      <div class="avatar online">
          <div class="w-24 rounded-xl">
              <img src="${post.image}"/>
          </div>
      </div>
  </div>
  <div class="w-full">
      <div>
      <div class="flex gap-5">
      <h3 id="post-catagory" class="font-inter font-medium">#${post.category}</h3>
      <p class="font-inter font-medium">Author: ${post.author.name}</p>
  </div>
          <div>
              <h2 class="font-mulish font-bold text-xl">${post.title}
              </h2>
          </div>
          <div>
              <p class="font-inter text-gray-400">${post.description}</p>
          </div>
      </div>
      <hr class="my-5 border-dashed border-gray-500">
      <div class="flex items-center justify-between">
          <div class="flex gap-2 lg:gap-6">
              <div class="flex gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-400">
                      <path stroke-linecap="round" stroke-linejoin="round"
                          d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                  </svg>
                  <p class="font-inter text-gray-400">${post.comment_count}</p>
              </div>
              <div class="flex gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-400">
                      <path stroke-linecap="round" stroke-linejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                      <path stroke-linecap="round" stroke-linejoin="round"
                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
  
                  <p class="font-inter text-gray-400">${post.view_count}</p>
              </div>
              <div class="flex gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-gray-400">
                      <path stroke-linecap="round" stroke-linejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
  
                  <p class="font-inter text-gray-400">${post.posted_time}</p>
              </div>
          </div>
          <div class="bg-green-400 p-2 rounded-full hover:bg-pink-400">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke-width="1.5" stroke="currentColor" class="w-6 h-6 hover:cursor-pointer ">
                  <path stroke-linecap="round" stroke-linejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
          </div>
      </div>
      `
      dailyPostContainer.appendChild(postCard)
    })
  }


  function displayLatestPosts (posts) {
    posts.forEach(post => {
      const postCard = document.createElement('div')
  
      postCard.className =
        'space-y-4 border-2 border-gray-300 rounded-3xl p-6';
      postCard.innerHTML = `
          <div>
              <img src="${post.cover_image}" alt="" class="rounded-3xl">
          </div>
      <div class="space-y-3">
          <div class="flex gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
              </svg>
              <p class="text-gray-400">${post.author?.posted_date || "No Publish Date"}</p>
          </div>
          <div class="font-mulish ">
              <h1 class="font-black text-lg">${post.title}</h1>
              <p class="text-gray-400">${post.description}</p>
          </div>
      </div>
      <div class="flex gap-4">
          <div class="avatar">
              <div class="w-10 rounded-full ">
                  <img src="${post.profile_image}" />
              </div>
          </div>
          <div class="font-mulish">
              <h1 class="font-bold">${post.author.name}</h1>
              <p class="text-gray-400">${post.author?.designation || "Unknown"}</p>
          </div>
      </div>
      `;
      latestPostContainer.appendChild(postCard);
    })
  }


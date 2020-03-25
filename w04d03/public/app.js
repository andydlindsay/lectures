$(() => {
  const BASE_URL = 'https://jsonplaceholder.typicode.com';

  const renderPost = (post) => {
    const $article = $('<article>');
    const $header = $('<header>').text(`Title: ${post.title} (${post.id})`);
    const $body = $('<p>').text(post.body);

    $.getJSON(`${BASE_URL}/users/${post.userId}`, (user) => {
      const $footer = $('<footer>').text(`Author: ${user.name} (${user.email})`);
      $article.append($header, $body, $footer).appendTo('#posts');
    });
  };

  const renderPosts = (posts) => {
    for (const post of posts) {
      renderPost(post);
    }
  };

  $('#fetch-posts').click(() => {
    $.getJSON(`${BASE_URL}/posts`)
      .then((posts) => {
        $('#posts').empty();
        renderPosts(posts.slice(0, 10));
      });
  });

  const createNewPost = (event) => {
    event.preventDefault();
    $.post(`${BASE_URL}/posts`, $('#new-post').serialize(), (newPost) => {
      renderPost(newPost);
    });
  };

  $('#new-post').on('submit', createNewPost);
});

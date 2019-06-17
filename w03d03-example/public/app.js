function appendPost(post) {
    const $article = $('<article>');
    const $title = $('<header>').text(`${post.title} (${post.id})`);
    const $body = $(`<p>${post.body}</p>`);
    console.log($body);
    $article.append($title).append($body);
    $.getJSON(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
        .done((userData) => {
            appendUserElement(userData, $article);
        })
        .fail(errorHandler);
}

function errorHandler(error) {
    console.error(error);
}

function appendUserElement(data, $article) {
    const $author = $(`<footer>${data.name} (${data.email})</footer>`);
    $article.append($author);
    $article.appendTo('#posts');
}

function renderPosts(data) {
    $('#posts').empty();
    data.slice(5, 15).forEach(appendPost);
}

function getPosts() {
    $.getJSON('https://jsonplaceholder.typicode.com/posts')
        .done(renderPosts)
        .fail(errorHandler);
}

function createNewPost(event) {
    event.preventDefault();
    $.post('https://jsonplaceholder.typicode.com/posts', $('#new-post').serialize())
        .done((newPost) => {
            appendPost(newPost);
        });
}

$(() => {
    $('#get-posts-btn').click(getPosts);
    $('#new-post').on('submit', createNewPost);
});

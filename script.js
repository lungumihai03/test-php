async function fetchPosts() {
    const response = await fetch('api.php');
    const posts = await response.json();

    // Manipulare postări și afișare pe pagină
    // (modifică această parte în funcție de nevoile tale)
    const forumPosts = document.getElementById('forum-posts');
    forumPosts.innerHTML = '';

    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.className = 'post';
        postDiv.innerHTML = '<h3>' + post.title + '</h3><p>' + post.content + '</p>';
        forumPosts.appendChild(postDiv);
    });
}

async function addPost() {
    var title = document.getElementById('post-title').value;
    var content = document.getElementById('post-content').value;

    if (title && content) {
        // Trimite datele la serverul PHP pentru a adăuga postarea în baza de date
        await fetch('api.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'title=' + title + '&content=' + content,
        });

        // Afișează postările actualizate
        fetchPosts();

        // Clear input fields
        document.getElementById('post-title').value = '';
        document.getElementById('post-content').value = '';
    } else {
        alert('Please fill in both title and content.');
    }
}

// Afișează postările la încărcarea paginii
window.onload = fetchPosts;

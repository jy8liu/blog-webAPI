document.getElementById('blogForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    
    if (!username || !title || !content) {
        alert('Please complete all fields');
        return;
    }
    
    const postData = {
        username,
        title,
        content
    };
    
    localStorage.setItem('postData', JSON.stringify(postData));
    
    window.location.href = 'blog.html';
});

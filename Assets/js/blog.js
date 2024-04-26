document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    
    themeToggle.addEventListener('change', function() {
        if (themeToggle.checked) {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    });
    
    const postData = JSON.parse(localStorage.getItem('postData'));
    if (postData) {
        const postsContainer = document.getElementById('postsContainer');
        const postElement = document.createElement('div');
        postElement.innerHTML = `
            <h2>${postData.title}</h2>
            <p><strong>By:</strong> ${postData.username}</p>
            <p>${postData.content}</p>
        `;
        postsContainer.appendChild(postElement);
    }
});

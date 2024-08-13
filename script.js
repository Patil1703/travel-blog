document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript Loaded');
    // Add interactivity here if needed
});
/*document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const guestLoginButton = document.getElementById('guestLoginButton');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'user' && password === 'pass') {
            alert('Login successful!');
            window.location.href = 'index.html'; // Redirect to homepage after successful login
        } else {
            alert('Invalid username or password');
        }
    });

    guestLoginButton.addEventListener('click', function() {
        alert('Logged in as guest!');
        window.location.href = 'index.html'; // Redirect to homepage for guest login
    });
});
*/
document.addEventListener('DOMContentLoaded', function() {
    const commentForm = document.getElementById('commentForm');
    const commentsList = document.getElementById('commentsList');

    // Load comments from local storage
    let comments = JSON.parse(localStorage.getItem('comments')) || [];

    // Function to render comments
    function renderComments() {
        commentsList.innerHTML = '';
        comments.forEach((comment, index) => {
            const commentElement = document.createElement('div');
            commentElement.classList.add('comment');

            const commentHeader = document.createElement('h4');
            commentHeader.textContent = comment.name;

            const commentBody = document.createElement('p');
            commentBody.textContent = comment.comment;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('delete');
            deleteButton.addEventListener('click', function() {
                deleteComment(index);
            });

            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.classList.add('edit');
            editButton.addEventListener('click', function() {
                editComment(index, commentHeader, commentBody, editButton, deleteButton);
            });

            // Container for buttons to align them in the same line
            const actionsContainer = document.createElement('div');
            actionsContainer.classList.add('actions');
            actionsContainer.appendChild(editButton);
            actionsContainer.appendChild(deleteButton);

            commentElement.appendChild(commentHeader);
            commentElement.appendChild(commentBody);
            commentElement.appendChild(actionsContainer);
            commentsList.appendChild(commentElement);
        });
    }

    // Function to delete a comment
    function deleteComment(index) {
        comments.splice(index, 1);
        localStorage.setItem('comments', JSON.stringify(comments));
        renderComments();
    }

    // Function to edit a comment
    function editComment(index, commentHeader, commentBody, editButton, deleteButton) {
        // Create input fields for editing
        const editNameInput = document.createElement('input');
        editNameInput.type = 'text';
        editNameInput.value = commentHeader.textContent;

        const editCommentTextarea = document.createElement('textarea');
        editCommentTextarea.value = commentBody.textContent;

        // Create a save button
        const saveButton = document.createElement('button');
        saveButton.textContent = 'Save';
        saveButton.addEventListener('click', function() {
            saveEditedComment(index, editNameInput.value, editCommentTextarea.value);
        });

        // Replace comment display with edit fields
        commentHeader.replaceWith(editNameInput);
        commentBody.replaceWith(editCommentTextarea);
        editButton.replaceWith(saveButton);
        deleteButton.style.display = 'none';
    }

    // Function to save the edited comment
    function saveEditedComment(index, newName, newComment) {
        comments[index].name = newName;
        comments[index].comment = newComment;
        localStorage.setItem('comments', JSON.stringify(comments));
        renderComments();
    }

    // Event listener for form submission
    commentForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const comment = document.getElementById('comment').value;

        const newComment = { name, comment };
        comments.push(newComment);
        localStorage.setItem('comments', JSON.stringify(comments));

        renderComments();
        commentForm.reset();
    });

    // Initial render of comments
    renderComments();
});


document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const postsList = document.getElementById('postsList');
    const posts = document.querySelectorAll('.post');

    searchInput.addEventListener('keyup', function() {
        const query = searchInput.value.toLowerCase();

        posts.forEach(post => {
            const title = post.getAttribute('data-title').toLowerCase();
            if (title.includes(query)) {
                post.style.display = 'block';
            } else {
                post.style.display = 'none';
            }
        });
    });
})




function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('show');
}


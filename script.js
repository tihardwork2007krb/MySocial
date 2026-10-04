function likePost(button) {
    const count = button.querySelector("span");
    let currentLikes = Number(count.innerText);

    currentLikes++;

    count.innerText = currentLikes;
}

document.getElementById("togglePassword").addEventListener("click", () => {

    const passwordInput = document.getElementById("password");
    const eyeButton = document.getElementById("togglePassword");

    if (passwordInput.type === "password") {

        passwordInput.type = "text";
        eyeButton.textContent = "🙈";

    } else {

        passwordInput.type = "password";
        eyeButton.textContent = "👁️";

    }

});


function createPost() {

    const textBox = document.getElementById("postText");
    const text = textBox.value.trim();

    if (text === "") {
        alert("Please write something first.");
        return;
    }

    const posts = document.getElementById("posts");

    const post = document.createElement("article");
    post.className = "post";


    // Post header
    const header = document.createElement("div");
    header.className = "post-header";

    header.innerHTML = `
        <div class="avatar">
            👤
        </div>

        <div>
            <strong>You</strong>
            <small>Just now</small>
        </div>
    `;


    // Post content
    const content = document.createElement("p");
    content.className = "post-content";

    // Use textContent instead of innerHTML for user text
    content.textContent = text;

    message.textContent = "Login successful!";
    
    setTimeout(() => {
    window.location.href = "home.html";
}, 1000);

console.log(
    "Logged in:",
    userCredential.user.email
);

window.location.href = "home.html";


    // Buttons
    const buttons = document.createElement("div");
    buttons.className = "post-buttons";

    buttons.innerHTML = `
        <button type="button" onclick="likePost(this)">
            👍 Like <span>0</span>
        </button>

        <button type="button">
            💬 Comment
        </button>

        <button type="button">
            ↗ Share
        </button>
    `;


    // Build post
    post.appendChild(header);
    post.appendChild(content);
    post.appendChild(buttons);


    // Add newest post to top
    posts.prepend(post);


    // Clear textbox
    textBox.value = "";
}
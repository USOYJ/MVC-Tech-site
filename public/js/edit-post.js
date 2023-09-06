const updatePost = async (post_id, title, content) => {
  try {
    const response = await fetch(`/api/posts/${post_id}`, {
      method: "PUT",
      body: JSON.stringify({ title, content }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard"); 
    } else {
      throw new Error("Failed to update a post.");
    }
  } catch (error) {
    alert(error.message); 
  }
};


const deletePost = async (post_id) => {
  try {
    const response = await fetch(`/api/posts/${post_id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/dashboard"); 
    } else {
      throw new Error("Failed to delete a post.");
    }
  } catch (error) {
    alert(error.message); 
  }
};


document.addEventListener("DOMContentLoaded", () => {
  const updatePostButton = document.querySelector("#update-post");
  const deletePostButton = document.querySelector("#delete-post");

  if (updatePostButton) {
    updatePostButton.addEventListener("click", (event) => {
      event.preventDefault();
      const post_id = window.location.toString().split("/").pop();
      const title = document.querySelector("#title-update-post").value.trim();
      const content = document.querySelector("#content-update-post").value.trim();
      if (title && content) {
        updatePost(post_id, title, content); 
      }
    });
  }

  if (deletePostButton) {
    deletePostButton.addEventListener("click", (event) => {
      event.preventDefault();
      const post_id = window.location.toString().split("/").pop();
      deletePost(post_id);
    });
  }
});


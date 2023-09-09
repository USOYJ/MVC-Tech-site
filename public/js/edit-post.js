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
      const errorMessage = `Failed to update a post. Status: ${response.status}`;
      const responseText = await response.text();
      if (responseText) {
        throw new Error(`${errorMessage}\nResponse: ${responseText}`);
      } else {
        throw new Error(errorMessage);
      }
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
      const errorMessage = `Failed to delete a post. Status: ${response.status}`;
      const responseText = await response.text();
      if (responseText) {
        throw new Error(`${errorMessage}\nResponse: ${responseText}`);
      } else {
        throw new Error(errorMessage);
      }
    }
  } catch (error) {
    alert(error.message);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const updatePostButton = document.querySelector("#update-post");
  const deletePostButton = document.querySelector("#delete-post");

  if (updatePostButton) {
    updatePostButton.addEventListener("click", async (event) => {
      event.preventDefault();
      const post_id = window.location.toString().split("/").pop();
      const title = document.querySelector("#title-update-post").value.trim();
      const content = document.querySelector("#content-update-post").value.trim();
      if (title && content) {
        await updatePost(post_id, title, content);
      }
    });
  }

  if (deletePostButton) {
    deletePostButton.addEventListener("click", async (event) => {
      event.preventDefault();
      const post_id = window.location.toString().split("/").pop();
      await deletePost(post_id);
    });
  }
});


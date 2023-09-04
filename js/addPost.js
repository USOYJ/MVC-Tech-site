const addPost = async (e) => {
    e.preventDefault(); 

    const contents = $('#modal-content-textarea').val();
    const title = $('#modal-title-input').val().trim();
   if  (contents && title) {
    const response = await fetch(`/api/post`, {
        method: 'POST', 
        body: JSON.stringify({ title, contents}), 
        headers: { 'Content-Type': 'application/json' }
    });
    const data = await response.json();

    if (response.ok) {
        alert(data.message)
        document.location.replace('/dashboard');
    } else {
        alert(`Error! Please try adding post again.`);
    }
   }
    

    
}

$('#add-post').click(addPost);
Features 
--Create notes with a title and content
--Delete individual notes
--Clean, minimal UI with a responsive form

Using_javascript
form.addEventListener("submit", function(e) {
  e.preventDefault();

this function takes title and content values prevents the page from reloading

things used 
addEventListener -- to Form submit, delete button click
createElement -- to create note elements
e.preventDefault() -- to Prevent default form submission
element.remove() -- to Delete a note from the DOM


using_react
components created
-header.jsx --- created header title content.
-createnote.jsx --- creates a container form to input title and cotent for the note.
-note.jsx --- displays the notes input throght createnote

things used
setState -- used to addnotes,deletenote in app
.map() --- used to list the notes

function Note(props) {
  function handleDelete() {
    props.deleteNote(props.id);
  }

 --- this function is used to receive title,content,deletenote and id as props 

 
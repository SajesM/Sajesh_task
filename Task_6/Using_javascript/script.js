const form = document.getElementById("noteForm");
const notes = document.getElementById("NoteContainer");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  if (title === "" || content === "") return;

  createNote(title, content);

  form.reset();
});

function createNote(title, content) {
  const noteDiv = document.createElement("div");
  noteDiv.classList.add("note");

  const noteTitle = document.createElement("h1");
  noteTitle.innerText = title;

  const noteContent = document.createElement("p");
  noteContent.innerText = content;

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.classList.add("create-note-button");

  deleteBtn.addEventListener("click", function () {
    noteDiv.remove();
  });

  noteDiv.append(noteTitle);
  noteDiv.append(noteContent);
  noteDiv.append(deleteBtn);

  notes.append(noteDiv);
}

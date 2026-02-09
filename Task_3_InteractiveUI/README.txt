Task : UI interaction using javascript
Interactiva ui with a color-changing modal and sliding sidebar menu.
Features
Modal Dialog: Click a button to open a modal with color options (Red, Blue, Green)
Background Color Change: Select a color to change the page background
Sliding Sidebar: Menu button opens a sidebar with navigation links
Code Examples
Opening the Modal
color_button.addEventListener("click", function () {
  modal.style.display = "flex";
});
When the color button is clicked, the modal becomes visible.
Changing Background Color
color_buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    body.style.backgroundColor = this.style.backgroundColor;
    modal.style.display = "none";
  });
});
Each color button applies its color to the page background and closes the modal.
Sidebar Toggle
Open sidebar
open_sidebar_menu.addEventListener("click", function () {
  sidebar.style.width = "250px";
});
Close sidebar
close_sidebar.addEventListener("click", function () {
  sidebar.style.width = "0";
});
The sidebar slides in and out by changing its width. CSS transitions make it smooth.
Technologies Used
-HTML for structure
-CSS for styling and animations
-JavaScript for interactivity

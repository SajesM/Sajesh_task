      const modal = document.getElementById("select-color-modal");
      const color_button = document.getElementById("changeColor");
      const close_button = document.getElementById("close");
      const body = document.body;
      const close_sidebar = document.getElementById("close_side");
      const open_sidebar_menu = document.getElementById("sidebarMenu");
      const sidebar = document.getElementById("sidebar");

      color_button.addEventListener("click", function () {
        modal.style.display = "flex";
      });

      close_button.addEventListener("click", function () {
        modal.style.display = "none";
      });

      const color_buttons = modal.querySelectorAll("button");
      color_buttons.forEach(function (button) {
        button.addEventListener("click", function () {
          body.style.backgroundColor = this.style.backgroundColor;
          modal.style.display = "none";
        });
      });

      open_sidebar_menu.addEventListener("click", function () {
        sidebar.style.width = "250px";
      });

      close_sidebar.addEventListener("click", function () {
        sidebar.style.width = "0";
      });
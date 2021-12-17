// https://www.w3schools.com/howto/howto_css_modals.asp

// This function contains the logic for the modal
export default function modal(itemName, btnName) {
  let addBtnList = document.querySelectorAll(`.${btnName}`);
  let modalContainer = document.getElementById(`${itemName}Modal`);

  // Open the modal after clicking on one of the buttons
  addBtnList.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      // The code executes only if its empty
      if (btn.children.length == 0) {
        if (e.target.id != null) {
          sessionStorage.setItem("containerToAdd", e.target.id);
        }
        if (e.target.classList.contains(itemName)) {
          modalContainer.style.display = "block";
        }
      } else {
        return;
      }
    });
  });

  // Close the modal after clicking somewhere in the modal container
  modalContainer.addEventListener("click", (e) => {
    e.preventDefault();
    modalContainer.style.display = "none";
  });
}

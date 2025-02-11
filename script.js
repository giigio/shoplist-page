document.getElementById("add-item").addEventListener("click", (e) => {
  e.preventDefault();
  let item = document.getElementById("item").value;
  let elementLength = document.getElementsByClassName("item").length;

  if (item !== "") {
    document.querySelector(".no-item").style.display = "none";

    let itemContainer = document.querySelector(".item-container");

    let id = elementLength + 1;

    let itemElement = document.createElement("div");
    itemElement.classList.add("item");
    itemElement.innerHTML = `
      <div class="flex justify-center align-center gap-1">
        <input type="checkbox" 
          id="item-${id}" 
          name="item[]" 
          aria-label="Marca item como completo"
        />
        <label for="item-${id}">${item}</label>
      </div>
      <div
        class="remove-item" 
        aria-label="Remove item"
      >
        <img src="assets/icons/Frame-3.svg" alt="" />
      </div>
    `;

    itemContainer.appendChild(itemElement);
    document.getElementById("item").value = "";
    removeItem();
  }
});

function removeItem() {
  document.addEventListener("click", (e) => {
    if (e.target.parentElement.classList.contains("remove-item")) {
      e.target.parentElement.parentElement.remove();

      let elementLength = document.getElementsByClassName("item").length;
      if (elementLength === 0) {
        document.querySelector(".no-item").style.display = "block";
      }

      document.getElementsByClassName("alert-msg")[0].style.display =
        "inline-block";
    } else if (e.target.classList.contains("remove-alert")) {
      document.getElementsByClassName("alert-msg")[0].style.display = "none";
    }
  });
}

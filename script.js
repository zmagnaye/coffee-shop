const drinkModal = document.getElementById("drinkModal");

drinkModal.addEventListener("show.bs.modal", event => {
    const button = event.relatedTarget; //get button that triggered modal
    const title = button.getAttribute("data-title");
    const description = button.getAttribute("data-description");
    const modalTitle = drinkModal.querySelector(".modal-title");
    const modalBody = drinkModal.querySelector(".modal-body");

    //Update modal content with the data from clicked button
    modalTitle.textContent = title;
    modalBody.textContent = description;
});

//Function for modal
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

//Function to validate email format
function validateEmail(email){
    return email.includes("@") && email.includes(".");
}

console.log(validateEmail("test@email.com"));

//Function to calculate total
const drinkPrices=[5.65, 5.50, 6.50];

function calculateTotal(prices) {
    return prices.reduce((total, price) => total + price, 0).toFixed(2);
}

console.log("Total Price: $", calculateTotal(drinkPrices));

//Function to return a random drink from the array
const drinks=["House Coffee", "Vietnamese Coffee", "Mint Sereno", "Mung Bean", "Thai Milk Tea"];

function getRandomDrink() {
    const index = Math.floor(Math.random() * drinks.length);
    return drinks[index];
}

console.log("Random Drink: ", getRandomDrink());

//Function to generate a random order ID
function generateOrderID() {
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    return "Order ID#: " + randomNum;
}

console.log(generateOrderID());

//Function for adding customer feedback
let feedbackList = [];

function addFeedback(message) {
    feedbackList.push(message);
    return feedbackList;
}

console.log(addFeedback("House Cofee is always the best!"));
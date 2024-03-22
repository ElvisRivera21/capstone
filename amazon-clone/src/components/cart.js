const cohortName = "2310-FSA-ET-WEB-PT-SF-B";
const API_URL = 'http://localhost:5432/api';

const addNewItem = async (itemObj) => {
    try {
        const response = await fetch(`${API_URL}/items`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(itemObj),
        });
        if (!response.ok) throw new Error("Network response was not ok");
        return await response.json();
    } catch (err) {
        console.error("Oops, something went wrong with adding that item!", err);
    }
};

const removeItem = async (itemId) => {
    try {
        const response = await fetch(`${API_URL}/items/${itemId}`, {
            method: "DELETE",
        });
        if (!response.ok) throw new Error("Network response was not ok");
        init(); // Assuming you have a function to reinitialize the UI after item removal
    } catch (err) {
        console.error(`Whoops, trouble removing item #${itemId} from the roster!`, err);
    }
};

const renderAllItems = (itemList) => {
    const rosterContainer = document.getElementById("item-container");
    rosterContainer.innerHTML = "";

    if (itemList.success && Array.isArray(itemList.data.items)) {
        itemList.data.items.forEach((item) => {
            const itemCard = document.createElement("div");
            itemCard.classList.add("item-card");
            const cardHTML = `
                <img src="${item.imageUrl}" alt="${item.name}" />
                <h3>${item.name}</h3>
                <button data-item-id="${item.id}" class="details-btn">See Details</button>
                <button onclick="deleteItem(${item.id})">Delete</button>
            `;
            itemCard.innerHTML = cardHTML;
            rosterContainer.appendChild(itemCard);
        });
    } else {
        console.error("Unexpected response format or no response:", itemList);
        rosterContainer.innerHTML = "<p>Item is no longer available.</p>";
    }
};
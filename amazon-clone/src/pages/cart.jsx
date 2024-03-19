import { addNewItem, removeItem } from "./yourModule"; // Adjust the import path and named exports based on your actual module

// Tests for `addNewItem`
describe("addNewItem", () => {
    let newItem;
    const itemData = {
        clothing: "clothing",
        groceries: "fruits",
        homeImprovements: "paint",
        kids: "toys",
        medical: "band-aids",
        womens: "dresses",
    };

    beforeAll(async () => {
        newItem = await addNewItem(itemData);
    });

    test("returns an object", () => {
        expect(typeof newItem).toBe("object");
    });

    test("new item has expected properties with correct values", () => {
        Object.keys(itemData).forEach(key => {
            expect(newItem).toHaveProperty(key, itemData[key]);
        });
    });
});

// Tests for `removeItem`
describe("removeItem", () => {
    let response;
    const itemIdToRemove = 2; // Example item ID

    beforeAll(async () => {
        response = await removeItem(itemIdToRemove);
    });

    test("successfully removes item and returns undefined", () => {
        expect(response).toBeUndefined();
    });
});

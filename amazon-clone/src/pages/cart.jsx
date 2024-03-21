import clothing from "./clothing";
import groceries from "./groceries";
import homeImprovements from "./homeImprovements";
import kids from "./kids";
import medical from "./medical";
import womens from "./womens";

// TODO: Tests for `addNewItem`
describe("addNewItem", () => {
    let newItem;
    const itemData = {
        clothing: "clothing",
        groceries: "",
        homeImprovements: "",
        kids: "",
        medical: "",
        womens: "",
        
    };

    beforeAll(async () => {
        newItem = await addNewItem(itemData);
    });

    test("returns an object", () => {
        expect(typeof newItem).toBe("object");
    });
    test("new player has expected properties", () => {
        expect(newItem).toHaveProperty("clothing", itemData.clothing);
        expect(newItem).toHaveProperty("groceries", itemData.groceries);
        expect(newItem).toHaveProperty("homeImprovements", itemData.homeImprovements);
        expect(newItem).toHaveProperty("kids", itemData.kids);
        expect(newItem).toHaveProperty("medical", itemData.medical);
        expect(newItem).toHaveProperty("womens", itemData.womens);
    });
});

// (Optional) TODO: Tests for `removeItem`
describe("removeItem", () => {
    let response;
    const itemIdToRemove = 2; // Assuming this is a item with ID 2

    beforeAll(async () => {
        response = await removeItem(itemIdToRemove);
    });

    test("successfully removes item and returns undefined", () => {
        expect(response).toBeUndefined();
    });
});
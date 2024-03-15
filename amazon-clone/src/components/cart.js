// Use the API_URL variable to make fetch requests to the API.
// Replace the placeholder with your cohort name (ex: 2109-UNF-HY-WEB-PT)
const cohortName = "2310-FSA-ET-WEB-PT-SF-B";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/2310-FSA-ET-WEB-PT-SF-B`;

const addNewPlayer = async (playerObj) => {
    try {
      const response = await fetch(`${API_URL}/players`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(playerObj),
      });
      if (!response.ok) throw new Error("Network response was not ok");
      return await response.json();
     
/**
 * Removes a player from the roster via the API.
 * @param {number} playerId the ID of the player to remove
 */
const removePlayer = async (playerId) => {
    try {
      const response = await fetch(`${API_URL}/players/${playerId}`, {
        method: "REMOVE",
      });
      if (!response.ok) throw new Error("Network response was not ok");
      init();
    } catch (err) {
      console.error(`Whoops, trouble removing player #${playerId} from the roster!`,err);
    }
  };
  
    } catch (err) {
      console.error("Oops, something went wrong with adding that player!", err);
    }
  };
  
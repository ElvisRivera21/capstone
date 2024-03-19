document.getElementById("search-input").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
      event.preventDefault(); 

      var query = document.getElementById("search-input").value;


      var xhr = new XMLHttpRequest();
      xhr.open("GET", "search.php?q=" + encodeURIComponent(query), true);
      xhr.onload = function() {
          if (xhr.status == 200) {
              
              document.getElementById("search-results").innerHTML = xhr.responseText;
          }
      };
      xhr.send();
  }
});




async function searchUser() {
  // Get the value from the input field
  const username = document.getElementById("searchInput").value;

  // Check if the input is not empty
  if (username.trim() !== "") {
    try {
      // Use the GitHub API to search for the user
      const response = await fetch(`https://api.github.com/users/${username}`);

      // Check if the response is successful
      if (response.ok) {
        const userData = await response.json();

        // Display the user data on the page
        displayUserData(userData); // calling the displayUserData function if no error is found
      } else {
        // Display an error if the response is not successful
        console.error("Error fetching user data:", response.statusText);
      }
    } catch (error) {
      // Display an error if there's an exception during the fetch
      console.error("Error:", error.message);
    }
  } else {
    // Display an alert if the input is empty
    alert("Please enter a GitHub username.");
  }
}

function displayUserData(userData) {
  // Access the results container
  const resultsContainer = document.getElementById("resultsContainer");

  // Clear previous results
  resultsContainer.innerHTML = "";
  const userCardHTML = `
    <div class="user-card">
      <img src="${userData.avatar_url}" alt="User Avatar">
      <div class="user-info">
        <p>Username: ${userData.login}</p>
        <p>Name: ${userData.name || "Not provided"}</p>
      </div>

    </div>
  `;

  resultsContainer.innerHTML = userCardHTML;
}

function searchUser() {
  const username = document.getElementById("searchInput").value;
  if (username.trim() !== "") {
    console.log("Searching for user:", username);
  } else {
    alert("Please enter a GitHub username.");
  }
}

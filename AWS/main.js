const counter = document.querySelector(".counter-number");

async function updateCounter() {
  try {
    // Fetch the response from the given URL
    let response = await fetch("https://zgqqad2f56nb3i64arcauhqpdi0ybswy.lambda-url.us-east-1.on.aws/");

    // Check if the response is ok (status is in the range 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse the response as JSON
    let data = await response.json();

    // Update the inner HTML of the counter element
    counter.innerHTML = `Views: ${data.views}`;
  } catch (error) {
    console.error("Failed to update the counter:", error);
    counter.innerHTML = "Error fetching views";
  }
}

// Call the function to update the counter
updateCounter();

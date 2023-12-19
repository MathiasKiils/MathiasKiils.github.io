document.addEventListener('DOMContentLoaded', function () {
    // This code runs when the page has fully loaded

    // Function to fetch and update data
    function fetchDataAndUpdate(deviceId) {
        // Example using fetch to get latest data for the specified device
        fetch(`/api/device/${deviceId}/latest_data`)
        .then(response => response.json())
        .then(data => {
            console.log(`Latest data for Device ${deviceId}:`, data.latest_temp[0],data.latest_co2[0], data.latest_fugt[0]);
            updateTemp(deviceId, data.latest_temp[0]);
            updateCO2(deviceId, data.latest_co2[0]);
            updateFugt(deviceId, data.latest_fugt[0]);
            // Update your UI or perform other actions with the data
        })
        .catch(error => console.error(`Error fetching data for Device ${deviceId}:`, error));
    
    }

    // if (currentPage === 'device1') {
    //     fetchDataAndUpdate(1);
    // } else if (currentPage === 'device2') {
    //     fetchDataAndUpdate(2);
    // } else if (currentPage === 'device3') {
    //     fetchDataAndUpdate(3);
    // }

    // Set up automatic updates every 5 seconds (adjust the interval as needed)
    setInterval(() => {
        // Repeat a similar setup for Device 2 and Device 3 if needed
        if (currentPage === 'device1') {
            fetchDataAndUpdate(1);
        } else if (currentPage === 'device2') {
            fetchDataAndUpdate(2);
        } else if (currentPage === 'device3') {
            fetchDataAndUpdate(3);
        }
    }, 5000);

    // Additional code as needed
});

function updateTemp(deviceId, tempValue) {
    // Get the <div> element by id for the specified device
    const tempDiv = document.getElementById(`temp${deviceId}`);

    // Display the data in the element
    tempDiv.textContent = tempValue;
}

function updateCO2(deviceId, co2Value) {
    // Get the <div> element by id for the specified device
    const co2Div = document.getElementById(`co2${deviceId}`);

    // Display the data in the element
    co2Div.textContent = co2Value;
}

function updateFugt(deviceId, fugtValue) {
    // Get the <div> element by id for the specified device
    const fugtDiv = document.getElementById(`fugt${deviceId}`);

    // Display the data in the element
    fugtDiv.textContent = fugtValue;
}

// // directPage.js
// function handleClick(deviceId) {
//   // Use window.location.href to navigate to the desired page
//   if (deviceId === 1) {
//       window.location.href = '/device' + deviceId;  // Replace with the actual route of your device page
//   } else if (deviceId === 2) {
//       // Handle other devices or add additional conditions as needed
//   } else if (deviceId === 3) {
//       // Handle other devices or add additional conditions as needed
//   }
// }

function handleClick(boxNumber) {
  // Adjust the file name and path based on your project structure
  window.location.href = 'device' + boxNumber;
}
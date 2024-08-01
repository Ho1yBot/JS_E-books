"use strict";

function getMyCoordinates() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        resolve({
          latitude: coords.latitude,
          longitude: coords.longitude,
        });
      },
      (error) => {
        reject(error);
      }
    );
  });
}

async function getMyPlace() {
  try {
    const { latitude, longitude } = await getMyCoordinates();
    const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}`);
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    console.log(data.city);
  } catch (err) {
    console.error(err);
  }
}

getMyPlace();

// function getMyCoordinates() {

//   navigator.geolocation.getCurrentPosition(
//     (position) => {

//       console.log(position)
//     }
//   );

// }

// getMyCoordinates()
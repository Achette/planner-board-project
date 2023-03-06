export const getLocation = () => {
  let lat, lon;

    navigator.geolocation.getCurrentPosition((position) => {
      lat = position.coords.latitude;
      lon = position.coords.longitude;
    });
  
console.log(lat, lon)
  return { lat, lon };
};

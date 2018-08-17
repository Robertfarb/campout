
// $("#btn").click(function () {
//   var geocoder = new google.maps.Geocoder();
//   geocoder.geocode({ 'address': 'miami, us' }, function (results, status) {
//     if (status == google.maps.GeocoderStatus.OK) {
//       alert("location : " + results[0].geometry.location.lat()'' + " " + results[0].geometry.location.lng());
//     } else {
//       alert("Something got wrong " + status);
//     }
//   });
// });

export const geoSearch = (searchInput) => {
  const geoCoder = new google.maps.Geocoder();
  geoCoder.geocode({'address': searchInput}, function (results, status) {
    if (status === 'OK') {
      let lat = results[0].geometry.location.lat();
      let lng = results[0].geometry.location.lng();
    // return {"lat": lat, "lng": lng}
    console.log("status is:" + status)
    console.log("lat is" + results[0].geometry.location)
    console.log("result is" + JSON.stringify(results[0].geometry.location))
    } else {
      console.log("no luck")
    }
  });
}

// export const geoSearch = (searchInput) => {
//   const geoCoder = new google.maps.Geocoder();
//   return geoCoder.geocode({'address': 'San Francisco'},);
// }
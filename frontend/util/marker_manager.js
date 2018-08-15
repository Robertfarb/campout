class MarkerManager {
  constructor (map, handleClick) {
    this.map = map;
    this.markers = {};
  }
  
  updateMarkers(listings) {
    const listingsObj = {};
    listings.forEach(listing => listingsObj[listing.id] = listing);

    listings.filter(listing => !this.markers[listing.id])
    .forEach(filteredListing => this.createMarkerFromListing(filteredListing, this.handleClick))

    Object.keys(this.markers).filter(listingId => !listingsObj[listingId])
    .forEach((listingId) => this.removeMarker(this.markers[listingId]))

    console.log(this.markers)
  }

  createMarkerFromListing (listing) {
    const position = new google.maps.LatLng(listing.lat, listing.long)
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      listingId: listing.id
    });

    marker.addListener('click', () => this.handleClick(listing));
    this.markers[marker.listingId] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.benchId].setMap(null);
    delete this.markers[marker.benchId]
  }
}

export default MarkerManager;
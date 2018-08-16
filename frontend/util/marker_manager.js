class MarkerManager {
  constructor (map, handleClick) {
    this.map = map;
    this.markers = {};
    this.handleClick = handleClick;
  }
  
  updateMarkers(listings) {
    const listingsObj = {};
    listings.forEach(listing => listingsObj[listing.id] = listing);

    listings.filter(listing => !this.markers[listing.id])
    .forEach(filteredListing => this.createMarkerFromListing(filteredListing, this.handleClick))

    Object.keys(this.markers).filter(listingId => !listingsObj[listingId])
    .forEach((listingId) => this.removeMarker(this.markers[listingId]))
  }

  createMarkerFromListing (listing) {
    const position = new google.maps.LatLng(listing.lat, listing.long)
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      listingId: listing.id,
      listingTitle: listing.title
    });

    marker.addListener('click', () => this.handleClick(listing));
    this.markers[marker.listingId] = marker;
  }

  removeMarker(marker) {
    this.markers[marker.listingId].setMap(null);
    delete this.markers[marker.listingId]
  }
}

export default MarkerManager;
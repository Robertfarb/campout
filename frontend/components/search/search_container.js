import { connect } from 'react-redux';
import Search from './search';
import { requestAllListings, requestListing} from '../../actions/listings_actions';



const mapStateToProps = (state, errors) => ({
  listings: state.entities.listings,
});

const mapDispatchToProps = dispatch => ({
  requestListing: (id) => dispatch(requestListing(id)),
  requestAllListings: () => dispatch(requestAllListings())
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
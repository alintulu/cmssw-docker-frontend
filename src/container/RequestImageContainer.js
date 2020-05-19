import { connect } from 'react-redux'
import RequestImage from '../components/RequestImage'

const mapStateToProps = (state) => {
  return {
    releases: state.releases,
    buildImage: state.buildImage
  }
}

const RequestImageContainer = connect(
  mapStateToProps,
  null
)(RequestImage)

export default RequestImageContainer
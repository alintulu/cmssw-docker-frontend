import { connect } from 'react-redux'
import AvailableImages from '../components/AvailableImages'

const mapStateToProps = (state) => {
  return {
    demo: state.demo,
    table: state.table,
    show: state.show
  }
}

const AvailableImagesContainer = connect(
  mapStateToProps,
  null
)(AvailableImages)

export default AvailableImagesContainer
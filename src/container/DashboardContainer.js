import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard'

const mapStateToProps = (state) => {
  return {
    details: 0,
    demo: state.demo
  };
};

const DashboardContainer = connect(
  mapStateToProps,
  null
)(Dashboard)

export default DashboardContainer
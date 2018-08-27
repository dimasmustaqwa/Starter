import { connect } from 'react-redux';
import SideNav from 'components/SideNav';

import { bindActionCreators } from 'redux';
import { generalActions } from '@/actions/generalActions';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { sideNav } = this.props.general;

    return (
      <div>
        <div className={`wrapper-overlay ${sideNav ? 'active' : ''}`} onClick={() => this.props.showSidenav(false)}></div>
        <SideNav open={sideNav} />
        <div className="main-navbar fixed-top">
          <div className="container">
            <div className="row" style={{ 'display': 'flex', 'flex': 1, 'alignItems': 'center' }}>

              <div className="col-1">
                <i className="material-icons" style={{ 'cursor': 'pointer' }} onClick={() => this.props.showSidenav(true)}>dehaze</i>
              </div>

              <div className="col-4">
                <img src="/static/images/logo/logo_sm.jpg" className="main-navbar__logo" />
              </div>

              <div className="col ml-auto">
                <ul className="main-navbar__menu">
                  <li>
                    <i className="material-icons">search</i>
                  </li>
                  <li>
                    <i className="material-icons">notifications</i>
                  </li>
                  <li>
                    <i className="material-icons">message</i>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    general: state.general
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showSidenav: bindActionCreators(generalActions.showSidenav, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
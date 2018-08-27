class SideNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={`sidenav ${this.props.open ? 'open' : ''}`}>
      </div>
    );
  }
}

export default SideNav;
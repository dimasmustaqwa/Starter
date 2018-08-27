import Header from 'components/Header';

class MainLayout extends React.Component {
  constructor(props) {
    super(props);
  }

  render(children) {
    return (
      <div style={{ 'flex': '1 1 0%' }}>
        <div className="wrapper">
          <Header />
          <div className="main-content">
            {children}
          </div>
        </div>
      </div>
    );
  }
}

export default MainLayout;
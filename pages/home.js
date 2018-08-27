import MainLayout from 'layouts/MainLayout';
import Slider from 'components/Slider';

class Home extends MainLayout {
  constructor(props) {
    super(props);
  }

  render() {
    return super.render(
      <div>
        <Slider />
      </div>
    );
  }
}

export default Home;
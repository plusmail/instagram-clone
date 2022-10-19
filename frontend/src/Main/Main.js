import Story from '../Story/Story';
import Suggest from '../Suggest/Suggest';
import './mainStyle.css';

function Main() {
  return (
    <div className={'main'}>
      <div className={'main-box'}>
        <div className={'left'}>
          <Story />
          {/*Feed 여기에 오면 됩니다!*/}
        </div>
        <div className={'suggest'}>
          <Suggest />
        </div>
      </div>
    </div>
  );
}

export default Main;

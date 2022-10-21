import Story from '../../Story/Story';
import './mainStyle.css';
import SuggestContainer from "../../Suggest/SuggestContainer";

function Main() {
  return (
    <div className={'main'}>
      <div className={'main-box'}>
        <div className={'left'}>
          <Story />
          {/*FeedContainer 여기에 오면 됩니다!*/}
        </div>
        <div className={'suggest'}>
          <SuggestContainer />
        </div>
      </div>
    </div>
  );
}

export default Main;

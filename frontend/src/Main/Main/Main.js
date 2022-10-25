import Story from '../../Story/Story';
import './mainStyle.css';
import SuggestContainer from "../../Suggest/SuggestContainer";
import Main1 from "../../Feed/Main1";
import Main2 from "../../Feed/Main2"
import Main3 from '../../Feed/Main3';

function Main() {
  return (
    <div className={'main'}>
      <div className={'main-box'}>
        <div className={'left'}>
          <Story />
          <Main1/>
          <Main2/>
          <Main3/>
        </div>
        <div className={'suggest'}>
          <SuggestContainer />
        </div>
      </div>
    </div>
  );
}

export default Main;

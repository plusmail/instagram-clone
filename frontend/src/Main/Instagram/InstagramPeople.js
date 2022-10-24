import People from '../../Suggest/People';
import NavBar from "../../NavBar/NavBar";

function InstagramPeople() {
  return (
      <div className={'instagram'}>
          <div className={'nav'}>
              <NavBar/>
          </div>
          <div className={'myPage'}>
              <People />
          </div>
      </div>
  );
}

export default InstagramPeople;

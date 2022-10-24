import Main from '../Main/Main';
import NavBar from "../../NavBar/NavBar";
import './allStyle.css'

function Instagram() {
    return (
        <div className={'instagram'}>
            <div className={'nav'}>
                <NavBar/>
            </div>
            <div className={'main'}>
                <Main/>
            </div>
        </div>
    );
}

export default Instagram;

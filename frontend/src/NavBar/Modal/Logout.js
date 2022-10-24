import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../Authority/modules/user";
import Log from './Log';

const Header = () => {
    const { auth } = useSelector(({ auth }) => ({ auth: auth.auth }));
    console.log("Header1->", auth);
    console.log("Header->", auth.username);
    // if(!user) return;
    const dispatch = useDispatch();
    const onLogout = () => {
        dispatch(logout());
    };

    return (
                    <div>
                        <Log onClick={onLogout} to="/login">
                            Log out
                        </Log>
                    </div>
    );
};

export default Header;
import {useSelector} from "react-redux";
import Suggest from "./Suggest";

const SuggestContainer = () => {
    const {user} = useSelector(({user}) => ({user: user.user}));
    return <Suggest user={user} />;
}

export default SuggestContainer;
import React, {Component} from "react";
import './NavBar.css';
import Grid from '@material-ui/core/Grid';
import Search from "./Search/Search";
import img from "./img/insta_logo.png";
import Modal from "./Modal/Modal";

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="navbar__barContent">
                <div className='container'>
                    <Grid item xs={2}>
                    </Grid>
                    <Grid item xs={3}>
                        <a href='http://localhost:3000/instagram'>
                            <img src={img} alt='logo' width='100px' />
                        </a>
                    </Grid>
                    <Grid item xs={3}>
                        <div className='Search-container'>
                            <Search/>
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                    <div className='modal-container'>
                        <Modal/>
                    </div>
                    </Grid>
                </div>
            </div>
        )
    }
}



export default NavBar;


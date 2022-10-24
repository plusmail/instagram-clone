import React, {Component} from "react";
import './NavBar.css';
import Grid from '@material-ui/core/Grid';
import Search from "./Search/Search";
import img from "./img/insta_logo.png";
import Modal from "./Modal/Modal";
import Search1 from "./Search/Search1";

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="navbar__barContent">
                <Grid container>
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
                    <div className='grid-container'>
                        <Modal/>
                    </div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}



export default NavBar;


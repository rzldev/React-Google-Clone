import './Home.css';
import { Link } from "react-router-dom";
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import GoogleLogo from '../../assets/google-logo.png';
import Search from '../../components/search/Search';

function Home() {
    return (
        <div className="home">
            {/* Header */}
            <div className="home__header">
                <Link to="/gmail">Gmail</Link>
                <Link to="/images">Images</Link>
                <div className="home__headerItem" >
                    <div className="headerMenu">
                        <AppsRoundedIcon />
                    </div>
                </div>
                <div className="home__headerItem">
                    <div className="headerAvatar">
                        <AccountCircleRoundedIcon />
                    </div>
                </div>
            </div>

            {/* Body */}
            <div className="home__body">
                <img src={GoogleLogo} alt={GoogleLogo} />

                <Search className="home__bodySearch" />

                <div className="home__bodyLanguages">
                    <p>Google offered in: </p>
                    <Link to="/">Japanese</Link>
                    <Link to="/">Korean</Link>
                </div>
            </div>

            {/* Footer */}
            <footer className="home__footer">
                <div className="home__footerLocation">
                    Somewhere
                </div>
                <hr />
                <div className="home__footerOptions">
                    <Link to="/settings">Settings</Link>
                    <Link to="/privacy">Privacy</Link>
                    <Link to="/terms">Terms</Link>
                    <Link to="/advertising">Advertising</Link>
                    <Link to="/business">Business</Link>
                    <Link to="/about">About</Link>
                </div>
            </footer>
        </div>

    )
}

export default Home;
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './HeaderOptions.css';

function HeaderOptions({ className, hideSettings = false }) {
    return (
        <div className={`header__options ${className}`}>
            {
                !hideSettings && (
                    <div className="header__optionsItem">
                        <span>
                            <SettingsIcon />
                        </span>
                    </div>
                )
            }
            <div className="header__optionsItem">
                <span>
                    <AppsIcon />
                </span>
            </div>
            <div className="header__optionsItem">
                <span>
                    <AccountCircleIcon />
                </span>
            </div>
        </div>
    )
}

export default HeaderOptions;
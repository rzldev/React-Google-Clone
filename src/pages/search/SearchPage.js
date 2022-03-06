import { NavLink, Link } from 'react-router-dom';
import GoogleLogo from '../../assets/google-logo.png';
import Search from '../../components/search/Search';
import HeaderOptions from '../../components/header-options/HeaderOptions';
import SearchIcon from '@mui/icons-material/Search';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import WysiwygOutlinedIcon from '@mui/icons-material/WysiwygOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import './SearchPage.css';
import { useContext, useEffect } from 'react';
import useGoogleSearch from '../../hooks/use-google-search';
import { SearchContext } from '../../store/search-context';
import response from '../../data/response';
import SearchList from '../../components/search-list/SearchList';

function SearchPage() {
    // API CALL
    const { data, fetchData } = useGoogleSearch();

    const searchCtx = useContext(SearchContext);

    useEffect(() => {
        if (searchCtx.searchText.trim()) {
            fetchData(searchCtx.searchText);
        }
    }, [searchCtx.searchText, fetchData]);

    // DUMMY DATA
    // const data = response;
    // console.log(data);

    return (
        <div className="searchPage">
            <div className="searchPage__header">
                <div className="header__left">
                    <div className="top">
                        <Link to="/" className="header__logo">
                            <img src={GoogleLogo} alt="google-logo" />
                        </Link>

                        <Search className="header__search" searched />
                    </div>

                    <div className="search__options">
                        <div className="search__optionsList">
                            <NavLink to="/search/all" activeClassName="active__option">
                                <SearchIcon /> All
                            </NavLink>
                            <NavLink to="/search/images" activeClassName="active__option">
                                <ImageOutlinedIcon /> Images
                            </NavLink>
                            <NavLink to="/search/news" activeClassName="active__option">
                                <WysiwygOutlinedIcon />News
                            </NavLink>
                            <NavLink to="/search/shopping" activeClassName="active__option">
                                <LocalOfferOutlinedIcon /> Shopping
                            </NavLink>
                            <NavLink to="/search/maps" activeClassName="active__option">
                                <RoomOutlinedIcon /> Maps
                            </NavLink>
                            <span><MoreVertOutlinedIcon /> More</span>
                        </div>

                        <span>Tools</span>
                    </div>
                </div>

                <div className="header__right">
                    <HeaderOptions />

                    <span>SafeSearch on</span>
                </div>
            </div>

            <hr className="searchPage__separator" />

            <div className="searchPage__body">
                {data !== null && (<p className="searchPage__bodySearchInformation">About {data.searchInformation.formattedTotalResults} results ({data.searchInformation.searchTime} seconds)</p>)}

                <div className="searchPage__bodyLeft">
                    {data !== null && (<SearchList data={data} />)}
                </div>

                <div className="searchPage__bodyRight">

                </div>
            </div>
        </div>
    )
}

export default SearchPage;
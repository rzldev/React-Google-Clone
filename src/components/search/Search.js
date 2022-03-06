import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import './Search.css';
import { Fragment, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { SearchContext } from '../../store/search-context';

function Search({ className, searched = false }) {
    const searchCtx = useContext(SearchContext);

    const [input, setInput] = useState(searchCtx.searchText);

    const history = useHistory();

    function submitSearchHandler(event) {
        event.preventDefault();

        searchCtx.setSearchText(input);

        history.push('/search');
    }

    return (
        <form className={`search ${className}`} onSubmit={submitSearchHandler}>
            <div className="search__input">
                {
                    !searched && (
                        <SearchIcon />
                    )
                }
                <input type="text" placeholder="" value={input} onChange={(e) => setInput(e.target.value)} />
                {
                    input.trim().length > 0 && (
                        <Fragment>
                            <CloseIcon className="pointer" onClick={() => setInput('')} />
                            <div className="verticalLine" />
                        </Fragment>
                    )
                }
                <MicIcon />
                {
                    searched && (
                        <SearchIcon />
                    )
                }
            </div>

            {
                !searched && (
                    <div className="search__buttons">
                        <Button variant="outlined" onClick={submitSearchHandler}>Google Search</Button>
                        <Button variant="outlined">I'm Feeling Lucky</Button>
                    </div>
                )
            }
        </form>
    )
}

export default Search;
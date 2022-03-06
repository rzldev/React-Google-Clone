import './SearchItem.css';

function SearchItem(props) {
    const item = props.item;

    return (
        <div className="search__item">
            <a href={item.link} className="search__itemLink">
                <p>{item.displayLink}</p>
                <h3>{item.title}</h3>
            </a>
            <p>{item.snippet}</p>
        </div>
    )
}

export default SearchItem;
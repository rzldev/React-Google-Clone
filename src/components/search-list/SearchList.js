import SearchItem from "./SearchItem";

function SearchList(props) {
    const data = props.data

    return (
        <div>
            {data.items.map((item, index) => (
                <SearchItem key={index} item={item} />
            ))}
        </div>
    )
}

export default SearchList;
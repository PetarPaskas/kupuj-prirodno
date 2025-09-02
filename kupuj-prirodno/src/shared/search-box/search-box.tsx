interface SearchBoxProps{

}
const SearchBox = ({}:SearchBoxProps)=>{

return <div className="searchbox">
        <input type="text" className="searchbox__search" placeholder="Search.." id="myInput" />
        <div id="myDropdown" className="searchbox__options">
            <span className="searchbox__option" >About</span>
            <span className="searchbox__option">Base</span>
            <span className="searchbox__option">Blog</span>
            <span className="searchbox__option">Contact</span>
            <span className="searchbox__option">Custom</span>
            <span className="searchbox__option">Support</span>
            <span className="searchbox__option">Tools</span>
        </div>
</div>
}

export default SearchBox;

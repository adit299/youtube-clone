import React from 'react';

class SearchBar extends React.Component {
    state = { term: '' };

    onInputChange = (event) => {
        // Setting an event handler, so that state is updated when we enter
        // a value into the search bar
        this.setState({ term: event.target.value });
    };

    onFormSubmit = event => {
        event.preventDefault();

        // We make our API request in App.js using the search term saved in 
        // state here
        this.props.onFormSubmit(this.state.term)
    };

    render() {
        return ( 
        <div className="search-bar ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    {/* Note that prior to hooking up a onChange event handler
                    to the text input block, we cannot type terms */}
                    <input 
                        type="text" 
                        value={this.state.term}
                        // Recall that last time, we had the input change event handler inline,
                        // these two statements are equivalent
                        onChange={this.onInputChange} 
                    />
                </div>
            </form>
        </div>
        );
    }
}


export default SearchBar;



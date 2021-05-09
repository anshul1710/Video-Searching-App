import React from 'react';

class SearchBar extends React.Component{
state={searchValue:''};

            onSearchValue = (event) =>
            {
            this.setState({searchValue:event.target.value})
            
            }
            onFormSubmit = (event) =>
            {
                event.preventDefault();
                this.props.onFormSubmit(this.state.searchValue);
            }

            render(){
            return(
                <div className="ui segment search-bar">
                    <form onSubmit={this.onFormSubmit} className="ui form">
                        <div className="field">
                            <label>Video Search</label>
                            <input type="text" value={this.state.searchValue} onChange={this.onSearchValue}></input>
                        </div>
                    </form>
                </div>
            );

                }
            }

export default SearchBar;
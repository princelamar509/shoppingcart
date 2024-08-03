
import React from 'react';
 
function SearchBar({ searchCourse, courseSearchUserFunction }) {
    return (
        <header className="App-header">
            <h1>Freeknik Shopping Cart</h1>

            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search for  Products..."
                    value={searchCourse}
                    onChange={courseSearchUserFunction}
                
                />
            
              
            </div>
   
        </header>
    );
}
 
export default SearchBar;
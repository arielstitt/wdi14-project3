import React, { Component } from 'react';

class HomePage extends Component {

    render() {
      
        return (
            <div>
                Hello from the Home HomePage
                <a href="/users">UserPage</a>
               <form>
                   <div>
                       <input 
                       name=""
                       placeholder="name"/>
                   </div>
                   <div>
                       <input
                        name=""
                        placeholder="image"
                       />
                   </div>
                   <div>
                       <input
                        name=""
                        placeholder="description"
                       />
                   </div>
               </form>

            </div>
        );
    }
}

export default HomePage;
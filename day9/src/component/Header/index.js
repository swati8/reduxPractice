import React, { Component } from 'react';
/*import './header.css';*/

export default class Header extends Component {
    render () {
        const inlineClass = `
        .headerr  {
            background : red
        }`;
		return(

            <div>
               <p style={{backgroundColor:"green"}}>header</p>
                <style>{inlineClass}</style>
                <p className="headerr">header1</p>
               <p style={{backgroundColor:"green"}}>header 2</p>

                header

            </div>
		);
    }
}


import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class LandingPage extends Component{
    render(){
        return(
            
            <div style = {{width: '100%', height: '100%'}}>
                <Grid className ='landing-grid'>
                    <Cell col={12}>
                        <img
                        src = "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-512.png"
                        alt="avatar"
                        className="avatar-img"
                        />

                       <div className="banner-text">
                           <h1>Programmer</h1>
                           <hr/>
                           <p>HTML/CSS | JavaScript | Java | C++ | Angular | React | NodeJS | Github</p>
                           <div className="social-links">
                                
                                {/*Github */}
                               <a href="https://github.com/carninojo15" rel="noopener noreferrer" target="_blank">
                                   <i className="fa fa-github-square" aria-hidden="true"/>
                               </a>

                               {/*LinkedIn */}
                               <a href="https://www.linkedin.com/in/carlos-masson-29130a14a/" rel="noopener noreferrer" target="_blank">
                                   <i className="fa fa-linkedin-square" aria-hidden="true"/>
                               </a>

                           </div>
                        </div> 
                        
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;
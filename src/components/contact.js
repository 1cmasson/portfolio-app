import React, {Component} from 'react';
import {Grid,Cell, List, ListItem, ListItemContent} from 'react-mdl';

class Contact extends Component{
    render(){
        return(
            <div className = "contact-body">
                <Grid className="contact-grid">
                    <Cell col = {6}>
                    <h2>Carlos Masson</h2>
                    <img 
                    src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-512.png"
                    alt = "avatar"
                    style ={{height: "250px"}}
                    />
                    <p style = {{width: '75%', margin: 'auto', paddingTop: '1em', fontSize: "16px"}}>I am a programmer currently studying Computer Science at Florida International University. Specializing in Web Development with over 2 years of experience. I am looking for an entry-level Software Engineering position. </p>

                    </Cell>
                    <Cell col = {6}>
                       <h2>Contact Me</h2> 
                       <hr/>
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Manrope'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true"/>
                                        (305) 781-5123
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Manrope'}}>
                                        <i className="fa fa-envelope-square" aria-hidden="true"/>
                                        carlosmasson96@gmail.com
                                    </ListItemContent>
                                </ListItem>
                                
                                
                            </List>
                        </div>
                        

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;
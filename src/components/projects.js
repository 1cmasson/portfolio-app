import React from 'react';
import { Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';

const Projects = () =>{
    return(
        <div className="category-tabs">
            <Grid>
            <Cell col={12}>
                    <div className="projects-grid">
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            
                            <CardTitle style={{color: 'black', height: '176px', 
                            background:'url(https://skywell.software/wp-content/uploads/2019/04/Angular-8-1024x542.jpg) center/cover'}}>
                                Voting BlockChain
                            </CardTitle>

                            <CardText style ={{height: '75px'}}>
                            This project is a blockchain voting system. 
                            </CardText>

                            <CardActions border>
                                <Button colored href="https://github.com/carninojo15/blockchain">Github</Button>
                                <Button colored href="https://vigilant-leavitt-4133eb.netlify.app/" style ={{position: "absolute",
                                right: "10px"}} >Application</Button>
                            </CardActions> 

                            <CardMenu style ={{color: '#fff'}}>
                                <IconButton name="share"/>
                            </CardMenu>

                        </Card>

                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                        
                        <CardTitle style={{color: 'black', height: '176px', background:'url(https://colorlib.com/wp/wp-content/uploads/sites/2/react-dev-tools-logo.jpg) center/cover'}}>Covid-19 Tracker</CardTitle>
                        
                        <CardText style ={{height: '75px'}}>
                        This application is a Covid-19 tracker that catches data from an API to display a line chart on number of global cases and deaths.
                        </CardText>
                        
                        <CardActions border>
                        <Button colored href="https://github.com/carninojo15/covid-19-tracker">Github</Button>
                        <Button colored href="https://zealous-bhabha-ac12e5.netlify.app/" style ={{position: "absolute",
                        right: "10px"}} >Application</Button>
                        </CardActions> 
                        
                        </Card>                        
                        
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{color: 'black', height: '176px', background:'url(https://colorlib.com/wp/wp-content/uploads/sites/2/react-dev-tools-logo.jpg) center/cover'}}>
                                My Personal Website
                            </CardTitle>

                            <CardText style ={{height: '75px'}}>
                            This application is my own website which is this website. 
                            </CardText>

                            <CardActions border>
                                    <Button colored href="https://github.com/carninojo15/portfolio-app">Github</Button>
                                    
                                    <Button colored href="https://admiring-lumiere-be3c39.netlify.app/" style ={{position: "absolute",
                                    right: "10px"}} >Application</Button>
                            </CardActions> 
                        </Card>
                    </div>
                </Cell>

                <Cell col={12}>
                    <div className="projects-grid">
                        
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            <CardTitle style={{color: 'black', height: '176px', background:'url(https://colorlib.com/wp/wp-content/uploads/sites/2/react-dev-tools-logo.jpg) center/cover'}}>
                                BOLT
                            </CardTitle>

                            <CardText style ={{height: '75px'}}>
                            This application is to organize a list of bays based on it characteristics. 
                            </CardText>

                            <CardActions border>
                                    <Button colored href="https://github.com/carninojo15/bolt">Github</Button>
                                    
                                    <Button colored href="https://goofy-joliot-9dcc70.netlify.app/" style ={{position: "absolute",
                                    right: "10px"}} >Application</Button>
                            </CardActions> 
                        </Card>
                    </div>
                </Cell>
            </Grid>
        </div>
    )
}

    

    
        
 

export default Projects;
import React, {Component} from 'react';
import { Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import ExtraCurriculur from './extracurriculur';
import profile from './assets/ProfilePic.png'



class LandingPage extends Component{
    render(){
        return(
            <div>
            {/*HEADER*/}
            <div style = {{width: '100%', height: '950px'}}>
                <Grid className ='landing-grid'>
                    <Cell col={12}>
                        <img
                        src = {profile}
                        alt="avatar"
                        className="avatar-img"
                        />

                       <div className="banner-text">
                           <h1>Who Am I?</h1>
                           <hr/>
                           <p>My name is Carlos Masson, I am a senior from Florida International University graduating August of 2021 with a bachelors 
                               degree in Computer Science. I have experience in programming and look to advance my knowledge in technology. I aspire to be a systems engineer for the same company I have worked 5 years for, The Home Depot.   
                           </p>
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

            {/* PROJECTS*/}

            <div className="category-tabs">
            <h1 style={{textAlign:'center'}}>Projects</h1>
            <Grid>
            <Cell col={12}>
                    <div className="projects-grid">
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                            
                            <CardTitle style={{color: 'black', height: '176px', 
                            background:'url(https://christianliebel.com/wp-content/uploads/2016/02/Angular2.png) center/cover'}}>
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

                        <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginTop:'20px'}}>
                        
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
                        
                        <Card shadow={5} style={{minWidth: '450', margin: 'auto', marginTop:'20px'}}>
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

        {/*Resume*/}
        <div className="resume-title">
            <h1>Resume</h1>
                <Grid className="grid-background">
                    <Cell col = {4}> 
                    <div style={{
                        textAlign:'center'
                        
                        }}>
                        <img
                        src = {profile}
                        alt="avatar"
                        style={{height: "200px"}}
                        />
                    </div>

                    <h2 style={{paddingTop:'1em'}}>Carlos Masson</h2>
                    <h4>Programmer</h4>
                    <hr style={{borderTop: '3px solid  rgb(4, 78, 44)', width: '100%'}}/>
                    <p> Python | Spring MVC | React | OSINT | OWASP | Burp Suite | Linux Terminal | IntelliJ</p>

                    <hr style={{borderTop: '3px solid  rgb(4, 78, 44)', width: '100%'}}/>
                    <h5>Phone</h5>
                    <p>(305) 781 5123</p>
                    <h5>Email</h5>
                    <p>carlosmasson96@gmail.com</p>

                    <hr style={{borderTop: '3px solid  rgb(4, 78, 44)', width: '100%'}}/>

                    </Cell>
                    
                    <Cell className ="resume-right-col" col = {8}> 
                    <h2>Education</h2>

                    <Education
                    startYear={2015}
                    endYear={2019}
                    schoolName="Miami-Dade College"
                    degree = "Associates in Computer Science"
                    
                    />

                <Education
                    startYear={2019}
                    endYear={"Spring "+ 2021}
                    schoolName="Florida International University"
                    degree = "Bachelors in Computer Science"
                    
                    />

                <hr style={{borderTop: '3px solid  rgb(4, 78, 44)'}}/>    

                <h2>Experience</h2>     
                <Experience
                    startYear={2016}
                    endYear ={"currently working"}
                    company={"The Home Depot"}
                    position={"Merchandising Execution Associate"}
                    jobDescription="Guide customers in choosing items that reflect personal style and preference. Facilitate monthly and quarterly physical inventory counts. Describe merchandise as well as explain the operation of merchandise to customers. Design displays to make store experience interactive and engaging. Successfully complete projects individually and with team members."
                />     

                <hr style={{borderTop: '3px solid  rgb(4, 78, 44)'}}/>

                <h2>ExtraCurricular Activities</h2>
                <ExtraCurriculur description=" Coordinated with class mates to establish a technology club for Miami Dade North Campus."/>  

                <ExtraCurriculur description="  A member of Upsilon Pi Epsilon (UPE), the largest tech organization in Florida International University."/> 

                <ExtraCurriculur description="  Contributed weekly to the Web Development team by developing a COVID-19 tracker."/> 
                
                <ExtraCurriculur description="  Certified as a Business Specialist for taking courses such as Marketing and Business Calculus."/>

                <ExtraCurriculur description="  Participated in Shell Hacks, the largest hackathon in Florida, and worked with a team to create a block chain interface in JavaScript called Votechain. "/>     

                <ExtraCurriculur description="  Created a personal portfolio website to showcase my projects."/>     

                <hr style={{borderTop: '3px solid  rgb(4, 78, 44)'}}/>
                

                    </Cell>
                </Grid>

                
            </div>

        
        
        </div>
        )
    }
}

export default LandingPage;
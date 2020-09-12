import React, {Component} from 'react';
import{Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import ExtraCurriculur from './extracurriculur';

class Resume extends Component{
    render(){
        return(
            <div>
                <Grid>
                    <Cell col = {4}> 
                    <div style={{textAlign:'center'}}>
                        <img
                        src = "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-512.png"
                        alt="avatar"
                        style={{height: "200px"}}
                        />
                    </div>

                    <h2 style={{paddingTop:'1em'}}>Carlos Masson</h2>
                    <h4 style={{color:'grey'}}>Programmer</h4>
                    <hr style={{borderTop: '3px solid  rgb(4, 78, 44)', width: '50%'}}/>
                    <p> HTML/CSS | JavaScript | Java | C++ | Angular | React | NodeJS | Github</p>

                    <hr style={{borderTop: '3px solid  rgb(4, 78, 44)', width: '50%'}}/>
                    <h5>Phone</h5>
                    <p>(305) 781 5123</p>
                    <h5>Email</h5>
                    <p>carlosmasson96@gmail.com</p>

                    <hr style={{borderTop: '3px solid  rgb(4, 78, 44)', width: '50%'}}/>

                    </Cell>
                    
                    <Cell className ="resume-right-col" col = {8}> 
                    <h2>Education</h2>

                    <Education
                    startYear={2015}
                    endYear={2019}
                    schoolName="Miami-Dade College"
                    degree = "Associates in Computer Science"
                    schoolDescription="Participated in Miami Dade Technology Club as a Chief Operations Officer. Was involved with the development of a website for the club. Certified as a Business Specialist for taking courses such as Marketing and Business Calculus."
                    />

                <Education
                    startYear={2019}
                    endYear={"Spring "+ 2021}
                    schoolName="Florida International University"
                    degree = "Bachelors in Computer Science"
                    schoolDescription="A member of Upsilon Pi Epsilon (UPE), the largest tech organization in FIU. Contribute weekly to the Web Development team by making Web Applications using Python and Django. Participated in Shell Hacks, the largest hackathon in Florida, and worked with a team to create an app in JavaScript."
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

                <h2>Extra-Curriculur Activities</h2>
                <ExtraCurriculur
                 startYear={"Spring 2019"}
                 endYear={"Summer 2019"}
                 organization={"Miami-Dade Tech Club (North Campus)"}
                 position={"Chief Operations Officer"}
                 clubDescription="Arranged successful meeting around school hours to assure learning first. Created excellent collaboration skills between my team members and I, both inexperienced and experienced. Increased leadership skills around the school. Oversaw and participated in the team building of the club’s websites.
                "
                
                />  

                <ExtraCurriculur
                 startYear={"Spring " + 2019}
                 endYear={"Spring " + 2020}
                 organization={"Upsilon Pi Epsilon"}
                 position={"Associate Member"}
                 clubDescription=" Participated in creating a website, worked with team members to complete various projects, accurately used time management skills to contribute personal work. Used Django framework and Python language to develop website.
                "
                />      

                <hr style={{borderTop: '3px solid  rgb(4, 78, 44)'}}/>
                

                    </Cell>
                </Grid>

                
            </div>
        )
    }
}

export default Resume;
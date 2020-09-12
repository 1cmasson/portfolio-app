import React from 'react';

import './App.css';
import {Layout, Header,Navigation,Drawer, Content} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';


function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className ="header-color" title={<Link style={{textDecoration:'none',color:'white'}} to="/" >
            Carlos Masson
            </Link>} scroll= {'true'} >
            <Navigation>
                <Link to="/resume" style={{color:"black"}}>Resume</Link>
                <Link to="/projects" style={{color:"black"}}>Projects</Link>
                <Link to="/contact" style={{color:"black"}}>Contact</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration:'none',color:"black"}} to="/" >
            Carlos Masson
            </Link>} scroll= {'true'} >
            <Navigation>
                <Link style={{color:"black"}} to="/resume" >Resume</Link>
                <Link style={{color:"black"}}to="/projects">Projects</Link>
                <Link style={{color:"black"}} to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;

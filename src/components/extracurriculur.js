import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class ExtraCurriculur extends Component{
    render(){
        return(
        <Grid>
            <Cell col={4}>
                <p>{this.props.startYear} - {this.props.endYear}</p>
            </Cell>
            <Cell col={8}>
            <h4 style={{marginTop:'0px'}}>{this.props.organization}</h4>
            <h5 style={{marginTop:'0px', fontStyle: 'italic'}}>{this.props.position}</h5>
            <p>{this.props.clubDescription}</p>
            </Cell>
        </Grid>
        )
    }
}

export default ExtraCurriculur;
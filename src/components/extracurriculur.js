import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class ExtraCurriculur extends Component{
    render(){
        let bullet = String.fromCharCode(8226);

        return(
        
        <Grid>
            <Cell col={12} style={{textAlign:'left', marginTop:'-50px'}}>
            <h6>{bullet}{this.props.description}</h6>
            </Cell>
        </Grid>
        )
    }
}

export default ExtraCurriculur;
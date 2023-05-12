import React  from "react";
import Button from '@mui/material/Button';
export class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
    }
  
    handleClick=()=> {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn   
      }));
    }
  
    render() {
      return (
        <div className="ButtonDiv">
        <Button variant="contained" className="Button" onClick={this.handleClick}>
          {this.state.isToggleOn ? 'Handling Event ON' : 'Handling Event OFF'}
        </Button>
        </div>
      );
    }
  }

  
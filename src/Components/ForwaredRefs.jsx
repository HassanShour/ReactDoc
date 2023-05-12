import React,{Component} from 'react'
import '../index.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

class FRParent extends Component {

    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef()
    }

    handleClick = () => {
        this.inputRef.current.focus();
    }

  render() {
    return (
      <div className='Forms'>
        <FRInput ref={this.inputRef}/> <br/>
        <Button variant="contained" onClick={this.handleClick}>Focus Input</Button>
      </div>
    )
  }
}



const FRInput = React.forwardRef((props , ref) => {
    return (
      <div className='Forms'>
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    />
          <hr/>
          <input  type='text' ref={ref}/>
        
      </div>
    )
  }) 

export default FRParent;



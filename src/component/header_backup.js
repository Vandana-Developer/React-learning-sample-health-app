import React,{Component} from 'react';

class Header extends Component {

    render(){   
        const myStyle={
            header:{
                backgroundColor:'green'
            },
            logo:{
                textAlign:'center',
                fontSize:'20px',
                color:'white'
            }
        }   
        return(
            <>
                <header style={myStyle.header}>
                    <div style={myStyle.logo}>React App</div>
                    <center>
                        <input/>
                        <div style={{color:'white',fontSize:'25px'}}>User Text Here</div>
                    </center>
                </header>
                <hr/>
            </>
        )
    }
}


export default Header;


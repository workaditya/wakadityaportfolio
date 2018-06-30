import React from 'react';
import ReactDOM from 'react-dom';
import logo from 'C:/Users/wakad/Desktop/Project/portfolio/src/resources/logo1.png';
import {Link} from 'react-router-dom';
import {Mynavbar} from '../components/navig.jsx';
import {Section} from '../components/section.jsx';
import Background from '../resources/awpaper.jpg';
import {StyleSheet, css} from 'aphrodite'; 
import {Grid, Col, Row} from 'react-bootstrap';
import FadeIn from 'react-fade-in';
import Typist from 'react-typist';
import {Worktile} from './work/worktile.jsx';
import {Portfoot} from '../components/footer.jsx';


var sectionStyle = {
    backgroundSize: 'cover',
  backgroundImage: `url(${Background})`,
    MozBoxShadow: 'inset 0 0 10px #000000',
    WebkitBoxShadow: 'inset 0 0 10px #000000',
    boxShadow: 'inset 0 0 10px #000000'
};



export class Work extends React.Component {
	render() {
		return (
            <div>
            <div className = {css(styles.header)} bsClass='fluid-container'>
                     <Mynavbar index = '3'/>
              
                <Grid bsClass = 'fluid-container'>
                    <Row className = {css(styles.row1)}>
                        <Col xs={12} sm={12} md={12} lg={5} className = {css(styles.leftcol)}>
                
                
                            
                <div style={ sectionStyle } className = {css(styles.sectionstyle)} bsClass = "fluid-container">
                    <FadeIn delay={110}>
                    <div className={css(styles.name)}>Aditya Rajesh Wakade<br/> </div> <div><font className={css(styles.nameone)}>Design</font> <font className={css(styles.nametwo)}>Build</font>   <font className={css(styles.namethree)}>Scale</font>  </div>
                </FadeIn>
                    
                        </div>
                            
                            </Col>
                        <Col xs = {12} sm={12} md={12} lg={7} className = {css(styles.titleblock)}>
                            <div className = {css(styles.title)}> 
                                 Bridging the gap between Design and Engineering.
                            </div>
                    <Typist avgTypingDelay = {0} stdTypingDelay = {1} cursor = {{show: false}}>
                    <font className = {css(styles.block1)}>textttxttxtextrtrtrtrtrtrtt </font> <font className = {css(styles.block2)}>ttettttrtrtrttxtt </font> <font className = {css(styles.block3)}>txtxxxxxtx </font>
                            </Typist>
                            <p className={css(styles.subtitle)}> Hello! I am a <b>UX Designer/ Engineer</b>, passionate about delivering experiences which are delightful to use, and to build. I love to translate inferences from qualitative and quantitative data analyses, into stylized visual components. <br/>Welcome to my portfolio :)</p>
                    </Col>
                            </Row>
                         
                            
                    <Row className = {css(styles.row2)}>
                        
                           <div className = {css(styles.worktitle)}>
                            Know more about my work
                            </div>
                            
                    </Row>
            <Row>
                    <Worktile/>
                    </Row>
                
                     </Grid>
            
                    
            </div>
                <div>
            
               <Portfoot/>
                </div>
            </div>
        );
	}
}


const styles = StyleSheet.create({
    header:{
        paddingTop:'1.7rem'
    },
    name: {
        fontSize: '4rem',
        backgroundColor: '#1c2329',
        color: '#ffffff',
        opacity: '0.85',
        textAlign: 'center',
        paddingBottom: '0.3rem',
        '@media only screen and (max-width: 1080px)':{
            fontSize: '7rem'
        }
    },
    nameone:{
        margin: '0',
        fontSize: '1.75rem',
        color: '#1ed2f4',
        padding: '0.3rem',
        opacity: '0.65',
        fontWeight: 'bold',
        paddingLeft: '9rem',
        float: 'left',
        '@media only screen and (max-width: 1080px)':{
            fontSize: '3rem',
            paddingLeft: '17rem'
        }
    },
    nametwo:{
        margin: '0',
        fontSize: '1.75rem',
        color: '#eafc40',
        fontWeight: 'bold',
        opacity: '0.7',
        padding: '0.3rem',
        float: 'left',
        '@media only screen and (max-width: 1080px)':{
            fontSize: '3rem'
        }
    },
    namethree:{
        margin: '0',
        fontSize: '1.75rem',
        color: '#fd4445',
        fontWeight: 'bold',
        opacity: '0.7',
        padding: '0.3rem',
        float: 'left',
        '@media only screen and (max-width: 1080px)':{
            fontSize: '3rem'
        }
    },
    row1: {
        margin: '0',
        padding: '0',
        marginTop: '6rem',
        '@media only screen and (max-width:1080px)':{
            marginTop: '3rem',
            padding: '0',
            width: '100%'
        }
    },
    row2: {
        margin: '0',
        padding: '0',
        marginTop: '6rem',
        '@media only screen and (max-width:1080px)':{
            marginTop: '3rem',
            width: '100%'
        }
        
        
    },
    leftcol:{
        margin: '0',
        padding: '0'
    },
    sectionstyle: {
    '@media only screen and (max-width: 1080px)':{
      width : '100%'  
    },
    paddingTop: '6%',
    paddingLeft: '40%',
    paddingRight: '0%',
    paddingBottom: '50%'       
        
    },
    block1: {
     backgroundColor: '#1ed2f4',
     color: '#1ed2f4',
    margin: '0',
     fontSize: '1rem',
        '@media only screen and (max-width: 1300px)': {
            paddingLeft: '5rem'
        },
        lineHeight: '0'
    },
    block2: {
     backgroundColor: '#eafc40',
    color: '#eafc40',
        margin: '0',
        fontSize: '1rem',
    '@media only screen and (max-width: 1300px)': {
            paddingLeft: '3rem'
        },
          lineHeight: '0'
    },
    block3: {
     backgroundColor: '#fd4445',
    color: '#fd4445',
        margin: '0',
        fontSize: '1rem',
    '@media only screen and (max-width: 1300px)': {
            paddingLeft: '2rem'
        },
          lineHeight: '0'
    },
    title: {
        paddingTop: '0',
        marginTop:'0',
        backgroundColor: '#ffffff',
        fontSize: '5rem'
    },
    titleblock: {
        paddingTop: '0',
        marginTop:'0',
        paddingLeft: '6rem',
        paddingRight: '6rem',
        '@media only screen and (max-width: 1080px)':{
            paddingTop: '8rem'
        }
    },
    subtitle: {
        paddingTop: '4rem',
        fontSize: '2.5rem',
        '@media only screen and (max-width: 1080px)': {
          fontSize: '3.5rem'  
        },
        textAlign: 'justify'
    },
    worktitle: {
        textAlign: 'center',
        paddingTop: '6rem',
        '@media only screen and (max-width: 1080px)':{
          paddingTop: '8rem',
            fontSize: '6rem'
        },
        fontSize: '4.5rem'
    }
        
});

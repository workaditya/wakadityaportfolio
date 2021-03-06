import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import {Mynavbar} from '../components/navig.jsx';
import {StyleSheet, css} from 'aphrodite';
import {Portfoot} from '../components/footer.jsx';
import {Grid, Row, Col} from 'react-bootstrap';



export class Project extends React.Component {
	render() { 
		return ( 
      
            
            <Grid>
  <Row className="show-grid">
    <Col xs={12} md={8}>
      <code> test</code>
    </Col>
    <Col xs={6} md={4}>
      <code>&lt;{'Col xs={6} md={4}'} /">">">">">">">">">">&gt;</code>
    </Col>
  </Row>

  <Row className="show-grid">
    <Col xs={6} md={4}>
      <code>&lt;{'Col xs={6} md={4}'} /">">">">">">">">">">&gt;</code>
    </Col>
    <Col xs={6} md={4}>
      <code>&lt;{'Col xs={6} md={4}'} /">">">">">">">">">">&gt;</code>
    </Col>
    <Col xsHidden md={4}>
      <code>&lt;{'Col xsHidden md={4}'} /">">">">">">">">">">&gt;</code>
    </Col>
  </Row>

  <Row className="show-grid">
    <Col xs={6} xsOffset={6}>
      <code>&lt;{'Col xs={6} xsOffset={6}'} /">">">">">">">">">">&gt;</code>
    </Col>
  </Row>

  <Row className="show-grid">
    <Col md={6} mdPush={6}>
      <code>&lt;{'Col md={6} mdPush={6}'} /">">">">">">">">">">&gt;</code>
    </Col>
    <Col md={6} mdPull={6}>
      <code>&lt;{'Col md={6} mdPull={6}'} /">">">">">">">">">">&gt;</code>
    </Col>
  </Row>
</Grid>
          
            
        );
	}
}

const styles = StyleSheet.create({
    imgc: {
        width: 'auto',
        maxHeight: '100%'
    }
});
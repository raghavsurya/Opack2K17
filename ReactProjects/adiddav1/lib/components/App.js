import React from 'react'
import ReactDOM from 'react-dom';
import DataApi from '../DataApi';
import  data  from '../testData';
import PlayerList from './PlayerList';
import { Jumbotron, Button } from 'reactstrap';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './styles/styles.css';



const api = new DataApi(data);

class App extends React.Component {
  constructor(){
    super();
    this.toggle =  this.toggle.bind(this);
    this.state = {
      players: api.getPlayers(),
      coaches: api.getCoaches(),
      isOpen: false
    };
  }
toggle(){
  this.setState({
    isOpen: !this.state.isOpen
  });


  }
  render(){
    return (
      <div>
      <Navbar color="success" className="navbar-dark navbar-expand-sm" light toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand color="faded" href="/">Adidda Sports Club</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      <div className="container-fluid">
      <PlayerList
      players = {this.state.players}
      coaches = {this.state.coaches} />
      </div>
      </div>
    );
  }
}

export default App;

import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import Home from './components/Home';
import Projects from './components/Projects';
import Team from './components/Team';
import Contact from './components/Contact';

import { ThemeProvider } from 'styled-components'
import { TabNavigation, Tab, Pane, TextInput, Combobox, Textarea } from 'evergreen-ui';
import './App.css';
import theme from './theme'
import logo from './assets/logo_tornalti.svg';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tabs : [
        {name: 'Projects', location: '/projects'},
        {name: 'Team', location: '/team'}, 
        {name: 'Contact', location: '/contact'}
      ],
      selectedIndex: -1
    }
  }

  componentDidMount() {

  }

  render() { 
    return ( 
      <ThemeProvider theme={theme}>
        <div className="App">
          {/* <GradientBox background="radial-gradient(circle at 25% 25%, #ffe200 0%, #ffe200 10%, transparent 10%)"> */}
            {/* <GradientBox background="linear-gradient(150deg, transparent 49%, #008ab4 49%)">
              <GradientBox background="linear-gradient(135deg, transparent 47%, #39a4c5ad 47%)">
                
                <h1>Tornaltí Solar</h1>
              </GradientBox>
            </GradientBox> */}
          {/* </GradientBox> */}
          <Router>
          <img src={logo} alt="logo" height={80}/>
          {/* <TabNavigation marginBottom={16} flexBasis={240} marginRight={24}>
            {this.state.tabs.map((tab, index) => (
              <Tab
                key={tab.name}
                id={tab.name}
                is="a"
                onSelect={() => this.goToPage(index)}
                isSelected={index === this.state.selectedIndex}
                aria-controls={`panel-${tab.name}`}
                >
                  {tab.name}
                </Tab>
              ))}
            </TabNavigation> */}
            <Pane>
              {/* <Switch>
                <Route path="/projects">
                  <Projects />
                </Route>
                <Route path="/team">
                  <Team />
                </Route>
                <Route path="/contact">
                  <Contact />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch> */}
              {
                //TODO: Cover image + brief company/project description
              }
              <p>
              Tornaltí es una empresa de energías renovables que se constituyó el 27 de noviembre de 2018, y está formada por varios profesionales del sector.
A día de hoy, la empresa tiene en tramitación tres proyectos fotovoltaicos en la isla de Menorca correspondientes a 2 MWp/cu, cuyo objetivo es contribuir en la aceleración energética de la isla, dada la escasa implantación de este tipo de tecnologías en este territorio.
              </p>
            </Pane>
            <Pane>
              {
                // TODO: create contact form layout
                // Include `name`, `mail` and `message`
                // Important to have also a CAPTCHA included
              }
              <TextInput placeholder="Nombre" />
              <TextInput placeholder="Correo" />
              <Textarea name="message" placeholder="🖋 Escribanos su mensaje" />
            </Pane>
          </Router>
        </div>
      </ThemeProvider>
     );
  }

  goToPage(index) {
    const location = {
      pathname: '/somewhere',
      state: { fromDashboard: true }
    }

    this.setState({ selectedIndex: index });
    this.props.history.push(location)
  }
}
 
export default App;

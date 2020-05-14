import React, {Component} from 'react';

import Navbar from './components/Navbar';
import Jumbo from './components/Jumbo';
import Content0 from './components/Content0';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './app.less';

import {
  NavbarDataSource,
  JumboDataSource,
  Content0DataSource,
  ContactDataSource,
  FooterDataSource,
} from './data.source';

const { location } = window;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: !location.port,
    };
  }

  componentDidMount() {
    
    if (location.port) {
      setTimeout(() => {
        this.setState({
          show: true,
        });
      }, 500);
    }
  }

  render() {
    const children = [
      <Navbar
        id="Navbars_0"
        key="Navbars_0"
        dataSource={NavbarDataSource}
      />,
      <Jumbo
        id="Jumbo_0"
        key="Jumbo_0"
        dataSource={JumboDataSource}
      />,
      <Content0
        id="Content0_0"
        key="Content0_0"
        dataSource={Content0DataSource}
      />,
      <Contact
        id="Contact"
        key="Contact"
        dataSource={ContactDataSource}
      />,
      <Footer
        id="Footer0_0"
        key="Footer0_0"
        dataSource={FooterDataSource}
      />,
    ];
    return (  
      <div
        className="templates-wrapper"
        ref={(d) => { this.dom = d; }}
      >
        {/* 如果不是 dva 2.0 替换成 {children} start */}
        {this.state.show && children}
        {/* 如果不是 dva 2.0 替换成 {children} end */}
      </div>
    );
  }
}
 
export default App;

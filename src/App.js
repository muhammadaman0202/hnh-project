import React, { Component } from 'react'
import Footer from '../src/component/Footer'
import Home from '../src/pages/Home'
import Web from '../src/pages/Web'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Loader from './component/Loader';
import Navbar from './component/Navbar'
import AppDev from './pages/AppDev';
import WebDev from './pages/WebDev';
import Hosting from './pages/Hosting';
import ContentWriting from './pages/ContentWriting';
import Account from './pages/Account';
import BlockChain from './pages/BlockChain';
import LogoDesign from './pages/LogoDesign';
import Digital from './pages/Digital';
import Effective from './pages/Effective';
import DDev from './pages/DDev';
import Seo from './pages/Seo';
import Vfx from './pages/Vfx';
import Platform from './pages/Platform';
import Solution from './pages/Solution';
import Casestudy from './pages/Casestudy';
import Portfolio from './pages/Portfolio';
import Clienttele from './pages/Clienttele';
export default class App extends Component {
  render() {
    return (
      <>
      <Router>
      <Loader/>
      <Navbar/>
      </Router>
    <Router>
      <Switch>
        <main className="animsition-overlay" data-animsition-overlay="true">
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/web-design">
            <Web/>
          </Route>
          <Route exact path="/app-development">
            <AppDev></AppDev>
          </Route>
          <Route exact path="/web-development">
            <WebDev></WebDev>
          </Route>
          <Route exact path="/hosting">
            <Hosting></Hosting>
          </Route>
          <Route exact path="/contentwriting">
            <ContentWriting></ContentWriting>
          </Route>
          <Route exact path="/accounting">
            <Account></Account>
          </Route>
          <Route exact path="/blockchaindevelopment">
            <BlockChain></BlockChain>
          </Route>
          <Route exact path="/logodesigning">
            <LogoDesign></LogoDesign>
          </Route>
          <Route exact path="/digitalmarketing">
            <Digital></Digital>
          </Route>
          <Route exact path="/effectivesolution">
            <Effective></Effective>
          </Route>
          <Route exact path="/digital-development">
            <DDev></DDev>
          </Route>
          <Route exact path="/seo">
            <Seo></Seo>
          </Route>
          <Route exact path="/vfx">
            <Vfx></Vfx>
          </Route>
          <Route exact path="/platform">
            <Platform></Platform>
          </Route>
          <Route exact path="/solutions">
            <Solution></Solution>
          </Route>
          <Route exact path="/case-study">
            <Casestudy></Casestudy>
          </Route>
          <Route exact path="/portfolio">
            <Portfolio></Portfolio>
          </Route>
          <Route exact path="/clienttele">
            <Clienttele></Clienttele>
          </Route>
        </main>
        
      </Switch>
      <Footer/>
    </Router>
      </>
    )
  }
}

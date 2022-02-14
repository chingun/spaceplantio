import React, { Component } from 'react';
import layer1 from './brain/layer1.png';
import layer2 from './brain/layer2.png';
import layer3 from './brain/layer3.png';
import layer4 from './brain/layer4.png';
import heart from './circuit/retroheart.png';
import circuit from './circuit/retroboardclean.png';
import kick from './kickstarter/kicklogo.png';
import beacon from './beacon/beacon.png';
import beacon_vert from './beacon/beacon_vert.png';
import logo from './logo/AppLogo256.png';
import { AiFillGithub, AiFillInstagram, AiFillMail } from "react-icons/ai";


class Me extends Component {
    constructor(props){
        super(props);

        this.state = {
            location: 'about', // can be ABOUT || EMBEDDED || COMPSCI || ML
            items: [],
            width: 0, 
            height: 0
        }

        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, 
                        height: window.innerHeight });
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }
    
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
      
    about(){
        return(
            <div className="main_body">
                <p> 
                    Space Plant aims to accelerate terraforming of terrestrial planets through botany innovations. 
                </p>
                <p style={{"margin-left": "auto", "margin-right": "auto"}}> 
                    If you are interested in supporting us, check out our
                    <a href="https://www.kickstarter.com/">  <img src={kick} width="130"/></a>
                {/* <a href="kickstarter.com" src={kick} style={{"width": "200px"}}/> */}
                </p>
                {/* <p> 
                    Space Plant gamifies plant care, you can use Space Plant's IoT sensor that is inserted 
                    into the plant that sends plant health analysis to 
                    the user’s phone and notifies with plant’s health status.
                </p> */}
                {/* <p className="footnotes">
                i like foreign films, history museums, books, photography, and udon, which i used to make at Yume <br/> <br/>
                [63% ATL] - [4% SH] - [23% LA] - [5% BOS] - [5% SF]
                </p> */}
            </div>
        );
    }

    app(){ 
        if (this.state.location !== "app"){
            return(<></>)
        }
          return(
            <p className="main_body">
                We constantly improve our app based on user requests. Currently we only support iOS [plans to support Android based on demand].
            </p>
        );
    }
      
    ai(){
        if (this.state.location !== "ai"){
            return(<></>)
        }
        return(
            <p className="main_body">
                We use cutting edge deep neural networks [Transformer + CNN] to ensure the best possible results. We estimate that in 94% of cases, we offer the right answer.
            </p>
        );
    }

    sensor(){
        if (this.state.location !== "sensor"){
            return(<></>) 
        }
        if (this.state.width > 1000){
            return( 
                <p style={{"margin-left": "auto", "margin-right": "auto"}}> 
                    <img src={beacon} width={this.state.width * 0.8}/>
                </p> 
            );
        } else if (this.state.width > 800){
            return( 
                <p style={{"margin-left": "auto", "margin-right": "auto"}}> 
                    <img src={beacon} width={this.state.width * 0.95}/>
                </p> 
            );
        } else {
            return(  
                <img src={beacon_vert} width={this.state.width}/> 
            );
        }
    }

    bottom_links(){
        return(
        <div className="footnotes-icons">
            <AiFillGithub href="https://github.com/chingun"/>
            <AiFillInstagram href="https://www.instagram.com/chingunkh"/>
            <AiFillMail href="mailto:chingun@umich.edu"/>
        </div>);

    }

    render(){
        
        return(
        <div className="main-container" style={this.state.location === "sensor" ? {height: "100%", backgroundColor: "black"}: {backgroundColor: "white"}}>
            <div className="navbar">
                <div className="navbar-image-container"><img className="navbar-image" src={logo}/></div>
                <h1><a className="h1-logo"  style={this.state.location === "sensor" ? {color: "white"}:{}} onClick={() => {this.setState({location: 'about'})}}>space plant</a></h1>
                <div className="navbar-links">
                    <a onClick={() => {this.setState({location: 'ai'})}}>ai</a>
                    <a onClick={() => {this.setState({location: 'app'})}}>app</a>
                    <a onClick={() => {this.setState({location: 'sensor'})}}>sensor</a>
                </div>
            </div>
            {this.state.location === "app" ? this.app() : this.state.location === "ai" ? this.ai() : this.state.location === "sensor" ? this.sensor() : this.about()}
            <br/>
            <p className="footnotes">
            © All Rights Reserved by SpacePlant
            </p>
        </div>)
    }
}

export default Me;
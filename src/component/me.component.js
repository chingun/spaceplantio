import React, { Component } from 'react';
import layer1 from './brain/layer1.png';
import layer2 from './brain/layer2.png';
import layer3 from './brain/layer3.png';
import layer4 from './brain/layer4.png';
import heart from './circuit/retroheart.png';
import circuit from './circuit/retroboardclean.png';
import kick from './kickstarter/kicklogo.png';
import beacon from './beacon/beacon.png';
import { AiFillGithub, AiFillInstagram, AiFillMail } from "react-icons/ai";


class Me extends Component {
    constructor(props){
        super(props);

        this.state = {
            location: 'about', // can be ABOUT || EMBEDDED || COMPSCI || ML
            items: []
        }
    }

    about(){
        return(
            <div className="body">
                <p> 
                    Space Plant aims to accelerate terraforming of terrestrial planets through botany innovations. 
                </p>
                <p style={{"margin-left": "auto", "margin-right": "auto"}}> 
                    If you are interested in supporting us you can on 
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
            <div className="body">
                <p> 
                We constantly improve our app based on user requests. Currently we only support iOS [plans to support Android based on demand].
                </p>
            </div>
        );
    }
      
    ai(){
        if (this.state.location !== "ai"){
            return(<></>)
        }
        return(
            <div className="body">
                <p> 
                We use cutting edge deep neural networks [Transformer + CNN] to ensure the best possible results. We estimate that in 94% of cases, we offer the right answer.
                </p>
            </div>
        );
    }

    sensor(){
        if (this.state.location !== "sensor"){
            return(<></>)
        }
        return(
            // <div className="body">
            <p style={{"margin-left": "auto", "margin-right": "auto"}}> 
                <img src={beacon} width="1000"/>
            </p>
            // </div>
        );
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
        <div className="main-container" style={this.state.location === "sensor" ? {backgroundColor: "black"}: {backgroundColor: "white"}}>
            <div className="navbar">
                <h1>  
                    <a className="h1-logo" style={this.state.location === "sensor" ? {color: "white"}:{}} onClick={() => {this.setState({location: 'about'})}}> space plant </a>
                </h1>
                <p className="navbar-links">
                    <a onClick={() => {this.setState({location: 'ai'})}}> ai </a>
                    <a onClick={() => {this.setState({location: 'app'})}}> app </a>
                    <a onClick={() => {this.setState({location: 'sensor'})}}> sensor </a>
                    {/* <a href="mailto:chingun@umich.edu"> email </a>
                    <a href="https://github.com/chingun"> git </a> */}
                </p>
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
import React from 'react'
import { connect } from 'react-redux'
import Loader from 'react-loader-spinner'

import { fetchHomer } from '../actions'

import styled from 'styled-components'

const MainDiv = styled.div`
    width: 75%;
    border: 3px solid gold;
    border-radius: 5px;
    box-shadow: -15px 15px 15px #9883ec;
    margin: auto;
    margin-top: 10%;
    margin-bottom: 10%;
`;

const Header = styled.h1`
    color: crimson;
    text-shadow: -3px 3px 3px black;
    padding-top: 2px;
`;

const Button = styled.button`
    width: 35%;
    background-color: darkblue;
    border-radius: 10px;
    box-shadow: -5px 5px 5px grey;
    font-size: 1.5rem;
    color: white;
    margin-bottom: 5%;
    padding: 1%;
    outline: none;
`;

const Homer = props => {
    return (
        <MainDiv>
            <Header>Classic Homer Gif</Header>
            <Button onClick={props.fetchHomer}>D'oh!</Button>
            <div>
                {props.gif.map((item, index) => (
                    index === (Math.floor(Math.random() * 15) + 1) &&
                    <div key={index}>
                        <img src={item.max2mbGif} />
                    </div>    
                ))}
            </div>
            {props.isLoading ? (
                <Loader
                type="Puff"
                color="#00BFFF"
                height={60}
                width={60}
                timeout={3000} //3 secs
             />)
            : (
                <></>
            )} 
        </MainDiv>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        error: state.error,
        gif: state.gif
    }
}

export default connect(
    mapStateToProps,
    { fetchHomer}
    )(Homer);
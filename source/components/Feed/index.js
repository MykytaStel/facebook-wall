import React, { Component } from 'react';
import Composer from "../../components/Composer/";
import Post from "../../components/Post/";
import Styles from './styles.m.css';
import StatusBar from "../StatusBar";

export default class Feed extends Component {
    render () {
        const {
            currentUserFirstName,
            avatar } = this.props;


        return (
            <section className = { Styles.feed }>
                <StatusBar { ...this.props } />
                <Composer
                    avatar = { avatar }
                    currentUserFirstName = {
                        currentUserFirstName }
                />
                <Post { ...this.props } />
            </section>
        );
    }
}
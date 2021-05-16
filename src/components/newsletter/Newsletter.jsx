import './Newsletter.css';
import StartUp from '../../assets/startup.png'
import React, { Component } from 'react'
import axios from 'axios'


export class Newsletter extends Component {
    constructor(props){
        super(props)

        this.state = {
            user_email: ''
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios.post('https://betalist-backend-api.herokuapp.com/newsletters', this.state)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            })
    }
    render() {
        const {user_email} = this.state
        return (
            <section class="content-wrapper subscription-wrapper">
                <div class="newsletterPromo" style={{backgroundColor: 'transparent'}}>
                    <div style={{backgroundColor: 'transparent'}}>
                        <h1 style={{backgroundColor: 'transparent'}}>Don't miss out on the next big thing.</h1>
                        <h2 style={{backgroundColor: 'transparent'}}>Receive a daily digest of the newest startups</h2>
                    <form class="simple_form new_newsletter_subscriber" id="new_newsletter_subscriber" novalidate="novalidate" action="/newsletter" onSubmit={this.submitHandler} accept-charset="UTF-8" method="post">
                        <input type="hidden" name="authenticity_token" value="mVA0voB8896M2s2hEPfI4WBghcB4+/R+MY/rSkHxT7WSKzHi3PmIaDtXqRW5Qs8pny+OpvXf6oZuYa0JGwtogA==" />
                            <div class="input email required newsletter_subscriber_email">
                                <label class="email required" for="newsletter_subscriber_email"><abbr title="required">*</abbr> Email</label>
                                <input class="string email required" required="required" aria-required="true" placeholder="Your email address" type="email" name="user_email" id="newsletter_subscriber_email" onChange = {this.changeHandler}/>
                            </div>
                        <input type="submit" name="commit" value="Get early access" data-disable-with="Get early access" />
                    </form>
                        <p>Great content, no spam, easy unsubscribe</p>
                    </div>
                    <div>
                        <p class="previous" style={{backgroundColor: 'transparent'}}>Some of the startups we previously wrote about before they launched.</p>
                        <img src={StartUp} style={{backgroundColor: 'transparent'}} />
                    </div>
                </div>
            </section>
        )
    }
}

export default Newsletter



//https://betalist-backend-api.herokuapp.com/newsletters
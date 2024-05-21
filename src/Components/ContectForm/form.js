import React, { Component, createRef } from "react";
import emailjs from '@emailjs/browser';

import './form.css';

class FormContact extends Component {
    form = createRef();
    state = {
        isSubmitted: false,
    };

    sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_hcl27ox', 'template_d5sn5o9', this.form.current, 'mjtmqbpm1zSt3WMk5')
            .then((result) => {
                console.log(result.text);
                console.log("Message sent");
                e.target.reset();
                this.setState({ isSubmitted: true });
                alert("Email Sent!");
            }, (error) => {
                console.log(error.text);
            });
    };

    render() {
        return (
            <div className="container">
                <div className="content">
                    <div className="right-side">
                        <div className="topic-text">Send us a message</div>
                        <p>If you have any work from me or any types of queries related to my tutorial, you can send me a message from here. It's my pleasure to help you.</p>
                        {this.state.isSubmitted ? (
                            <p>Thank you! Your message has been sent.</p>
                        ) : (
                            <form ref={this.form} onSubmit={this.sendEmail}>
                                <div className="input-box">
                                    <input type="text" name="user_name" placeholder="Enter your name" />
                                </div>
                                <div className="input-box">
                                    <input type="text" name="user_email" placeholder="Enter your email" />
                                </div>
                                <div className="input-box">
                                    <input type="text" name="message" placeholder="Enter your Message" />
                                </div>
                                <div className="button">
                                    <input type="submit" value="Send" />
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default FormContact;

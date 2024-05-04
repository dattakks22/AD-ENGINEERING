import React from "react"

import './form.css'


const form = () => {
    return (



        <div className="container">
            <div className="content">
                <div className="right-side">
                    <div className="topic-text">Send us a message</div>
                    <p>If you have any work from me or any types of quries related to my tutorial, you can send me message from here. It's my pleasure to help you.</p>
                    <form action="#">
                        <div className="input-box">
                            <input type="text" placeholder="Enter your name" />
                        </div>
                        <div className="input-box">
                            <input type="text" placeholder="Enter your email" />
                        </div>

                        <div className="button">
                            <input type="button" value="Send Now" />
                        </div>
                    </form>


                </div>

            </div>

            

        </div>

    )
}


export default form;
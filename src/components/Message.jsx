import React, { useState } from 'react';

export default function Message() {
    return(
        <div className="flex-column message-container">
            <h1>Message</h1>
            <div>Usually respond within 48 hours.</div>
            <div>Please, don't forget to include your email.</div>
            <form>
                <input placeholder="Your name"></input>
                <input placeholder="Your message"></input>
                <button>Send Message</button>
            </form>
        </div>
    )
}
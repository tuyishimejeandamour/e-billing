import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

export default function SignInPage() {
    return (
        <div className="text-center m-5-auto">
            <h2>gura umuriri</h2>
            <form action="/home">
                <p>
                    <label>nimero yawe</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>amafaranga</label>
                    <Link to="/forget-password"><label className="right-label">reba ibiciro</label></Link>
                    <br/>
                    <input type="password" name="password" required />
                </p>
                <p>
                    <button id="sub_btn" type="submit">gura</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">reba ayo usigaranye</Link>.</p>
                <p><Link to="/">kwitangiriro</Link>.</p>
            </footer>
        </div>
    )
}

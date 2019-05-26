import React from 'react'
import {Link} from "react-router-dom";

function Contribute() {
    return (
        <div style={{alignContent:"center",marginTop:"15px"}}>
            <br></br><h2>Project Files and Contribute to Project</h2><br></br>
            <p>
                You can download full project from this <a href="https://github.com/zumrudu-anka/FirstStepToReact">GitHub page.</a>
                <br></br>Also, you can contribute to this project.
            </p>
            
            <Link to="/">Go to Homepage</Link>
            <br></br>

        </div>
    )
}
export default Contribute;
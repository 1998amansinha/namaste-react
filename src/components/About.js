import User from "./User"
import UserClass from "./UserClass"

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <h3>This is our about page</h3>
            <div>
                <User name={"Aman Sinha (Function)"}/>
                <UserClass name={"Aman Sinha (class)"}/>
            </div>
        </div>
    )
}

export default About
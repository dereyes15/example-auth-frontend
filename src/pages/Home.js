import React, {Component} from 'react'

import Button from '../components/RegisterButton'

class Home extends Component {

    render() {
        return(
            <div>
                <Button />

                <h1> Welcome to the most exciting website ever! </h1>
                <h5> You need to register though... But that is no big deal! Just give us your SSN and Passport ID and a million dollas (holla holla...)</h5>
            </div>
        )
    }
}

export default Home

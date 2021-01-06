import React from 'react'


export default class App extends React.Component {

    state ={
        api: []
    }

    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(res => res.json())
        .then(data => {
            this.setState({
                api: data.people
            })
        })
    }


    render(){
        console.log('api', this.state.api)
        return(
            <div>API</div>
        )

    }
}
import React from 'react';

class UserClass extends React.Component{
    constructor(props){
        super(props);
        console.log(props);

        this.state = {
           phoneNumber1 : 7406073040,
           phoneNumber2 : 9731751792,
           count : 0,
        userInfo:{
            name: "Dummy",
            location:"Default"
        }
        };

    }
   async componentDidMount(){
        //Api Call
     const data = await fetch("https://api.github.com/users/dasikasirishakoulini");
     const json = await data.json();

     this.setState({
        userInfo:json
     })

    }

    componentDidUpdate(){
        console.log("component did update is called after the mounting n update cycles are called");
    }

    componentWillUnmount(){
        console.log("this methos is called when the component disappear from html like when other page is clicked")
    }

    render() {
        const {name} = this.props;
        const {phoneNumber1 ,phoneNumber2,count,userInfo} = this.state;
      
        return (
        <div className = "user-card">
            <h2>Name: {name}</h2>
            <h3>Bangalore</h3>
            <h4>Contact: Madhuphassan@gmail.com</h4>
            <h4>Mobile :{phoneNumber1},
                        {phoneNumber2}
            </h4>
            <h2> you had hit me {count} times ! 😼 </h2>
            <button onClick = {() =>{
               this.setState({
            count: this.state.count + 1
              })
            }}>🥊 </button>

            <h2>Name: {this.state.userInfo.name}</h2>
            <h3>Location: {this.state.userInfo.location}</h3>
            <img src= {this.state.userInfo.avatar_url}></img>
                </div>
                );
    }

}

export default UserClass;
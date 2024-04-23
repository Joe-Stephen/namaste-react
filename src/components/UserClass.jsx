import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log(this.props.name,'child Constru');
  }
  componentDidMount(){
    console.log(this.props.name,"child mounted")
  }
  render() {
    const {name}= this.props;
    const {count} = this.state;
    console.log(this.props.name,'child Render');
    return (
      <>
        <div className="user-card">
          <h1>
            {name}
            {count}
          </h1>
          <button 
          onClick={() =>{
            this.setState({
                count:this.state.count+1,
            })
          }}>add</button>
          <button onClick={() =>{
            this.setState({
                count:this.state.count-1,
            })
          }}>less</button>
          <h2>Location: Thrissur</h2>
          <h3>Instagram: joe_stephen_k</h3>
        </div>
      </>
    );
  }
}
export default UserClass;

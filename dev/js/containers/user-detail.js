import React,{Component} from 'react';
import {connect} from 'react-redux';

class UserDetail extends Component{
    render(){
        if(this.props.activeUser === null ){
            return null;
        }
        return (
            <div>
                Hii, {this.props.activeUser.name}
            </div>
        );
    }
}
function mapStateToProps(state){
    return{
        activeUser : state.activeUser
    }
}
export default connect(mapStateToProps)(UserDetail);
import React,  { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { todoStateUpdate, todoCreate } from '../redux/actions';

class TodoCreate extends Component{

    onTodoCreateButtonClick(){
        this.props.todoCreate( { title: this.props.title} )
    }

    render(){
        return (
            <Card>
                <CardSection>
                    <Input 
                        label="title" sd
                        placeholder="Specify a todo title" 
                        onChangeText={(text) => this.props.todoStateUpdate({ prop: 'title', value: text })}
                        value={this.props.title}
                        />
                </CardSection>

                <CardSection>
                    <Button onPress={ () => this.onTodoCreateButtonClick()}>Create</Button>
                </CardSection>
            </Card>
        );
    }
}


const mapStateToProps = state => {
    return {
        title: state.todo.title
    }
}


export default connect(mapStateToProps, { todoStateUpdate, todoCreate })(TodoCreate)
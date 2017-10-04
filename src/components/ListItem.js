import React from 'react';
import { Content, Card, CardItem, Text, Body, Right,Left } from 'native-base';
import { TouchableWithoutFeedback } from 'react-native'
import { connect } from 'react-redux';
import * as actions from '../actions';
import Icon  from 'react-native-vector-icons/Ionicons';



class ListItemView  extends React.Component {
    renderDescription(){
        if(this.props.selectLibraryId === this.props.library.id){
            return (
                <CardItem content><Text>{this.props.library.description}</Text></CardItem>
            )
        }
    }

    libraryClick(){
        console.log(this.props)
        this.props.selectLibrary(this.props.library.id);
    }

    getArrowIcon(){
        return this.props.selectLibraryId === this.props.library.id ? <Icon name="ios-arrow-down" /> : <Icon name="ios-arrow-forward" />;
    }

    render(){
        const { id, description, title } = this.props.library;
        return(
            <Content>
                <TouchableWithoutFeedback onPress={() => this.libraryClick()} style={styles.button}>
                        <Card>
                            <CardItem >
                                <Left style={{ flex: 0.8 }}>
                                    <Icon active name="logo-googleplus" />
                                    <Body>
                                        <Text>{title}</Text>
                                    </Body>
                                </Left>
                                <Right style={{ flex: 0.2 }}>
                                    {this.getArrowIcon()}
                                </Right>
                            </CardItem>
                            {this.renderDescription()}
                        </Card>
                </TouchableWithoutFeedback>
            </Content>
        )
    }
}
const styles = {
    button: {
        height: 40,
    }
}

const mapStateToProps = (state) => {
    return {
        selectLibraryId: state.selectedLibraryId
    }
}

const ListItem = connect(mapStateToProps, actions)(ListItemView);
export { ListItem }
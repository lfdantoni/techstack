import React from 'react';
import { Content, Card, CardItem, Text, Body, Right,Left } from 'native-base';
import { TouchableWithoutFeedback, LayoutAnimation } from 'react-native'
import { connect } from 'react-redux';
import * as actions from '../actions';
import Icon  from 'react-native-vector-icons/Ionicons';



class ListItemView  extends React.Component {
    componentWillUpdate(){
        LayoutAnimation.spring();
    }
    renderDescription(){
        if(this.props.expanded){
            return (
                <CardItem content><Text>{this.props.library.description}</Text></CardItem>
            )
        }
    }

    libraryClick(){
        this.props.selectLibrary(this.props.library.id);
    }

    getArrowIcon(){
        return this.props.expanded ? <Icon name="ios-arrow-down" /> : <Icon name="ios-arrow-forward" />;
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

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;
    return {
        expanded: expanded
    }
}

const ListItem = connect(mapStateToProps, actions)(ListItemView);
export { ListItem }
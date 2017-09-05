import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

class LibraryListComponent extends React.Component {
    render(){
        return (
            <View/>
        )
    }
}

const mapStateToProps = state => {
    return {
        libraries: state.libraries
    }
}

const LibraryList = connect(mapStateToProps)(LibraryListComponent);

export {LibraryList};
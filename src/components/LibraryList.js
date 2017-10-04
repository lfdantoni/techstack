import React from 'react';
import { View, ListView, Text } from 'react-native';
import { connect } from 'react-redux';
import { ListItem } from './ListItem';

class LibraryListComponent extends React.Component {
    componentWillMount(){
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(this.props.libraries);
    }

    renderRow(library){
        return <ListItem library={library}/>;
    }

    render(){
        return (
                <ListView
                    dataSource={this.dataSource}
                    renderRow={this.renderRow}
                    style={styles.list}
                />
        )
    }
}

const styles = {
    list: {
        marginTop: 20,
    }
}

const mapStateToProps = state => {
    return {
        libraries: state.libraries
    }
}

const LibraryList = connect(mapStateToProps)(LibraryListComponent);

export {LibraryList};
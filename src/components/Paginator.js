import React from "react";
import { FlatList, Platform } from "react-native";
class Paginator extends React.Component {

    constructor(props) {
        super(props);
        this.index = 0;
    }

    isLegitIndex(index, length) {
        if (index < 0 || index >= length) return false;
        return true;
    }

    pagination = (velocity) => {
        let nextIndex;
        if (Platform.OS == "ios")
            nextIndex = velocity > 0 ? this.index + 1 : this.index - 1;
        else
            nextIndex = velocity < 0 ? this.index + 1 : this.index - 1;
        if (this.isLegitIndex(nextIndex, this.props.data.length)) {
            this.index = nextIndex;
        }
        this.flatlist.scrollToIndex({ index: this.index, animated: true });
    }

    getItemLayout = (data, index) => ({
        length: this.props.itemWidth,
        offset: this.props.itemWidth * index,
        index
    });

    render() {
        return (
            <FlatList
                data={this.props.data}
                renderItem={this.props.renderItem}
                horizontal
                showsHorizontalScrollIndicator={true}
                contentContainerStyle={this.props.contentContainerStyle}
                keyExtractor={this.props.keyExtractor}


                ref={ref => (this.flatlist = ref)}
                onScrollEndDrag={e => {
                    this.pagination(
                        e.nativeEvent.velocity.x
                    );
                }}

                getItemLayout={this.getItemLayout}
            />
        );
    }
}
export default Paginator;
'use strict'
import React, { Component } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import  { ListItem } from 'react-native-elements'

const restResults = [
  {
    id: "fable-vancouver",
    name: "Fable",
    image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/9A0iSEqXuKCEJgEHIuI2uw/o.jpg",
    is_closed: "false",
    url: "https://www.yelp.com/biz/fable-vancouver?adjust_creative=F_f6x02waoKIEvXo1pt8VQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=F_f6x02waoKIEvXo1pt8VQ",
    review_count: "543",
    rating: "4.5"
  },
  {
    id: "tuc-craft-kitchen-vancouver",
    name: "Tuc Craft Kitchen",
    image_url: "https://s3-media4.fl.yelpcdn.com/bphoto/ZbTzB0MCGaKm_phC_esufQ/o.jpg",
    is_closed: "false",
    url: "https://www.yelp.com/biz/tuc-craft-kitchen-vancouver?adjust_creative=F_f6x02waoKIEvXo1pt8VQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=F_f6x02waoKIEvXo1pt8VQ",
    review_count: "656",
    rating: "4.5"
  },
  {
    id:"yugo-vancouver-3",
    name: "Yugo",
    image_url: "https://s3-media3.fl.yelpcdn.com/bphoto/PwhY_oOT1DirL-m9035E9g/o.jpg",
    is_closed: "false",
    url: "https://www.yelp.com/biz/yugo-vancouver-3?adjust_creative=F_f6x02waoKIEvXo1pt8VQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=F_f6x02waoKIEvXo1pt8VQ",
    review_count: "6",
    rating: "5"
  }
]
class SearchResults extends Component {
  render() {
    return (
        <View style={styles.container}>
          <Text>SearchResults</Text>
          <FlatList
            data={restResults}
            renderItem={({item}) => (
              <ListItem
                title={item.name}
                subtitle={
                  <View>
                  <Text>line1</Text>
                  <Text>line2</Text>
                  </View>
                }
                avatar={item.image_url}
                rightTitle={item.review_count}
              />
            )}
          />
        </View>

    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
})

export default SearchResults

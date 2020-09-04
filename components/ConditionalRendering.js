import React from 'react'
import { View, Text, Button } from 'react-native'


const CardO = ({ title, showButton }) => (
    <View>
      <Text style={{ fontSize: 60 }}>{title}</Text>
      {showButton && <Button title="Press me!" />}
    </View>
)
  
export function Card3() {
    return (
      <View>
        <CardO title="Title" showButton={false} />
        <CardO title="Title with button" showButton={true} />
      </View>
    )
}

const CardQ = ({ title, buttonTitle }) => (
    <View>
      <Text style={{ fontSize: 60 }}>{title}</Text>
      {buttonTitle ? <Button title={buttonTitle} /> : null}
    </View>
)
  
export function Card1() {
    return (
      <View>
        <CardQ title="Title" />
        <CardQ title="Title with button" buttonTitle="Press me!" />
      </View>
    )
}

const CardIf = ({ loading, error, title }) => {
  let content

  if (error) {
    content = <Text style={{ fontSize: 24, color: 'red' }}>Error</Text>
  } else if (loading) {
    content = <Text style={{ fontSize: 24, color: 'gray' }}>Loading...</Text>
  } else {
    content = (
      <View>
        <Text style={{ fontSize: 60 }}>{title}</Text>
      </View>
    )
  }

  return <View style={{ padding: 24 }}>{content}</View>
}

export function Card2() {
  return (
    <View>
      <CardIf error={true} />
      <CardIf loading={true} />
      <CardIf loading={false} title="Title" />
    </View>
  )
}
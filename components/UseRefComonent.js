import React, { useState, useEffect, useRef } from 'react'
import { View, Text, Button } from 'react-native'

export default function UseRefComponent() {
  const intervalRef = useRef()
  const [count, setCount] = useState(0)

  useEffect(() => {
    intervalRef.current = setInterval(
      () => setCount((count) => count + 1),
      1000
    )

    return () => {
      clearInterval(intervalRef.current)
    }
  }, [])

  return (
    <View>
      <Text style={{ fontSize: 120 }}>{count}</Text>
      <Button
        title="Stop"
        onPress={() => {
          clearInterval(intervalRef.current)
        }}
      />
    </View>
  )
}
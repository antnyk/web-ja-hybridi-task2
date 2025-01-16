import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Modal, Button, Pressable } from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <View style={styles.container}>
      <Pressable onPress={()=>setModalVisible(true)}>
        <Text>Show modal message!</Text>
      </Pressable>
      <StatusBar style="auto" />
      {
      modalVisible 
      ? 
      <Modal onRequestClose={()=>setModalVisible(false)} animationType='fade'> 
      <View style={styles.modal}>
        <Text>This is modal</Text>
        <Button title="Close" onPress={()=>setModalVisible(false)}></Button>
      </View>
      </Modal>
      :
      null
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#b8b8b8",
    padding: 60
  },
});

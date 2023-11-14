/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Alert,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

function App(): JSX.Element {
  let controller = new AbortController();
  let signal: AbortSignal = controller.signal;
  const [ref, setRef] = useState(false);
  const time = setTimeout(() => controller.abort(), 30000);
  const onRef = () => {
    setRef(true);
    fetch('https://test.chexiaopin.cn/api/mini/jobPage', {signal})
      .then(() => {
        clearTimeout(time);
        Alert.alert('刷新成功');
        setRef(false);
      })
      .catch(() => {
        setRef(false);
        Alert.alert('失败');
      });
  };
  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <ScrollView
        style={{width: '80%', backgroundColor: 'blue'}}
        refreshControl={<RefreshControl refreshing={ref} onRefresh={onRef} />}>
        <View>
          <Text>测试</Text>
        </View>
      </ScrollView>
    </View>
  );
}

export default App;

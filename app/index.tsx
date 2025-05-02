import { Layout } from 'antd';
import { Text, View } from 'react-native';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Layout>
        <Layout.Header>
          <Text>Header</Text>
        </Layout.Header>
        <Layout.Content>
          <Text>Content</Text>
        </Layout.Content>
      </Layout>
    </View>
  );
}

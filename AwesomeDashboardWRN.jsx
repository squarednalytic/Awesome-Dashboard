import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const DashboardScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    Data for demonstration
    const sampleData = [
      { id: 1, title: 'Sales', value: '$10,000' },
      { id: 2, title: 'Expenses', value: '$5,000' },
      { id: 3, title: 'Profit', value: '$5,000' },
      { id: 4, title: 'New Users', value: '100' },
      { id: 5, title: 'Active Users', value: '500' },
    ];
    setData(sampleData);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Dashboard</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemTitle}>{item.title}</Text>
            <Text style={styles.itemValue}>{item.value}</Text>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 3, // For Android shadow
    shadowColor: '#000', // For iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemValue: {
    fontSize: 16,
    marginTop: 5,
    color: '#555555',
  },
});

export default DashboardScreen;

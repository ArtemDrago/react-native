import React, { useEffect, useMemo, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  Button,
} from 'react-native';
import { FitnessClass } from '../models/models';
import { useAppSelector } from '../hooks/hooks';

interface ServicesScreenProps {
  navigation: any,
  route: any,
};

const ServicesScreen: React.FC<ServicesScreenProps> = ({ navigation, route }) => {
  const { serviceList } = useAppSelector(state => state.app);
  const [sortedService, setSortedService] = useState<FitnessClass[]>([]);
  const [fitnessClasses, setFitnessClasses] = useState<FitnessClass[]>([]);
  const { serviceListId } = route.params;
  const [search, setSearch] = useState<string>('');


  useMemo(() => {
    if (serviceListId == 0) {
      let allServices = [];
      for (let i = 0; i < serviceList.length; i++) {
        let service = serviceList[i];
        allServices.push(...service.services);
      }
      setFitnessClasses(allServices);
      setSortedService(allServices);
      allServices = [];
    } else {
      for (let i = 0; i < serviceList.length; i++) {
        let service = serviceList[i];
        if (service.id == serviceListId) {
          setFitnessClasses(service.services);
          setSortedService(service.services);
          break;
        } else continue;
      }
    }

  }, [serviceListId]);

  useEffect(() => {
    setFitnessClasses(
      sortedService.filter(service => service.name.toLowerCase().includes(search.toLocaleLowerCase()))
    );
  }, [search]);

  const clearSerchValue = () => {
    setFitnessClasses(sortedService);
    setSearch('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.viewWrapper}>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Введите услугу"
              placeholderTextColor={'gray'}
              value={search}
              onChangeText={text => setSearch(text)}
            />
            <TouchableOpacity
              style={styles.btnClear}
              onPress={clearSerchValue}
            >
              <Text
                style={{
                  color: 'black',
                  opacity: search.length != 0 ? 1 : 0,
                }}
              >
                x
              </Text>
            </TouchableOpacity>
          </View>

          {fitnessClasses.map((fitnessClass: FitnessClass) => (
            <TouchableOpacity
              key={fitnessClass.id}
              style={styles.fitnessClassContainer}
              onPress={() => navigation.navigate('Booking', { fitnessClass })}>
              <Text style={styles.fitnessClassName}>{fitnessClass.name}</Text>
              <Text style={styles.fitnessClassPrice}>{fitnessClass.price}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
  },
  viewWrapper: {
    padding: 20,
  },
  input: {
    width: '100%',
    height: 50,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 20,
    color: 'black',
  },
  fitnessClassContainer: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
  },
  fitnessClassName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
  },
  fitnessClassPrice: {
    fontSize: 16,
    color: '#888',
  },
  inputWrapper: {
    position: 'relative',
  },
  btnClear: {
    position: 'absolute',
    top: 12,
    right: 10,
    zIndex: 2,
    width: 25,
    height: 25,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },

});

export default ServicesScreen;

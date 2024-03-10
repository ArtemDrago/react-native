import React, { useRef, useState } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  View,
  Keyboard
} from 'react-native';
import { FitnessClass } from '../models/models';
import ValidationTextInput from '../UIUX/InputValidation';

interface BookingScreenProps {
  route: any;
};

const BookingScreen: React.FC<BookingScreenProps> = ({ route }) => {
  const { fitnessClass }: { fitnessClass: FitnessClass } = route.params;
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [comment, setComment] = useState('');
  const phoneMask = ['(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/];
  const dateMask = [/\d/, /\d/, /\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/];
  const nameInput = useRef<TextInput>(null);
  const phoneInput = useRef<TextInput>(null);
  const dateInput = useRef<TextInput>(null);

  const handleBooking = () => {
    if (name && phoneNumber && date && time) {
      Alert.alert('Успешно', 'Вы записаны на занятие!');
      setName('');
      setPhoneNumber('');
      setTime('');
      setDate('');
    } else {
      Alert.alert('Ошибка', 'Пожалуйста, заполните все поля формы.');

      if (!name) {
        Keyboard.dismiss();
        nameInput.current?.focus();
        nameInput.current?.blur();
      }
      if (!phoneNumber) {
        Keyboard.dismiss();
        phoneInput.current?.focus();
        phoneInput.current?.blur();
      }
      if (!date) {
        Keyboard.dismiss();
        dateInput.current?.focus();
        dateInput.current?.blur();
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.viewWrapper}>
          <Text style={styles.fitnessClassName}>
            {fitnessClass.name}
          </Text>
          <Text style={styles.fitnessClassDescription}>
            {fitnessClass.description}
          </Text>
          <Text style={styles.fitnessClassDuration}>
            {fitnessClass.duration}
          </Text>
          <Text style={styles.fitnessClassPrice}>{fitnessClass.price}</Text>
          <ValidationTextInput
            ref={nameInput}
            placeholder="Ваше имя"
            placeholderTextColor={'gray'}
            value={name}
            setValue={setName}
            regex={/^[A-Za-z]{1,20}$/}
            validationMessage="Введите имя"
          />
          <ValidationTextInput
            ref={phoneInput}
            placeholder="Номер телефона"
            placeholderTextColor={'gray'}
            value={phoneNumber}
            setValue={setPhoneNumber}
            regex={/^.{15,15}$/}
            validationMessage="Введите номер телефона"
            maxLength={18}
            mask={phoneMask}
          />
          <ValidationTextInput
            ref={dateInput}
            placeholder="Дата"
            placeholderTextColor={'gray'}
            value={date}
            setValue={setDate}
            regex={/^.{10,10}$/}
            validationMessage="Введите дату в формате yyyy.mm.dd"
            mask={dateMask}
          />
          <ValidationTextInput
            placeholder="Время"
            placeholderTextColor={'gray'}
            value={time}
            setValue={setTime}
          />
          <ValidationTextInput
            placeholder="Комментарий к записи"
            placeholderTextColor={'gray'}
            value={comment}
            setValue={setComment}
          />
          <TouchableOpacity style={styles.button} onPress={handleBooking}>
            <Text style={styles.buttonText}>Записаться</Text>
          </TouchableOpacity>
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
  fitnessClassName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  fitnessClassDescription: {
    fontSize: 16,
    marginBottom: 10,
    color: '#666',
  },
  fitnessClassDuration: {
    fontSize: 16,
    marginBottom: 10,
    color: '#666',
  },
  fitnessClassPrice: {
    fontSize: 18,
    color: '#444',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#6a5acd',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
  },
});

export default BookingScreen;

import * as React from 'react';
import { useAppSelector } from '../../hooks/hooks';
import CategoryItem from './CategoryItem';
import { ScrollView } from 'react-native';

interface CategoriesScreenProp {
  navigation: any,
}
const CategoriesScreen: React.FC<CategoriesScreenProp> = ({ navigation }) => {
  const categories = useAppSelector(state => state.app.categories);

  return (
    <ScrollView>
      {
        categories && categories.map(category => {
          return <CategoryItem
            category={category}
            key={category.id.toString()}
            navigation={navigation}
          />
        })
      }
    </ScrollView>
  );
};

export default CategoriesScreen;
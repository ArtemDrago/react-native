import * as React from 'react';
import { useAppSelector } from '../../hooks/hooks';
import CategoryItem from './CategoryItem';

interface CategoriesScreenProp {
  navigation: any,
}
const CategoriesScreen: React.FC<CategoriesScreenProp> = ({ navigation }) => {
  const categories = useAppSelector(state => state.app.categories);

  return (
    <>
      {
        categories && categories.map(category => {
          return <CategoryItem
            category={category}
            key={category.id.toString()}
            navigation={navigation}
          />
        })
      }
    </>
  );
};

export default CategoriesScreen;
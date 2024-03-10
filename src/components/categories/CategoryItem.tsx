import * as React from 'react';
import { CategoriesClass } from '../../models/models';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

interface CategoryItemProp {
    category: CategoriesClass,
    navigation: any,
};
const CategoryItem: React.FC<CategoryItemProp> = ({ category, navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.viewWrapper}>
                    <TouchableOpacity
                        style={styles.fitnessClassContainer}
                        onPress={() => navigation.navigate('Services', {
                            serviceListId: category.services,
                            title: category.name
                        })}
                    >
                        <ImageBackground
                            source={{
                                uri: category.image,
                            }}
                            style={styles.groupImg}
                            resizeMode="cover"
                        ></ImageBackground>
                        <Text style={styles.fitnessClassName}>
                            {category.name}
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f1f1f1',
    },
    groupImg: {
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        borderRadius: 8,
        overflow: 'hidden',
        objectFit: 'cover',
    },
    viewWrapper: {
        padding: 20,
    },
    fitnessClassContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginBottom: 10,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 5,
        height: 200,
        position: 'relative',
    },
    fitnessClassName: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 5,
        color: 'white',
    },
});
export default CategoryItem;
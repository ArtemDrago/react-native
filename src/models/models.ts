
export interface AppState {
    serviceList: ServiceList[],
    categories: CategoriesClass[],
};
export interface ServiceList {
    id: number;
    services: FitnessClass[];
};
export interface FitnessClass {
    id: number;
    name: string;
    description: string;
    duration: string;
    price: string;
};

export interface CategoriesClass {
    id: Number,
    name: string,
    image: string,
    services: Number,
};
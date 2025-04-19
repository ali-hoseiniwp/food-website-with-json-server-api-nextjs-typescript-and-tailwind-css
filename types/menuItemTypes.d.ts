export interface FoodItemType {
    id: number;
    name: string;
    price: number;
    discount: number;
    image: string;
    introduction: string;
    details: {
      Cuisine?: string;
      "Recipe Type"?: string;
      Difficulty?: string;
      "Preparation Time"?: string;
      "Cooking Time"?: string;
      Serves?: string;
    }[];
    ingredients: string[];
    recipe: string[];
  }

  export interface FoodCardProps {
    item: FoodItemType;
  }

  export interface MenuProps {
    data: FoodItemType[]; 
  }

  export interface DetailType {
    Cuisine?: string;
    "Recipe Type"?: string;
    Difficulty?: string;
    "Preparation Time"?: string;
    "Cooking Time"?: string;
    Serves?: string;
  }
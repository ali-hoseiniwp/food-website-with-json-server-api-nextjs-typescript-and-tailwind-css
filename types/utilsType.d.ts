interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export interface Usertype {
  id: string
  name: string
  gmail: string
  phone: string
  roll: 'manager' | 'admin' | 'user'
}

type CartItem = {
  id: number;
  name: string;
  quantity: number;
  price: number;
  image: string;
  discount: number;
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
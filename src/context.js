import React from 'react';

export const ShopContext = React.createContext();

export const initialState = {
  basket: [],
  products: [
    { id: 101, name: "'The Heiress' by Rachel Hawkins", price: 45, photo:'https://ew.com/thmb/iqFumI4W4Mtm9ImBO03qq24_oeg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/The-Heiress-by-Rachel-Hawkins-121423-d9984fa7c1754baa8e2bfd5773553318.jpg'},
    { id: 102, name: "'Shut Up, This Is Serious' by Carolina Ixta", price: 53, photo:'https://ew.com/thmb/UT4bMzfMjeB-FO2aj6jVvw5fR5o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Shut-Up-This-Is-Serious-by-Carolina-Ixta-121423-6673b533a06146f395151662627720df.jpg'},
    { id: 103, name: "'Don't Want You Like a Best Friend' by Emma R. Alba", price: 38, photo:'https://ew.com/thmb/BUWYrVnoEWajk0X1M5F1dWgFbPc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Dont-Want-You-Like-a-Best-Friend-by-Emma-R.-Alban--121423-d649c7af66664885a9969827501db1fe.jpg'},
    { id: 104, name: "'The Atlas Complex' by Olivia Blake", price:60, photo:'https://ew.com/thmb/PtFBdv0dL0LKZ7Bc2OEhVh1RsWw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/The-Atlas-Complex-by-Olivia-Blake-121423-99e2cb948a6442d79d531ff778dd9cc6.jpg'},
    { id: 105, name: "'The Night of the Storm' by Nishita Parekh", price:49, photo:'https://ew.com/thmb/qi8bKUqPh0QDpS0VEelfVLk6Js4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/The-Night-of-the-Storm-by-Nishita-Parekh-121423-a9ca243d5e1f4e45a53b13209d2d8a93.jpg'},
    { id: 106, name: "'The Fury' by Alex Michaelides", price:54, photo:'https://ew.com/thmb/M3ysC-PpG1rRFkk6zt8RpQXhhx0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/The-Fury-by-Alex-Michaelides-121423-76f305ee4ff94d849a6de8533cad2497.jpg'},
    { id: 107, name: "'Come and Get It' by Kiley Reid", price:65, photo:'https://ew.com/thmb/klHddUw-HpU-a9LR_8AuSIgDXz0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Come-and-Get-It-by-Kiley-Reid-121423-3de456bd8743454fa90ee36cae5efb75.jpg'}
  ],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BASKET': {
      const item = state.products.find(product => product.id === action.payload);
      const existingItem = state.basket.find(basketItem => basketItem.id === action.payload);

      if (existingItem) {
        const updatedBasket = state.basket.map(basketItem =>
          basketItem.id === action.payload
            ? {
                ...basketItem,
                count: basketItem.count + 1,
                subtotal: (basketItem.count + 1) * basketItem.price,
              }
            : basketItem
        );
        return { ...state, basket: updatedBasket };
      } else {
        return {
          ...state,
          basket: [...state.basket, { ...item, count: 1, subtotal: item.price }],
        };
      }
    }

    case 'ADD_COUNT': {
      const updatedBasket = state.basket.map(basketItem =>
        basketItem.id === action.payload
          ? {
              ...basketItem,
              count: basketItem.count + 1,
              subtotal: (basketItem.count + 1) * basketItem.price,
            }
          : basketItem
      );
      return { ...state, basket: updatedBasket };
    }

    case 'REMOVE_COUNT': {
      const updatedBasket = state.basket
        .map(basketItem =>
          basketItem.id === action.payload
            ? basketItem.count > 1
              ? {
                  ...basketItem,
                  count: basketItem.count - 1,
                  subtotal: (basketItem.count - 1) * basketItem.price,
                }
              : null
            : basketItem
        )
        .filter(basketItem => basketItem !== null);

      return { ...state, basket: updatedBasket };
    }

    case 'REMOVE_ITEM': {
      const updatedBasket = state.basket.filter(basketItem => basketItem.id !== action.payload);
      return { ...state, basket: updatedBasket };
    }

    default:
      return state;
  }
};


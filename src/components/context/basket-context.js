import React from "react";

const BasketContext = React.createContext({});

export const BasketProvider = BasketContext.Provider;
export const BasketConsumer = BasketContext.Consumer;

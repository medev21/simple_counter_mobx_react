import React from 'react';
import { CounterStore } from './stores/counterStore';

export const StoresContext = React.createContext({
    CounterStore: new CounterStore()
});
import { createSlice } from "@reduxjs/toolkit";
import nature_1 from '../../assets/nature-1.png'
import people_1 from '../../assets/people-1.png'
import temple_1 from '../../assets/temple-1.png'
import abstract_1 from '../../assets/abstract-1.png'
import animal_1 from '../../assets/animal-1.png'
import castle_1 from '../../assets/castle-1.png'
import eagle_1 from '../../assets/eagle-1.png'
import pig_1 from '../../assets/pig-1.png'

const products = [
    {
        _id: "nature",
        name: "Nature Sanctuary's 1000 Pieces Puzzle",
        description: "An interesting puzzle with 1000 pieces of nature.",
        price: 1799,
        image: [nature_1],
        category: "1000-pieces",
        subCategory: "nature",
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "people",
        name: "Customized Famil Smiles Puzzle of 500 Pieces",
        description: "Custom made 500 pieces of people.",
        price: 999,
        image: [people_1],
        category: "500-pieces",
        subCategory: "people",
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "abstract",
        name: "Spectrum Echoes 200 Pieces Puzzle",
        description: "200 pieces of abstract art.",
        price: 699,
        image: [abstract_1],
        category: "200-pieces",
        subCategory: "abstract",
        date: 1716234545448,
        bestseller: true
    },
    {
        _id: "animal",
        name: "Oceanic Leap's 100 Pieces Puzzle",
        description: "100 pieces of innovative art.",
        price: 399,
        image: [animal_1],
        category: "100-pieces",
        subCategory: "dolphin",
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "castle",
        name: "200 Pieces of Sand Castle Puzzle",
        description: "200 pieces of sand castle puzzle.",
        price: 749,
        image: [castle_1],
        category: "200-pieces",
        subCategory: "sand-castle",
        date: 1716622345448,
        bestseller: true
    },
    {
        _id: "eagle",
        name: "Eagle's 1000 Pieces Puzzle",
        description: "1000 pieces of eagle puzzle.",
        price: 1599,
        image: [eagle_1],
        category: "1000-pieces",
        subCategory: "eagle",
        date: 1716623423448,
        bestseller: true
    },
    {
        _id: "pig",
        name: "Pig's 100 Pieces Puzzle",
        description: "100 pieces of pig puzzle.",
        price: 599,
        image: [pig_1],
        category: "100-pieces",
        subCategory: "pig",
        date: 1716621542448,
        bestseller: false
    },
    {
        _id: "temple",
        name: "500 Pieces of Temple Gopuram Puzzle",
        description: "500 pieces of temple puzzle.",
        price: 999,
        image: [temple_1],
        category: "500-pieces",
        subCategory: "temple",
        date: 1716622345448,
        bestseller: false
    }
]

const initialState = {
    products: products,
    filteredProducts: products,
    loading: false,
    error: null,
    filters: {
        category: 'all',
        subCategory: 'all',
        searchTerm: ''
    },
    sortBy: 'relevant'
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setFilters: (state, action) => {
            state.filters = {
                ...state.filters,
                ...action.payload
            },
                productSlice.caseReducers.applyFilters(state)
        },
        setSortBy: (state, action) => {
            state.sortBy = action.payload
            productSlice.caseReducers.applySorting(state)
        },
        applyFilters: (state) => {
            let filtered = [...state.products]
            if (state.filters.searchTerm !== '') {
                filtered = filtered.filter(product => product.name.toLowerCase().includes(state.filters.searchTerm.toLowerCase()))
            }
            if (state.filters.category !== 'all') {
                filtered = filtered.filter(product => product.category === state.filters.category)
            }
            if (state.filters.subCategory !== 'all') {
                filtered = filtered.filter(product => product.subCategory === state.filters.subCategory)
            }
            state.filteredProducts = filtered
            productSlice.caseReducers.applySorting(state)
        },
        applySorting: (state) => {
            switch (state.sortBy) {
                case 'low-high':
                    state.filteredProducts.sort((a, b) => a.price - b.price)
                    break;
                case 'high-low':
                    state.filteredProducts.sort((a, b) => b.price - a.price)
                    break;
                default:
                    break;
            }
        }
    }
})

export const { setFilters, setSortBy } = productSlice.actions

export default productSlice.reducer
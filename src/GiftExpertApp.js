import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';

const GiftExpertApp = ( ) => {

    const [categories, setCategories] = useState(['Naruto']);

    return (
        <>
            <h2>GiftExpertApp</h2>

            <AddCategory setCategories={ setCategories } />
            <hr />
            
            <ol>
                {
                    categories.map( category  => 
                        <GiftGrid 
                            category= { category }
                            key = { category }
                        />
                    )
                }
            </ol>
        </>
    );
       
}

export default GiftExpertApp;
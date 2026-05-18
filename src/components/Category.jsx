import React, { useState } from 'react'
import { images } from '../assets/images';

const Category = () => {
    const [activetab, setActiveTab] = useState('pcase');

    const tabs = [
        {id: 'pcase', name: 'Phone-Cases', image: images.ca},
        {id: 'pbank', name: 'Power-Bank', image: images.pbank},
        {id: 'hphone', name: 'Head-Phone', image: images.hphone},
        {id: 'swatch', name: 'Smart-Watch', image: images.swatch},
        {id: 'speaker', name: 'Speaker', image: images.speaker},
        {id: 'monitor', name: 'Monitor&Laptops', image: images.monitor}
    ];

    const products = {
        pcase: [
            {id: 1, name: 'Stylish Iphone Cases', price: '$4.99', image: image}
        ]
    }
  return (
    <div>

    </div>
  )
}

export default Category
import React, { useState } from 'react'
import { images } from '../assets/images';

const Category = () => {
    const [activetab, setActiveTab] = useState('pcase');

    const tabs = [
        {id: 'pcase', name: 'Phone-Cases', image: images.pcase},
        {id: 'pbank', name: 'Power-Bank', image: images.pbank},
        {id: 'hphone', name: 'Head-Phone', image: images.hphone},
        {id: 'swatch', name: 'Smart-Watch', image: images.swatch},
        {id: 'speaker', name: 'Speaker', image: images.speaker},
        {id: 'monitor', name: 'Monitor&Laptops', image: images.monitor}
    ];

    const products = {
        pcase: [
            {id: 1, name: 'Stylish Iphone Cases', price: '$4.99', image: images.pcase1},
            {id: 2, name: 'Magsafe Clear Samsung Cases', price: '$5.99', image: images.pcase2},
            {id: 3, name: 'Silicone Samsung Cases', price: '$6.99', image: images.pcase3},
            {id: 4, name: 'Google Pixel Cases', price: '$7.99', image: images.pcase4}
        ],

        pbank: [
            {id: 1, name: '30,000mah Powerbank', price: '$15.99', image: images.pbank1},
            {id: 2, name: '20,000mah Powerbank', price: '$13.99', image: images.pbank2},
            {id: 3, name: '10,000mah Powerbank', price: '$11.99', image: images.pbank3},
            {id: 4, name: '5,000mah USB Powerbank', price: '$8.99', image: images.pbank4}
        ],

        hphone: [
            {id: 1, name: '', price: '', image: images.hphone1},
            {id: 2, name: '', price: '', image: images.hphone2},
            {id: 3, name: '', price: '', image: images.hphone3},
            {id: 4, name: '', price: '', image: images.hphone4},
        ]
    }
  return (
    <div>

    </div>
  )
}

export default Category
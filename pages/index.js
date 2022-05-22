// Main page
import React from 'react';
import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';

const Home = ({ products, bannerData }) => (
  <div>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}  /> 
    <div className="products-heading">
      <h2>Recipes that you will adore!</h2>
    </div>

    <div className="products-container">
      {products?.map((product) => <Product key={product._id} product={product} />)}
      
    </div>

    <FooterBanner footerBanner={bannerData && bannerData[0]} />
  </div>
);

export const getServerSideProps = async () => { // fetch data in Next.js 
  const productQuery = '*[_type == "product"]'; // all sanity products
  const products = await client.fetch(productQuery);
 
  const bannerQuery = '*[_type == "banner"]';// all sanity banner items
  const bannerData = await client.fetch(bannerQuery); 
  
  return {
    props: { products, bannerData } 
  }
}

export default Home;
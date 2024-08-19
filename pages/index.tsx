import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductList from '../components/ProductList';

export async function getServerSideProps() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
}

const Home = ({ products }: { products: any[] }) => {
  return (
    <>
      <Head>
        <title>My Store - Home</title>
        <meta name="description" content="Welcome to My Store. Discover the latest products with the best prices." />
      </Head>
      <Header />
      <main className="container mx-auto p-4">
        <ProductList products={products} />
      </main>
      <Footer />
    </>
  );
};

export default Home;

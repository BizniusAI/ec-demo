//made for sanity client
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'ncmazyfy', // selects specific project
  dataset: 'production', // diffrentiates between production and developement environment 
  apiVersion: '2022-05-06', // date of when developement started
  useCdn: true, // allows sanity to deliver info
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client); //retrieves images from sanity

export const urlFor = (source) => builder.image(source); //url where images are stored
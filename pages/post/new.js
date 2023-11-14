import React from 'react';
import Head from 'next/head';
import PostForm from '../../components/forms/PostForm';
import Sheep from '../../components/Secret/Sheep';

export default function NewPost() {
  return (
    <>
      <Sheep />
      <Head>
        <title>New Item</title>
      </Head>
      <PostForm />
    </>
  );
}

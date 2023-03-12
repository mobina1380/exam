import React, { useState } from 'react';
import { selectPosts } from './slice';
import styles from './posts.module.css';
import { addAsyncWithSaga } from "./actions";
import { useAppSelector, useAppDispatch } from '../../app/hooks';

export function Posts() {
  const posts = useAppSelector(selectPosts);
  const dispatch = useAppDispatch();
  const renderPosts = () => {
  
   return posts.map((post, key) => {
      return <li key={key}>{post.id} : {post.title}</li>
    })
  }

  return (
    <div className={styles.parentdiv}>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(addAsyncWithSaga(44))}
        >
          Add Posts
        </button> 
     <div className={styles.usersme}>Posts:</div>
        <ul className={styles.ulclass}>{ renderPosts() }</ul>
    </div>
  );
}
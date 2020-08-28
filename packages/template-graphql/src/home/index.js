import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Helmet } from 'react-helmet-async';
import query from './commits.gql';
import styles from './styles.css';

export default () => {
  const result = useQuery(query);
  return (
    <div>
      <Helmet>
        <title>Hops Demo</title>
      </Helmet>
      <h1 className={styles.headline}>Hello World!</h1>
      {/* {loading ? (
        <div>loading commits...</div>
      ) : (
        repo.commits.map((commit) => {
          const repoUrl = `https://github.com/${repo.owner.login}/${repo.name}`;
          return (
            <p key={commit.sha}>
              <a href={`${repoUrl}/commit/${commit.sha}`}>"{commit.message}"</a>{' '}
              by <b>{commit.author.login || commit.author.name}</b>
            </p>
          );
        })
      )} */}
    </div>
  );
};

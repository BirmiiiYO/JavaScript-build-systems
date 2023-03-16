import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_DATA } from 'graphqlDir/queries';

import {Title,UserList,UserListItem} from './styles'

export const StarWar = () => {
  const { loading, error, data } = useQuery(GET_DATA);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <UserList>
        {data.allFilms.films.map(({title, releaseDate }) => (
          <UserListItem key={title+releaseDate}>
            <div>{title}</div>
            <div>{releaseDate}</div>
          </UserListItem>
        ))}
      </UserList>
      
    </div>
  );
};

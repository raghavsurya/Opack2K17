import React from 'react';
import DataApi from '../DataApi';
import { data } from '../testData.json';

const api = new DataApi(data);

describe('DataApi', () => {

  it('exposes articles as an object', () => {
    const articles = api.getArticles();
    const articleId = data.articles[0].id;
    const articleTitle = data.articles[0].title;

    //expect(articles).toHavePoperty(articleId);
    expect(articles[articleId].title).toBe(articleTitle);
  });

  it('exposes authors as an object with first name Andrew', () => {
    const authors = api.getAuthors();
    const authorId = data.authors[0].id;
    const authorName = data.authors[0].firstName;

  //  expect(authors).toHavePoperty(authorId);
    expect(authors[authorId].firstName).toBe("Andrew");
  });

  it('exposes players as an object with email raghavsurya@gmail.com', () => {
    const players = api.getPlayers();
    console.log(data.players);
    const playerId = data.players[0].id;
    const playerEmail = data.players[0].email;

  //  expect(authors).toHavePoperty(authorId);
    expect(players[playerId].email).toBe("raghavsurya@gmail.com");
  });


});

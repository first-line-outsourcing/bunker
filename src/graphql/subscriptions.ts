/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      name
      players {
        items {
          id
          gameID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      name
      players {
        items {
          id
          gameID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      name
      players {
        items {
          id
          gameID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateGame = /* GraphQL */ `
  subscription OnCreateGame {
    onCreateGame {
      id
      host {
        id
        gameID
        userID
        user {
          id
          name
          createdAt
          updatedAt
        }
        cards {
          nextToken
        }
        game {
          id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      players {
        items {
          id
          gameID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateGame = /* GraphQL */ `
  subscription OnUpdateGame {
    onUpdateGame {
      id
      host {
        id
        gameID
        userID
        user {
          id
          name
          createdAt
          updatedAt
        }
        cards {
          nextToken
        }
        game {
          id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      players {
        items {
          id
          gameID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteGame = /* GraphQL */ `
  subscription OnDeleteGame {
    onDeleteGame {
      id
      host {
        id
        gameID
        userID
        user {
          id
          name
          createdAt
          updatedAt
        }
        cards {
          nextToken
        }
        game {
          id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      players {
        items {
          id
          gameID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePlayer = /* GraphQL */ `
  subscription OnCreatePlayer {
    onCreatePlayer {
      id
      gameID
      userID
      user {
        id
        name
        players {
          nextToken
        }
        createdAt
        updatedAt
      }
      cards {
        items {
          id
          cardID
          playerID
          createdAt
          updatedAt
        }
        nextToken
      }
      game {
        id
        host {
          id
          gameID
          userID
          createdAt
          updatedAt
        }
        players {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePlayer = /* GraphQL */ `
  subscription OnUpdatePlayer {
    onUpdatePlayer {
      id
      gameID
      userID
      user {
        id
        name
        players {
          nextToken
        }
        createdAt
        updatedAt
      }
      cards {
        items {
          id
          cardID
          playerID
          createdAt
          updatedAt
        }
        nextToken
      }
      game {
        id
        host {
          id
          gameID
          userID
          createdAt
          updatedAt
        }
        players {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePlayer = /* GraphQL */ `
  subscription OnDeletePlayer {
    onDeletePlayer {
      id
      gameID
      userID
      user {
        id
        name
        players {
          nextToken
        }
        createdAt
        updatedAt
      }
      cards {
        items {
          id
          cardID
          playerID
          createdAt
          updatedAt
        }
        nextToken
      }
      game {
        id
        host {
          id
          gameID
          userID
          createdAt
          updatedAt
        }
        players {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePlayerCard = /* GraphQL */ `
  subscription OnCreatePlayerCard {
    onCreatePlayerCard {
      id
      cardID
      playerID
      card {
        id
        category
        title
        text
        players {
          nextToken
        }
        createdAt
        updatedAt
      }
      player {
        id
        gameID
        userID
        user {
          id
          name
          createdAt
          updatedAt
        }
        cards {
          nextToken
        }
        game {
          id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePlayerCard = /* GraphQL */ `
  subscription OnUpdatePlayerCard {
    onUpdatePlayerCard {
      id
      cardID
      playerID
      card {
        id
        category
        title
        text
        players {
          nextToken
        }
        createdAt
        updatedAt
      }
      player {
        id
        gameID
        userID
        user {
          id
          name
          createdAt
          updatedAt
        }
        cards {
          nextToken
        }
        game {
          id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePlayerCard = /* GraphQL */ `
  subscription OnDeletePlayerCard {
    onDeletePlayerCard {
      id
      cardID
      playerID
      card {
        id
        category
        title
        text
        players {
          nextToken
        }
        createdAt
        updatedAt
      }
      player {
        id
        gameID
        userID
        user {
          id
          name
          createdAt
          updatedAt
        }
        cards {
          nextToken
        }
        game {
          id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCard = /* GraphQL */ `
  subscription OnCreateCard {
    onCreateCard {
      id
      category
      title
      text
      players {
        items {
          id
          cardID
          playerID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCard = /* GraphQL */ `
  subscription OnUpdateCard {
    onUpdateCard {
      id
      category
      title
      text
      players {
        items {
          id
          cardID
          playerID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCard = /* GraphQL */ `
  subscription OnDeleteCard {
    onDeleteCard {
      id
      category
      title
      text
      players {
        items {
          id
          cardID
          playerID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;

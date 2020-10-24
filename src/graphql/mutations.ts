/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createGame = /* GraphQL */ `
  mutation CreateGame(
    $input: CreateGameInput!
    $condition: ModelGameConditionInput
  ) {
    createGame(input: $input, condition: $condition) {
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
export const updateGame = /* GraphQL */ `
  mutation UpdateGame(
    $input: UpdateGameInput!
    $condition: ModelGameConditionInput
  ) {
    updateGame(input: $input, condition: $condition) {
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
export const deleteGame = /* GraphQL */ `
  mutation DeleteGame(
    $input: DeleteGameInput!
    $condition: ModelGameConditionInput
  ) {
    deleteGame(input: $input, condition: $condition) {
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
export const createPlayer = /* GraphQL */ `
  mutation CreatePlayer(
    $input: CreatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    createPlayer(input: $input, condition: $condition) {
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
export const updatePlayer = /* GraphQL */ `
  mutation UpdatePlayer(
    $input: UpdatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    updatePlayer(input: $input, condition: $condition) {
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
export const deletePlayer = /* GraphQL */ `
  mutation DeletePlayer(
    $input: DeletePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    deletePlayer(input: $input, condition: $condition) {
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
export const createPlayerCard = /* GraphQL */ `
  mutation CreatePlayerCard(
    $input: CreatePlayerCardInput!
    $condition: ModelPlayerCardConditionInput
  ) {
    createPlayerCard(input: $input, condition: $condition) {
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
export const updatePlayerCard = /* GraphQL */ `
  mutation UpdatePlayerCard(
    $input: UpdatePlayerCardInput!
    $condition: ModelPlayerCardConditionInput
  ) {
    updatePlayerCard(input: $input, condition: $condition) {
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
export const deletePlayerCard = /* GraphQL */ `
  mutation DeletePlayerCard(
    $input: DeletePlayerCardInput!
    $condition: ModelPlayerCardConditionInput
  ) {
    deletePlayerCard(input: $input, condition: $condition) {
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
export const createCard = /* GraphQL */ `
  mutation CreateCard(
    $input: CreateCardInput!
    $condition: ModelCardConditionInput
  ) {
    createCard(input: $input, condition: $condition) {
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
export const updateCard = /* GraphQL */ `
  mutation UpdateCard(
    $input: UpdateCardInput!
    $condition: ModelCardConditionInput
  ) {
    updateCard(input: $input, condition: $condition) {
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
export const deleteCard = /* GraphQL */ `
  mutation DeleteCard(
    $input: DeleteCardInput!
    $condition: ModelCardConditionInput
  ) {
    deleteCard(input: $input, condition: $condition) {
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

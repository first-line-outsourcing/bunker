import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsExports from '../src/aws-exports';
import { createCard, updateCard } from '../src/graphql/mutations';
import { getCard } from '../src/graphql/queries';

const parsed = require('../bunker_cards.json');

const cards = (Object.values(parsed) as any[]).map(cat => cat.items).flat(2);

Amplify.configure(awsExports);

/** !!!!!!!!!!!!!!!!!!!!!!!!!!!
  change to "module": "commonjs" in tsconfig.json first to run this
 !!!!!!!!!!!!!!!!!!!!!!!!!!! **/

 (async () => {
    try {
      await Promise.all(
        cards.map(async card => {
          const exist = await API.graphql(graphqlOperation(getCard, { id: card.id }));
          // @ts-ignore
          if (exist.data.getCard) return API.graphql(graphqlOperation(updateCard, { input: card }));
          return API.graphql(graphqlOperation(createCard, { input: card }));
        }
      ))
    } catch (e) {
      console.log(e);
    }
  }
)();

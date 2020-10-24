/* Amplify Params - DO NOT EDIT
 API_BUNKER_CARDTABLE_ARN
 API_BUNKER_CARDTABLE_NAME
 API_BUNKER_GAMETABLE_ARN
 API_BUNKER_GAMETABLE_NAME
 API_BUNKER_GRAPHQLAPIENDPOINTOUTPUT
 API_BUNKER_GRAPHQLAPIIDOUTPUT
 API_BUNKER_GRAPHQLAPIKEYOUTPUT
 API_BUNKER_PLAYERCARDTABLE_ARN
 API_BUNKER_PLAYERCARDTABLE_NAME
 API_BUNKER_PLAYERTABLE_ARN
 API_BUNKER_PLAYERTABLE_NAME
 API_BUNKER_USERTABLE_ARN
 API_BUNKER_USERTABLE_NAME
 ENV
 REGION
 Amplify Params - DO NOT EDIT */

exports.handler = async (event) => {
  // TODO implement
  const response = {
    statusCode: 200,
    //  Uncomment below to enable CORS requests
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "'application/json'"
    },
    body: event
  };
  return response;
};

module.exports = 
{
  "version": "1.0.0",	
  "productsApiBaseUri": `${process.env.PRODUCTS_SERVICE_HOST}:${process.env.PRODUCTS_SERVICE_PORT}`,
  "recommendationBaseUri": `${process.env.RECOMMENDATIONS_SERVICE_HOST}:${process.env.RECOMMENDATIONS_SERVICE_PORT}`,
  "votingBaseUri": `${process.env.VOTING_SERVICE_HOST}:${process.env.VOTING_SERVICE_PORT}`
}
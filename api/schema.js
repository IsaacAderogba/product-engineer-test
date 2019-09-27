const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLSchema
} = require("graphql");
const { subCipher } = require("./helpers");

const CipherType = new GraphQLObjectType({
  name: "Cipher",
  fields: () => ({
    decodedCipher: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "Query",
  fields: {
    cipher: {
      type: CipherType,
      args: {
        cipher: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parent, args) {
        return { decodedCipher: subCipher(args.cipher) };
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});

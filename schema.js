const {ApolloServer,gql} = require("apollo-server")
exports.typeDefs = gql`
    type Query {
        products(filter: ProductFilterInput): [Product!]!
        product(id: ID!): Product
        categories: [Category!]!
        category(id: ID!): Category
    }

    type Mutation {
        addCategory(input: AddCategoryInput): Category!
        addProduct(input: AddProductInput): Product!
        addReview(input: AddReviewInput): Review!
        deleteCategory(id: ID!): Boolean!
        deleteProduct(id: ID!): Boolean!
        deleteReview(id: ID!): Boolean!
        updateCategory(id: ID!, input:UpdateCategoryInput! ): Category!
    }

    type Product {
        id: ID!
        name: String!
        description: String!
        image: String!
        quantity: Int!
        price: Float!
        onSale: Boolean!
        category: Category
        reviews: [Review!]!
    }

    type Category{
        id: ID!
        name: String!
        products(filter: ProductFilterInput): [Product!]!
    }

    type Review{
        id: ID!
        data: String!
        title: String!
        comment: String!
        rating: Int

    }

    input ProductFilterInput{
        onSale: Boolean
        avgRating: Int
    }

    input AddCategoryInput{
        name: String
    }
    input UpdateCategoryInput{
        name: String
    }

    input AddProductInput{
        name: String!
        description: String!
        image: String!
        quantity: Int!
        price: Float!
        onSale: Boolean!
        categoryId: ID!
    }
    input AddReviewInput{
        data: String!
        title: String!
        comment: String!
        rating: Int
        productId: ID!
    }
`
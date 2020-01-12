import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    users: <T = User[]>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    payments: <T = Payment[]>(args: { where?: PaymentWhereInput, orderBy?: PaymentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    files: <T = File[]>(args: { where?: FileWhereInput, orderBy?: FileOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    subScriptions: <T = SubScription[]>(args: { where?: SubScriptionWhereInput, orderBy?: SubScriptionOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    payment: <T = Payment | null>(args: { where: PaymentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    file: <T = File | null>(args: { where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    subScription: <T = SubScription | null>(args: { where: SubScriptionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput, orderBy?: UserOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    paymentsConnection: <T = PaymentConnection>(args: { where?: PaymentWhereInput, orderBy?: PaymentOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    filesConnection: <T = FileConnection>(args: { where?: FileWhereInput, orderBy?: FileOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    subScriptionsConnection: <T = SubScriptionConnection>(args: { where?: SubScriptionWhereInput, orderBy?: SubScriptionOrderByInput, skip?: Int, after?: String, before?: String, first?: Int, last?: Int }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Mutation {
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createPayment: <T = Payment>(args: { data: PaymentCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createFile: <T = File>(args: { data: FileCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createSubScription: <T = SubScription>(args: { data: SubScriptionCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updatePayment: <T = Payment | null>(args: { data: PaymentUpdateInput, where: PaymentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateFile: <T = File | null>(args: { data: FileUpdateInput, where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateSubScription: <T = SubScription | null>(args: { data: SubScriptionUpdateInput, where: SubScriptionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deletePayment: <T = Payment | null>(args: { where: PaymentWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteFile: <T = File | null>(args: { where: FileWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteSubScription: <T = SubScription | null>(args: { where: SubScriptionWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertPayment: <T = Payment>(args: { where: PaymentWhereUniqueInput, create: PaymentCreateInput, update: PaymentUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertFile: <T = File>(args: { where: FileWhereUniqueInput, create: FileCreateInput, update: FileUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertSubScription: <T = SubScription>(args: { where: SubScriptionWhereUniqueInput, create: SubScriptionCreateInput, update: SubScriptionUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateManyMutationInput, where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyPayments: <T = BatchPayload>(args: { data: PaymentUpdateManyMutationInput, where?: PaymentWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyFiles: <T = BatchPayload>(args: { data: FileUpdateManyMutationInput, where?: FileWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManySubScriptions: <T = BatchPayload>(args: { data: SubScriptionUpdateManyMutationInput, where?: SubScriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyPayments: <T = BatchPayload>(args: { where?: PaymentWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyFiles: <T = BatchPayload>(args: { where?: FileWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManySubScriptions: <T = BatchPayload>(args: { where?: SubScriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    payment: <T = PaymentSubscriptionPayload | null>(args: { where?: PaymentSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    file: <T = FileSubscriptionPayload | null>(args: { where?: FileSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> ,
    subScription: <T = SubScriptionSubscriptionPayload | null>(args: { where?: SubScriptionSubscriptionWhereInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T>> 
  }

export interface Exists {
  User: (where?: UserWhereInput) => Promise<boolean>
  Payment: (where?: PaymentWhereInput) => Promise<boolean>
  File: (where?: FileWhereInput) => Promise<boolean>
  SubScription: (where?: SubScriptionWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateFile {
  count: Int!
}

type AggregatePayment {
  count: Int!
}

type AggregateSubScription {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

scalar DateTime

type File implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  filename: String!
  height: Float
  mimetype: String!
  encoding: String
  url: String!
  width: Float
  user: User!
}

"""A connection to a list of items."""
type FileConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [FileEdge]!
  aggregate: AggregateFile!
}

input FileCreateInput {
  id: ID
  filename: String!
  height: Float
  mimetype: String!
  encoding: String
  url: String!
  width: Float
  user: UserCreateOneWithoutFilesInput!
}

input FileCreateManyWithoutUserInput {
  create: [FileCreateWithoutUserInput!]
  connect: [FileWhereUniqueInput!]
}

input FileCreateWithoutUserInput {
  id: ID
  filename: String!
  height: Float
  mimetype: String!
  encoding: String
  url: String!
  width: Float
}

"""An edge in a connection."""
type FileEdge {
  """The item at the end of the edge."""
  node: File!

  """A cursor for use in pagination."""
  cursor: String!
}

enum FileOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  filename_ASC
  filename_DESC
  height_ASC
  height_DESC
  mimetype_ASC
  mimetype_DESC
  encoding_ASC
  encoding_DESC
  url_ASC
  url_DESC
  width_ASC
  width_DESC
}

type FilePreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  filename: String!
  height: Float
  mimetype: String!
  encoding: String
  url: String!
  width: Float
}

input FileScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [FileScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [FileScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [FileScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  filename: String

  """All values that are not equal to given value."""
  filename_not: String

  """All values that are contained in given list."""
  filename_in: [String!]

  """All values that are not contained in given list."""
  filename_not_in: [String!]

  """All values less than the given value."""
  filename_lt: String

  """All values less than or equal the given value."""
  filename_lte: String

  """All values greater than the given value."""
  filename_gt: String

  """All values greater than or equal the given value."""
  filename_gte: String

  """All values containing the given string."""
  filename_contains: String

  """All values not containing the given string."""
  filename_not_contains: String

  """All values starting with the given string."""
  filename_starts_with: String

  """All values not starting with the given string."""
  filename_not_starts_with: String

  """All values ending with the given string."""
  filename_ends_with: String

  """All values not ending with the given string."""
  filename_not_ends_with: String
  height: Float

  """All values that are not equal to given value."""
  height_not: Float

  """All values that are contained in given list."""
  height_in: [Float!]

  """All values that are not contained in given list."""
  height_not_in: [Float!]

  """All values less than the given value."""
  height_lt: Float

  """All values less than or equal the given value."""
  height_lte: Float

  """All values greater than the given value."""
  height_gt: Float

  """All values greater than or equal the given value."""
  height_gte: Float
  mimetype: String

  """All values that are not equal to given value."""
  mimetype_not: String

  """All values that are contained in given list."""
  mimetype_in: [String!]

  """All values that are not contained in given list."""
  mimetype_not_in: [String!]

  """All values less than the given value."""
  mimetype_lt: String

  """All values less than or equal the given value."""
  mimetype_lte: String

  """All values greater than the given value."""
  mimetype_gt: String

  """All values greater than or equal the given value."""
  mimetype_gte: String

  """All values containing the given string."""
  mimetype_contains: String

  """All values not containing the given string."""
  mimetype_not_contains: String

  """All values starting with the given string."""
  mimetype_starts_with: String

  """All values not starting with the given string."""
  mimetype_not_starts_with: String

  """All values ending with the given string."""
  mimetype_ends_with: String

  """All values not ending with the given string."""
  mimetype_not_ends_with: String
  encoding: String

  """All values that are not equal to given value."""
  encoding_not: String

  """All values that are contained in given list."""
  encoding_in: [String!]

  """All values that are not contained in given list."""
  encoding_not_in: [String!]

  """All values less than the given value."""
  encoding_lt: String

  """All values less than or equal the given value."""
  encoding_lte: String

  """All values greater than the given value."""
  encoding_gt: String

  """All values greater than or equal the given value."""
  encoding_gte: String

  """All values containing the given string."""
  encoding_contains: String

  """All values not containing the given string."""
  encoding_not_contains: String

  """All values starting with the given string."""
  encoding_starts_with: String

  """All values not starting with the given string."""
  encoding_not_starts_with: String

  """All values ending with the given string."""
  encoding_ends_with: String

  """All values not ending with the given string."""
  encoding_not_ends_with: String
  url: String

  """All values that are not equal to given value."""
  url_not: String

  """All values that are contained in given list."""
  url_in: [String!]

  """All values that are not contained in given list."""
  url_not_in: [String!]

  """All values less than the given value."""
  url_lt: String

  """All values less than or equal the given value."""
  url_lte: String

  """All values greater than the given value."""
  url_gt: String

  """All values greater than or equal the given value."""
  url_gte: String

  """All values containing the given string."""
  url_contains: String

  """All values not containing the given string."""
  url_not_contains: String

  """All values starting with the given string."""
  url_starts_with: String

  """All values not starting with the given string."""
  url_not_starts_with: String

  """All values ending with the given string."""
  url_ends_with: String

  """All values not ending with the given string."""
  url_not_ends_with: String
  width: Float

  """All values that are not equal to given value."""
  width_not: Float

  """All values that are contained in given list."""
  width_in: [Float!]

  """All values that are not contained in given list."""
  width_not_in: [Float!]

  """All values less than the given value."""
  width_lt: Float

  """All values less than or equal the given value."""
  width_lte: Float

  """All values greater than the given value."""
  width_gt: Float

  """All values greater than or equal the given value."""
  width_gte: Float
}

type FileSubscriptionPayload {
  mutation: MutationType!
  node: File
  updatedFields: [String!]
  previousValues: FilePreviousValues
}

input FileSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [FileSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [FileSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [FileSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: FileWhereInput
}

input FileUpdateInput {
  filename: String
  height: Float
  mimetype: String
  encoding: String
  url: String
  width: Float
  user: UserUpdateOneRequiredWithoutFilesInput
}

input FileUpdateManyDataInput {
  filename: String
  height: Float
  mimetype: String
  encoding: String
  url: String
  width: Float
}

input FileUpdateManyMutationInput {
  filename: String
  height: Float
  mimetype: String
  encoding: String
  url: String
  width: Float
}

input FileUpdateManyWithoutUserInput {
  create: [FileCreateWithoutUserInput!]
  connect: [FileWhereUniqueInput!]
  set: [FileWhereUniqueInput!]
  disconnect: [FileWhereUniqueInput!]
  delete: [FileWhereUniqueInput!]
  update: [FileUpdateWithWhereUniqueWithoutUserInput!]
  updateMany: [FileUpdateManyWithWhereNestedInput!]
  deleteMany: [FileScalarWhereInput!]
  upsert: [FileUpsertWithWhereUniqueWithoutUserInput!]
}

input FileUpdateManyWithWhereNestedInput {
  where: FileScalarWhereInput!
  data: FileUpdateManyDataInput!
}

input FileUpdateWithoutUserDataInput {
  filename: String
  height: Float
  mimetype: String
  encoding: String
  url: String
  width: Float
}

input FileUpdateWithWhereUniqueWithoutUserInput {
  where: FileWhereUniqueInput!
  data: FileUpdateWithoutUserDataInput!
}

input FileUpsertWithWhereUniqueWithoutUserInput {
  where: FileWhereUniqueInput!
  update: FileUpdateWithoutUserDataInput!
  create: FileCreateWithoutUserInput!
}

input FileWhereInput {
  """Logical AND on all given filters."""
  AND: [FileWhereInput!]

  """Logical OR on all given filters."""
  OR: [FileWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [FileWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  filename: String

  """All values that are not equal to given value."""
  filename_not: String

  """All values that are contained in given list."""
  filename_in: [String!]

  """All values that are not contained in given list."""
  filename_not_in: [String!]

  """All values less than the given value."""
  filename_lt: String

  """All values less than or equal the given value."""
  filename_lte: String

  """All values greater than the given value."""
  filename_gt: String

  """All values greater than or equal the given value."""
  filename_gte: String

  """All values containing the given string."""
  filename_contains: String

  """All values not containing the given string."""
  filename_not_contains: String

  """All values starting with the given string."""
  filename_starts_with: String

  """All values not starting with the given string."""
  filename_not_starts_with: String

  """All values ending with the given string."""
  filename_ends_with: String

  """All values not ending with the given string."""
  filename_not_ends_with: String
  height: Float

  """All values that are not equal to given value."""
  height_not: Float

  """All values that are contained in given list."""
  height_in: [Float!]

  """All values that are not contained in given list."""
  height_not_in: [Float!]

  """All values less than the given value."""
  height_lt: Float

  """All values less than or equal the given value."""
  height_lte: Float

  """All values greater than the given value."""
  height_gt: Float

  """All values greater than or equal the given value."""
  height_gte: Float
  mimetype: String

  """All values that are not equal to given value."""
  mimetype_not: String

  """All values that are contained in given list."""
  mimetype_in: [String!]

  """All values that are not contained in given list."""
  mimetype_not_in: [String!]

  """All values less than the given value."""
  mimetype_lt: String

  """All values less than or equal the given value."""
  mimetype_lte: String

  """All values greater than the given value."""
  mimetype_gt: String

  """All values greater than or equal the given value."""
  mimetype_gte: String

  """All values containing the given string."""
  mimetype_contains: String

  """All values not containing the given string."""
  mimetype_not_contains: String

  """All values starting with the given string."""
  mimetype_starts_with: String

  """All values not starting with the given string."""
  mimetype_not_starts_with: String

  """All values ending with the given string."""
  mimetype_ends_with: String

  """All values not ending with the given string."""
  mimetype_not_ends_with: String
  encoding: String

  """All values that are not equal to given value."""
  encoding_not: String

  """All values that are contained in given list."""
  encoding_in: [String!]

  """All values that are not contained in given list."""
  encoding_not_in: [String!]

  """All values less than the given value."""
  encoding_lt: String

  """All values less than or equal the given value."""
  encoding_lte: String

  """All values greater than the given value."""
  encoding_gt: String

  """All values greater than or equal the given value."""
  encoding_gte: String

  """All values containing the given string."""
  encoding_contains: String

  """All values not containing the given string."""
  encoding_not_contains: String

  """All values starting with the given string."""
  encoding_starts_with: String

  """All values not starting with the given string."""
  encoding_not_starts_with: String

  """All values ending with the given string."""
  encoding_ends_with: String

  """All values not ending with the given string."""
  encoding_not_ends_with: String
  url: String

  """All values that are not equal to given value."""
  url_not: String

  """All values that are contained in given list."""
  url_in: [String!]

  """All values that are not contained in given list."""
  url_not_in: [String!]

  """All values less than the given value."""
  url_lt: String

  """All values less than or equal the given value."""
  url_lte: String

  """All values greater than the given value."""
  url_gt: String

  """All values greater than or equal the given value."""
  url_gte: String

  """All values containing the given string."""
  url_contains: String

  """All values not containing the given string."""
  url_not_contains: String

  """All values starting with the given string."""
  url_starts_with: String

  """All values not starting with the given string."""
  url_not_starts_with: String

  """All values ending with the given string."""
  url_ends_with: String

  """All values not ending with the given string."""
  url_not_ends_with: String
  width: Float

  """All values that are not equal to given value."""
  width_not: Float

  """All values that are contained in given list."""
  width_in: [Float!]

  """All values that are not contained in given list."""
  width_not_in: [Float!]

  """All values less than the given value."""
  width_lt: Float

  """All values less than or equal the given value."""
  width_lte: Float

  """All values greater than the given value."""
  width_gt: Float

  """All values greater than or equal the given value."""
  width_gte: Float
  user: UserWhereInput
}

input FileWhereUniqueInput {
  id: ID
  url: String
}

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createUser(data: UserCreateInput!): User!
  createPayment(data: PaymentCreateInput!): Payment!
  createFile(data: FileCreateInput!): File!
  createSubScription(data: SubScriptionCreateInput!): SubScription!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updatePayment(data: PaymentUpdateInput!, where: PaymentWhereUniqueInput!): Payment
  updateFile(data: FileUpdateInput!, where: FileWhereUniqueInput!): File
  updateSubScription(data: SubScriptionUpdateInput!, where: SubScriptionWhereUniqueInput!): SubScription
  deleteUser(where: UserWhereUniqueInput!): User
  deletePayment(where: PaymentWhereUniqueInput!): Payment
  deleteFile(where: FileWhereUniqueInput!): File
  deleteSubScription(where: SubScriptionWhereUniqueInput!): SubScription
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertPayment(where: PaymentWhereUniqueInput!, create: PaymentCreateInput!, update: PaymentUpdateInput!): Payment!
  upsertFile(where: FileWhereUniqueInput!, create: FileCreateInput!, update: FileUpdateInput!): File!
  upsertSubScription(where: SubScriptionWhereUniqueInput!, create: SubScriptionCreateInput!, update: SubScriptionUpdateInput!): SubScription!
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  updateManyPayments(data: PaymentUpdateManyMutationInput!, where: PaymentWhereInput): BatchPayload!
  updateManyFiles(data: FileUpdateManyMutationInput!, where: FileWhereInput): BatchPayload!
  updateManySubScriptions(data: SubScriptionUpdateManyMutationInput!, where: SubScriptionWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyPayments(where: PaymentWhereInput): BatchPayload!
  deleteManyFiles(where: FileWhereInput): BatchPayload!
  deleteManySubScriptions(where: SubScriptionWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Payment implements Node {
  id: ID!
  customerId: String!
  methods: [String!]!
  user: User!
}

"""A connection to a list of items."""
type PaymentConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [PaymentEdge]!
  aggregate: AggregatePayment!
}

input PaymentCreateInput {
  id: ID
  customerId: String!
  methods: PaymentCreatemethodsInput
  user: UserCreateOneWithoutPaymentInput!
}

input PaymentCreatemethodsInput {
  set: [String!]
}

input PaymentCreateOneWithoutUserInput {
  create: PaymentCreateWithoutUserInput
  connect: PaymentWhereUniqueInput
}

input PaymentCreateWithoutUserInput {
  id: ID
  customerId: String!
  methods: PaymentCreatemethodsInput
}

"""An edge in a connection."""
type PaymentEdge {
  """The item at the end of the edge."""
  node: Payment!

  """A cursor for use in pagination."""
  cursor: String!
}

enum PaymentOrderByInput {
  id_ASC
  id_DESC
  customerId_ASC
  customerId_DESC
}

type PaymentPreviousValues {
  id: ID!
  customerId: String!
  methods: [String!]!
}

type PaymentSubscriptionPayload {
  mutation: MutationType!
  node: Payment
  updatedFields: [String!]
  previousValues: PaymentPreviousValues
}

input PaymentSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [PaymentSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [PaymentSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PaymentSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: PaymentWhereInput
}

input PaymentUpdateInput {
  customerId: String
  methods: PaymentUpdatemethodsInput
  user: UserUpdateOneRequiredWithoutPaymentInput
}

input PaymentUpdateManyMutationInput {
  customerId: String
  methods: PaymentUpdatemethodsInput
}

input PaymentUpdatemethodsInput {
  set: [String!]
}

input PaymentUpdateOneWithoutUserInput {
  create: PaymentCreateWithoutUserInput
  connect: PaymentWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: PaymentUpdateWithoutUserDataInput
  upsert: PaymentUpsertWithoutUserInput
}

input PaymentUpdateWithoutUserDataInput {
  customerId: String
  methods: PaymentUpdatemethodsInput
}

input PaymentUpsertWithoutUserInput {
  update: PaymentUpdateWithoutUserDataInput!
  create: PaymentCreateWithoutUserInput!
}

input PaymentWhereInput {
  """Logical AND on all given filters."""
  AND: [PaymentWhereInput!]

  """Logical OR on all given filters."""
  OR: [PaymentWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [PaymentWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  customerId: String

  """All values that are not equal to given value."""
  customerId_not: String

  """All values that are contained in given list."""
  customerId_in: [String!]

  """All values that are not contained in given list."""
  customerId_not_in: [String!]

  """All values less than the given value."""
  customerId_lt: String

  """All values less than or equal the given value."""
  customerId_lte: String

  """All values greater than the given value."""
  customerId_gt: String

  """All values greater than or equal the given value."""
  customerId_gte: String

  """All values containing the given string."""
  customerId_contains: String

  """All values not containing the given string."""
  customerId_not_contains: String

  """All values starting with the given string."""
  customerId_starts_with: String

  """All values not starting with the given string."""
  customerId_not_starts_with: String

  """All values ending with the given string."""
  customerId_ends_with: String

  """All values not ending with the given string."""
  customerId_not_ends_with: String
  user: UserWhereInput
}

input PaymentWhereUniqueInput {
  id: ID
}

enum Permission {
  SUPERADMIN
  ADMIN
  USER
  ARTIST
  PERMISSIONUPDATE
}

type Query {
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  payments(where: PaymentWhereInput, orderBy: PaymentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Payment]!
  files(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [File]!
  subScriptions(where: SubScriptionWhereInput, orderBy: SubScriptionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [SubScription]!
  user(where: UserWhereUniqueInput!): User
  payment(where: PaymentWhereUniqueInput!): Payment
  file(where: FileWhereUniqueInput!): File
  subScription(where: SubScriptionWhereUniqueInput!): SubScription
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  paymentsConnection(where: PaymentWhereInput, orderBy: PaymentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PaymentConnection!
  filesConnection(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): FileConnection!
  subScriptionsConnection(where: SubScriptionWhereInput, orderBy: SubScriptionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SubScriptionConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  payment(where: PaymentSubscriptionWhereInput): PaymentSubscriptionPayload
  file(where: FileSubscriptionWhereInput): FileSubscriptionPayload
  subScription(where: SubScriptionSubscriptionWhereInput): SubScriptionSubscriptionPayload
}

type SubScription implements Node {
  id: ID!
  subscriptionId: String!
}

"""A connection to a list of items."""
type SubScriptionConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [SubScriptionEdge]!
  aggregate: AggregateSubScription!
}

input SubScriptionCreateInput {
  id: ID
  subscriptionId: String!
}

input SubScriptionCreateOneInput {
  create: SubScriptionCreateInput
  connect: SubScriptionWhereUniqueInput
}

"""An edge in a connection."""
type SubScriptionEdge {
  """The item at the end of the edge."""
  node: SubScription!

  """A cursor for use in pagination."""
  cursor: String!
}

enum SubScriptionOrderByInput {
  id_ASC
  id_DESC
  subscriptionId_ASC
  subscriptionId_DESC
}

type SubScriptionPreviousValues {
  id: ID!
  subscriptionId: String!
}

type SubScriptionSubscriptionPayload {
  mutation: MutationType!
  node: SubScription
  updatedFields: [String!]
  previousValues: SubScriptionPreviousValues
}

input SubScriptionSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [SubScriptionSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [SubScriptionSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SubScriptionSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: SubScriptionWhereInput
}

input SubScriptionUpdateDataInput {
  subscriptionId: String
}

input SubScriptionUpdateInput {
  subscriptionId: String
}

input SubScriptionUpdateManyMutationInput {
  subscriptionId: String
}

input SubScriptionUpdateOneInput {
  create: SubScriptionCreateInput
  connect: SubScriptionWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: SubScriptionUpdateDataInput
  upsert: SubScriptionUpsertNestedInput
}

input SubScriptionUpsertNestedInput {
  update: SubScriptionUpdateDataInput!
  create: SubScriptionCreateInput!
}

input SubScriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [SubScriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [SubScriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SubScriptionWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  subscriptionId: String

  """All values that are not equal to given value."""
  subscriptionId_not: String

  """All values that are contained in given list."""
  subscriptionId_in: [String!]

  """All values that are not contained in given list."""
  subscriptionId_not_in: [String!]

  """All values less than the given value."""
  subscriptionId_lt: String

  """All values less than or equal the given value."""
  subscriptionId_lte: String

  """All values greater than the given value."""
  subscriptionId_gt: String

  """All values greater than or equal the given value."""
  subscriptionId_gte: String

  """All values containing the given string."""
  subscriptionId_contains: String

  """All values not containing the given string."""
  subscriptionId_not_contains: String

  """All values starting with the given string."""
  subscriptionId_starts_with: String

  """All values not starting with the given string."""
  subscriptionId_not_starts_with: String

  """All values ending with the given string."""
  subscriptionId_ends_with: String

  """All values not ending with the given string."""
  subscriptionId_not_ends_with: String
}

input SubScriptionWhereUniqueInput {
  id: ID
}

type User implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  email: String!
  password: String!
  emailConfirmToken: Float!
  emailConfirmed: Boolean
  payment: Payment
  permissions: [Permission!]!
  subscription: SubScription
  files(where: FileWhereInput, orderBy: FileOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [File!]
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  email: String!
  password: String!
  emailConfirmToken: Float!
  emailConfirmed: Boolean
  permissions: UserCreatepermissionsInput
  payment: PaymentCreateOneWithoutUserInput
  subscription: SubScriptionCreateOneInput
  files: FileCreateManyWithoutUserInput
}

input UserCreateOneWithoutFilesInput {
  create: UserCreateWithoutFilesInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutPaymentInput {
  create: UserCreateWithoutPaymentInput
  connect: UserWhereUniqueInput
}

input UserCreatepermissionsInput {
  set: [Permission!]
}

input UserCreateWithoutFilesInput {
  id: ID
  email: String!
  password: String!
  emailConfirmToken: Float!
  emailConfirmed: Boolean
  permissions: UserCreatepermissionsInput
  payment: PaymentCreateOneWithoutUserInput
  subscription: SubScriptionCreateOneInput
}

input UserCreateWithoutPaymentInput {
  id: ID
  email: String!
  password: String!
  emailConfirmToken: Float!
  emailConfirmed: Boolean
  permissions: UserCreatepermissionsInput
  subscription: SubScriptionCreateOneInput
  files: FileCreateManyWithoutUserInput
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  emailConfirmToken_ASC
  emailConfirmToken_DESC
  emailConfirmed_ASC
  emailConfirmed_DESC
}

type UserPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  email: String!
  password: String!
  emailConfirmToken: Float!
  emailConfirmed: Boolean
  permissions: [Permission!]!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateInput {
  email: String
  password: String
  emailConfirmToken: Float
  emailConfirmed: Boolean
  permissions: UserUpdatepermissionsInput
  payment: PaymentUpdateOneWithoutUserInput
  subscription: SubScriptionUpdateOneInput
  files: FileUpdateManyWithoutUserInput
}

input UserUpdateManyMutationInput {
  email: String
  password: String
  emailConfirmToken: Float
  emailConfirmed: Boolean
  permissions: UserUpdatepermissionsInput
}

input UserUpdateOneRequiredWithoutFilesInput {
  create: UserCreateWithoutFilesInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutFilesDataInput
  upsert: UserUpsertWithoutFilesInput
}

input UserUpdateOneRequiredWithoutPaymentInput {
  create: UserCreateWithoutPaymentInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutPaymentDataInput
  upsert: UserUpsertWithoutPaymentInput
}

input UserUpdatepermissionsInput {
  set: [Permission!]
}

input UserUpdateWithoutFilesDataInput {
  email: String
  password: String
  emailConfirmToken: Float
  emailConfirmed: Boolean
  permissions: UserUpdatepermissionsInput
  payment: PaymentUpdateOneWithoutUserInput
  subscription: SubScriptionUpdateOneInput
}

input UserUpdateWithoutPaymentDataInput {
  email: String
  password: String
  emailConfirmToken: Float
  emailConfirmed: Boolean
  permissions: UserUpdatepermissionsInput
  subscription: SubScriptionUpdateOneInput
  files: FileUpdateManyWithoutUserInput
}

input UserUpsertWithoutFilesInput {
  update: UserUpdateWithoutFilesDataInput!
  create: UserCreateWithoutFilesInput!
}

input UserUpsertWithoutPaymentInput {
  update: UserUpdateWithoutPaymentDataInput!
  create: UserCreateWithoutPaymentInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  emailConfirmToken: Float

  """All values that are not equal to given value."""
  emailConfirmToken_not: Float

  """All values that are contained in given list."""
  emailConfirmToken_in: [Float!]

  """All values that are not contained in given list."""
  emailConfirmToken_not_in: [Float!]

  """All values less than the given value."""
  emailConfirmToken_lt: Float

  """All values less than or equal the given value."""
  emailConfirmToken_lte: Float

  """All values greater than the given value."""
  emailConfirmToken_gt: Float

  """All values greater than or equal the given value."""
  emailConfirmToken_gte: Float
  emailConfirmed: Boolean

  """All values that are not equal to given value."""
  emailConfirmed_not: Boolean
  payment: PaymentWhereInput
  subscription: SubScriptionWhereInput
  files_every: FileWhereInput
  files_some: FileWhereInput
  files_none: FileWhereInput
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'email_ASC' |
  'email_DESC' |
  'password_ASC' |
  'password_DESC' |
  'emailConfirmToken_ASC' |
  'emailConfirmToken_DESC' |
  'emailConfirmed_ASC' |
  'emailConfirmed_DESC'

export type Permission =   'SUPERADMIN' |
  'ADMIN' |
  'USER' |
  'ARTIST' |
  'PERMISSIONUPDATE'

export type FileOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'filename_ASC' |
  'filename_DESC' |
  'height_ASC' |
  'height_DESC' |
  'mimetype_ASC' |
  'mimetype_DESC' |
  'encoding_ASC' |
  'encoding_DESC' |
  'url_ASC' |
  'url_DESC' |
  'width_ASC' |
  'width_DESC'

export type PaymentOrderByInput =   'id_ASC' |
  'id_DESC' |
  'customerId_ASC' |
  'customerId_DESC'

export type SubScriptionOrderByInput =   'id_ASC' |
  'id_DESC' |
  'subscriptionId_ASC' |
  'subscriptionId_DESC'

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput
  OR?: UserWhereInput[] | UserWhereInput
  NOT?: UserWhereInput[] | UserWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  email?: String
  email_not?: String
  email_in?: String[] | String
  email_not_in?: String[] | String
  email_lt?: String
  email_lte?: String
  email_gt?: String
  email_gte?: String
  email_contains?: String
  email_not_contains?: String
  email_starts_with?: String
  email_not_starts_with?: String
  email_ends_with?: String
  email_not_ends_with?: String
  password?: String
  password_not?: String
  password_in?: String[] | String
  password_not_in?: String[] | String
  password_lt?: String
  password_lte?: String
  password_gt?: String
  password_gte?: String
  password_contains?: String
  password_not_contains?: String
  password_starts_with?: String
  password_not_starts_with?: String
  password_ends_with?: String
  password_not_ends_with?: String
  emailConfirmToken?: Float
  emailConfirmToken_not?: Float
  emailConfirmToken_in?: Float[] | Float
  emailConfirmToken_not_in?: Float[] | Float
  emailConfirmToken_lt?: Float
  emailConfirmToken_lte?: Float
  emailConfirmToken_gt?: Float
  emailConfirmToken_gte?: Float
  emailConfirmed?: Boolean
  emailConfirmed_not?: Boolean
  payment?: PaymentWhereInput
  subscription?: SubScriptionWhereInput
  files_every?: FileWhereInput
  files_some?: FileWhereInput
  files_none?: FileWhereInput
}

export interface PaymentWhereInput {
  AND?: PaymentWhereInput[] | PaymentWhereInput
  OR?: PaymentWhereInput[] | PaymentWhereInput
  NOT?: PaymentWhereInput[] | PaymentWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  customerId?: String
  customerId_not?: String
  customerId_in?: String[] | String
  customerId_not_in?: String[] | String
  customerId_lt?: String
  customerId_lte?: String
  customerId_gt?: String
  customerId_gte?: String
  customerId_contains?: String
  customerId_not_contains?: String
  customerId_starts_with?: String
  customerId_not_starts_with?: String
  customerId_ends_with?: String
  customerId_not_ends_with?: String
  user?: UserWhereInput
}

export interface SubScriptionWhereInput {
  AND?: SubScriptionWhereInput[] | SubScriptionWhereInput
  OR?: SubScriptionWhereInput[] | SubScriptionWhereInput
  NOT?: SubScriptionWhereInput[] | SubScriptionWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  subscriptionId?: String
  subscriptionId_not?: String
  subscriptionId_in?: String[] | String
  subscriptionId_not_in?: String[] | String
  subscriptionId_lt?: String
  subscriptionId_lte?: String
  subscriptionId_gt?: String
  subscriptionId_gte?: String
  subscriptionId_contains?: String
  subscriptionId_not_contains?: String
  subscriptionId_starts_with?: String
  subscriptionId_not_starts_with?: String
  subscriptionId_ends_with?: String
  subscriptionId_not_ends_with?: String
}

export interface FileWhereInput {
  AND?: FileWhereInput[] | FileWhereInput
  OR?: FileWhereInput[] | FileWhereInput
  NOT?: FileWhereInput[] | FileWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  filename?: String
  filename_not?: String
  filename_in?: String[] | String
  filename_not_in?: String[] | String
  filename_lt?: String
  filename_lte?: String
  filename_gt?: String
  filename_gte?: String
  filename_contains?: String
  filename_not_contains?: String
  filename_starts_with?: String
  filename_not_starts_with?: String
  filename_ends_with?: String
  filename_not_ends_with?: String
  height?: Float
  height_not?: Float
  height_in?: Float[] | Float
  height_not_in?: Float[] | Float
  height_lt?: Float
  height_lte?: Float
  height_gt?: Float
  height_gte?: Float
  mimetype?: String
  mimetype_not?: String
  mimetype_in?: String[] | String
  mimetype_not_in?: String[] | String
  mimetype_lt?: String
  mimetype_lte?: String
  mimetype_gt?: String
  mimetype_gte?: String
  mimetype_contains?: String
  mimetype_not_contains?: String
  mimetype_starts_with?: String
  mimetype_not_starts_with?: String
  mimetype_ends_with?: String
  mimetype_not_ends_with?: String
  encoding?: String
  encoding_not?: String
  encoding_in?: String[] | String
  encoding_not_in?: String[] | String
  encoding_lt?: String
  encoding_lte?: String
  encoding_gt?: String
  encoding_gte?: String
  encoding_contains?: String
  encoding_not_contains?: String
  encoding_starts_with?: String
  encoding_not_starts_with?: String
  encoding_ends_with?: String
  encoding_not_ends_with?: String
  url?: String
  url_not?: String
  url_in?: String[] | String
  url_not_in?: String[] | String
  url_lt?: String
  url_lte?: String
  url_gt?: String
  url_gte?: String
  url_contains?: String
  url_not_contains?: String
  url_starts_with?: String
  url_not_starts_with?: String
  url_ends_with?: String
  url_not_ends_with?: String
  width?: Float
  width_not?: Float
  width_in?: Float[] | Float
  width_not_in?: Float[] | Float
  width_lt?: Float
  width_lte?: Float
  width_gt?: Float
  width_gte?: Float
  user?: UserWhereInput
}

export interface UserWhereUniqueInput {
  id?: ID_Input
  email?: String
}

export interface PaymentWhereUniqueInput {
  id?: ID_Input
}

export interface FileWhereUniqueInput {
  id?: ID_Input
  url?: String
}

export interface SubScriptionWhereUniqueInput {
  id?: ID_Input
}

export interface UserCreateInput {
  id?: ID_Input
  email: String
  password: String
  emailConfirmToken: Float
  emailConfirmed?: Boolean
  permissions?: UserCreatepermissionsInput
  payment?: PaymentCreateOneWithoutUserInput
  subscription?: SubScriptionCreateOneInput
  files?: FileCreateManyWithoutUserInput
}

export interface UserCreatepermissionsInput {
  set?: Permission[] | Permission
}

export interface PaymentCreateOneWithoutUserInput {
  create?: PaymentCreateWithoutUserInput
  connect?: PaymentWhereUniqueInput
}

export interface PaymentCreateWithoutUserInput {
  id?: ID_Input
  customerId: String
  methods?: PaymentCreatemethodsInput
}

export interface PaymentCreatemethodsInput {
  set?: String[] | String
}

export interface SubScriptionCreateOneInput {
  create?: SubScriptionCreateInput
  connect?: SubScriptionWhereUniqueInput
}

export interface SubScriptionCreateInput {
  id?: ID_Input
  subscriptionId: String
}

export interface FileCreateManyWithoutUserInput {
  create?: FileCreateWithoutUserInput[] | FileCreateWithoutUserInput
  connect?: FileWhereUniqueInput[] | FileWhereUniqueInput
}

export interface FileCreateWithoutUserInput {
  id?: ID_Input
  filename: String
  height?: Float
  mimetype: String
  encoding?: String
  url: String
  width?: Float
}

export interface PaymentCreateInput {
  id?: ID_Input
  customerId: String
  methods?: PaymentCreatemethodsInput
  user: UserCreateOneWithoutPaymentInput
}

export interface UserCreateOneWithoutPaymentInput {
  create?: UserCreateWithoutPaymentInput
  connect?: UserWhereUniqueInput
}

export interface UserCreateWithoutPaymentInput {
  id?: ID_Input
  email: String
  password: String
  emailConfirmToken: Float
  emailConfirmed?: Boolean
  permissions?: UserCreatepermissionsInput
  subscription?: SubScriptionCreateOneInput
  files?: FileCreateManyWithoutUserInput
}

export interface FileCreateInput {
  id?: ID_Input
  filename: String
  height?: Float
  mimetype: String
  encoding?: String
  url: String
  width?: Float
  user: UserCreateOneWithoutFilesInput
}

export interface UserCreateOneWithoutFilesInput {
  create?: UserCreateWithoutFilesInput
  connect?: UserWhereUniqueInput
}

export interface UserCreateWithoutFilesInput {
  id?: ID_Input
  email: String
  password: String
  emailConfirmToken: Float
  emailConfirmed?: Boolean
  permissions?: UserCreatepermissionsInput
  payment?: PaymentCreateOneWithoutUserInput
  subscription?: SubScriptionCreateOneInput
}

export interface UserUpdateInput {
  email?: String
  password?: String
  emailConfirmToken?: Float
  emailConfirmed?: Boolean
  permissions?: UserUpdatepermissionsInput
  payment?: PaymentUpdateOneWithoutUserInput
  subscription?: SubScriptionUpdateOneInput
  files?: FileUpdateManyWithoutUserInput
}

export interface UserUpdatepermissionsInput {
  set?: Permission[] | Permission
}

export interface PaymentUpdateOneWithoutUserInput {
  create?: PaymentCreateWithoutUserInput
  connect?: PaymentWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: PaymentUpdateWithoutUserDataInput
  upsert?: PaymentUpsertWithoutUserInput
}

export interface PaymentUpdateWithoutUserDataInput {
  customerId?: String
  methods?: PaymentUpdatemethodsInput
}

export interface PaymentUpdatemethodsInput {
  set?: String[] | String
}

export interface PaymentUpsertWithoutUserInput {
  update: PaymentUpdateWithoutUserDataInput
  create: PaymentCreateWithoutUserInput
}

export interface SubScriptionUpdateOneInput {
  create?: SubScriptionCreateInput
  connect?: SubScriptionWhereUniqueInput
  disconnect?: Boolean
  delete?: Boolean
  update?: SubScriptionUpdateDataInput
  upsert?: SubScriptionUpsertNestedInput
}

export interface SubScriptionUpdateDataInput {
  subscriptionId?: String
}

export interface SubScriptionUpsertNestedInput {
  update: SubScriptionUpdateDataInput
  create: SubScriptionCreateInput
}

export interface FileUpdateManyWithoutUserInput {
  create?: FileCreateWithoutUserInput[] | FileCreateWithoutUserInput
  connect?: FileWhereUniqueInput[] | FileWhereUniqueInput
  set?: FileWhereUniqueInput[] | FileWhereUniqueInput
  disconnect?: FileWhereUniqueInput[] | FileWhereUniqueInput
  delete?: FileWhereUniqueInput[] | FileWhereUniqueInput
  update?: FileUpdateWithWhereUniqueWithoutUserInput[] | FileUpdateWithWhereUniqueWithoutUserInput
  updateMany?: FileUpdateManyWithWhereNestedInput[] | FileUpdateManyWithWhereNestedInput
  deleteMany?: FileScalarWhereInput[] | FileScalarWhereInput
  upsert?: FileUpsertWithWhereUniqueWithoutUserInput[] | FileUpsertWithWhereUniqueWithoutUserInput
}

export interface FileUpdateWithWhereUniqueWithoutUserInput {
  where: FileWhereUniqueInput
  data: FileUpdateWithoutUserDataInput
}

export interface FileUpdateWithoutUserDataInput {
  filename?: String
  height?: Float
  mimetype?: String
  encoding?: String
  url?: String
  width?: Float
}

export interface FileUpdateManyWithWhereNestedInput {
  where: FileScalarWhereInput
  data: FileUpdateManyDataInput
}

export interface FileScalarWhereInput {
  AND?: FileScalarWhereInput[] | FileScalarWhereInput
  OR?: FileScalarWhereInput[] | FileScalarWhereInput
  NOT?: FileScalarWhereInput[] | FileScalarWhereInput
  id?: ID_Input
  id_not?: ID_Input
  id_in?: ID_Input[] | ID_Input
  id_not_in?: ID_Input[] | ID_Input
  id_lt?: ID_Input
  id_lte?: ID_Input
  id_gt?: ID_Input
  id_gte?: ID_Input
  id_contains?: ID_Input
  id_not_contains?: ID_Input
  id_starts_with?: ID_Input
  id_not_starts_with?: ID_Input
  id_ends_with?: ID_Input
  id_not_ends_with?: ID_Input
  createdAt?: DateTime
  createdAt_not?: DateTime
  createdAt_in?: DateTime[] | DateTime
  createdAt_not_in?: DateTime[] | DateTime
  createdAt_lt?: DateTime
  createdAt_lte?: DateTime
  createdAt_gt?: DateTime
  createdAt_gte?: DateTime
  updatedAt?: DateTime
  updatedAt_not?: DateTime
  updatedAt_in?: DateTime[] | DateTime
  updatedAt_not_in?: DateTime[] | DateTime
  updatedAt_lt?: DateTime
  updatedAt_lte?: DateTime
  updatedAt_gt?: DateTime
  updatedAt_gte?: DateTime
  filename?: String
  filename_not?: String
  filename_in?: String[] | String
  filename_not_in?: String[] | String
  filename_lt?: String
  filename_lte?: String
  filename_gt?: String
  filename_gte?: String
  filename_contains?: String
  filename_not_contains?: String
  filename_starts_with?: String
  filename_not_starts_with?: String
  filename_ends_with?: String
  filename_not_ends_with?: String
  height?: Float
  height_not?: Float
  height_in?: Float[] | Float
  height_not_in?: Float[] | Float
  height_lt?: Float
  height_lte?: Float
  height_gt?: Float
  height_gte?: Float
  mimetype?: String
  mimetype_not?: String
  mimetype_in?: String[] | String
  mimetype_not_in?: String[] | String
  mimetype_lt?: String
  mimetype_lte?: String
  mimetype_gt?: String
  mimetype_gte?: String
  mimetype_contains?: String
  mimetype_not_contains?: String
  mimetype_starts_with?: String
  mimetype_not_starts_with?: String
  mimetype_ends_with?: String
  mimetype_not_ends_with?: String
  encoding?: String
  encoding_not?: String
  encoding_in?: String[] | String
  encoding_not_in?: String[] | String
  encoding_lt?: String
  encoding_lte?: String
  encoding_gt?: String
  encoding_gte?: String
  encoding_contains?: String
  encoding_not_contains?: String
  encoding_starts_with?: String
  encoding_not_starts_with?: String
  encoding_ends_with?: String
  encoding_not_ends_with?: String
  url?: String
  url_not?: String
  url_in?: String[] | String
  url_not_in?: String[] | String
  url_lt?: String
  url_lte?: String
  url_gt?: String
  url_gte?: String
  url_contains?: String
  url_not_contains?: String
  url_starts_with?: String
  url_not_starts_with?: String
  url_ends_with?: String
  url_not_ends_with?: String
  width?: Float
  width_not?: Float
  width_in?: Float[] | Float
  width_not_in?: Float[] | Float
  width_lt?: Float
  width_lte?: Float
  width_gt?: Float
  width_gte?: Float
}

export interface FileUpdateManyDataInput {
  filename?: String
  height?: Float
  mimetype?: String
  encoding?: String
  url?: String
  width?: Float
}

export interface FileUpsertWithWhereUniqueWithoutUserInput {
  where: FileWhereUniqueInput
  update: FileUpdateWithoutUserDataInput
  create: FileCreateWithoutUserInput
}

export interface PaymentUpdateInput {
  customerId?: String
  methods?: PaymentUpdatemethodsInput
  user?: UserUpdateOneRequiredWithoutPaymentInput
}

export interface UserUpdateOneRequiredWithoutPaymentInput {
  create?: UserCreateWithoutPaymentInput
  connect?: UserWhereUniqueInput
  update?: UserUpdateWithoutPaymentDataInput
  upsert?: UserUpsertWithoutPaymentInput
}

export interface UserUpdateWithoutPaymentDataInput {
  email?: String
  password?: String
  emailConfirmToken?: Float
  emailConfirmed?: Boolean
  permissions?: UserUpdatepermissionsInput
  subscription?: SubScriptionUpdateOneInput
  files?: FileUpdateManyWithoutUserInput
}

export interface UserUpsertWithoutPaymentInput {
  update: UserUpdateWithoutPaymentDataInput
  create: UserCreateWithoutPaymentInput
}

export interface FileUpdateInput {
  filename?: String
  height?: Float
  mimetype?: String
  encoding?: String
  url?: String
  width?: Float
  user?: UserUpdateOneRequiredWithoutFilesInput
}

export interface UserUpdateOneRequiredWithoutFilesInput {
  create?: UserCreateWithoutFilesInput
  connect?: UserWhereUniqueInput
  update?: UserUpdateWithoutFilesDataInput
  upsert?: UserUpsertWithoutFilesInput
}

export interface UserUpdateWithoutFilesDataInput {
  email?: String
  password?: String
  emailConfirmToken?: Float
  emailConfirmed?: Boolean
  permissions?: UserUpdatepermissionsInput
  payment?: PaymentUpdateOneWithoutUserInput
  subscription?: SubScriptionUpdateOneInput
}

export interface UserUpsertWithoutFilesInput {
  update: UserUpdateWithoutFilesDataInput
  create: UserCreateWithoutFilesInput
}

export interface SubScriptionUpdateInput {
  subscriptionId?: String
}

export interface UserUpdateManyMutationInput {
  email?: String
  password?: String
  emailConfirmToken?: Float
  emailConfirmed?: Boolean
  permissions?: UserUpdatepermissionsInput
}

export interface PaymentUpdateManyMutationInput {
  customerId?: String
  methods?: PaymentUpdatemethodsInput
}

export interface FileUpdateManyMutationInput {
  filename?: String
  height?: Float
  mimetype?: String
  encoding?: String
  url?: String
  width?: Float
}

export interface SubScriptionUpdateManyMutationInput {
  subscriptionId?: String
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: UserWhereInput
}

export interface PaymentSubscriptionWhereInput {
  AND?: PaymentSubscriptionWhereInput[] | PaymentSubscriptionWhereInput
  OR?: PaymentSubscriptionWhereInput[] | PaymentSubscriptionWhereInput
  NOT?: PaymentSubscriptionWhereInput[] | PaymentSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: PaymentWhereInput
}

export interface FileSubscriptionWhereInput {
  AND?: FileSubscriptionWhereInput[] | FileSubscriptionWhereInput
  OR?: FileSubscriptionWhereInput[] | FileSubscriptionWhereInput
  NOT?: FileSubscriptionWhereInput[] | FileSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: FileWhereInput
}

export interface SubScriptionSubscriptionWhereInput {
  AND?: SubScriptionSubscriptionWhereInput[] | SubScriptionSubscriptionWhereInput
  OR?: SubScriptionSubscriptionWhereInput[] | SubScriptionSubscriptionWhereInput
  NOT?: SubScriptionSubscriptionWhereInput[] | SubScriptionSubscriptionWhereInput
  mutation_in?: MutationType[] | MutationType
  updatedFields_contains?: String
  updatedFields_contains_every?: String[] | String
  updatedFields_contains_some?: String[] | String
  node?: SubScriptionWhereInput
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface User extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  email: String
  password: String
  emailConfirmToken: Float
  emailConfirmed?: Boolean
  payment?: Payment
  permissions: Permission[]
  subscription?: SubScription
  files?: File[]
}

export interface Payment extends Node {
  id: ID_Output
  customerId: String
  methods: String[]
  user: User
}

export interface SubScription extends Node {
  id: ID_Output
  subscriptionId: String
}

export interface File extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  filename: String
  height?: Float
  mimetype: String
  encoding?: String
  url: String
  width?: Float
  user: User
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: UserEdge[]
  aggregate: AggregateUser
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String
  endCursor?: String
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface AggregateUser {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface PaymentConnection {
  pageInfo: PageInfo
  edges: PaymentEdge[]
  aggregate: AggregatePayment
}

/*
 * An edge in a connection.

 */
export interface PaymentEdge {
  node: Payment
  cursor: String
}

export interface AggregatePayment {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface FileConnection {
  pageInfo: PageInfo
  edges: FileEdge[]
  aggregate: AggregateFile
}

/*
 * An edge in a connection.

 */
export interface FileEdge {
  node: File
  cursor: String
}

export interface AggregateFile {
  count: Int
}

/*
 * A connection to a list of items.

 */
export interface SubScriptionConnection {
  pageInfo: PageInfo
  edges: SubScriptionEdge[]
  aggregate: AggregateSubScription
}

/*
 * An edge in a connection.

 */
export interface SubScriptionEdge {
  node: SubScription
  cursor: String
}

export interface AggregateSubScription {
  count: Int
}

export interface BatchPayload {
  count: Long
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User
  updatedFields?: String[]
  previousValues?: UserPreviousValues
}

export interface UserPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  email: String
  password: String
  emailConfirmToken: Float
  emailConfirmed?: Boolean
  permissions: Permission[]
}

export interface PaymentSubscriptionPayload {
  mutation: MutationType
  node?: Payment
  updatedFields?: String[]
  previousValues?: PaymentPreviousValues
}

export interface PaymentPreviousValues {
  id: ID_Output
  customerId: String
  methods: String[]
}

export interface FileSubscriptionPayload {
  mutation: MutationType
  node?: File
  updatedFields?: String[]
  previousValues?: FilePreviousValues
}

export interface FilePreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  filename: String
  height?: Float
  mimetype: String
  encoding?: String
  url: String
  width?: Float
}

export interface SubScriptionSubscriptionPayload {
  mutation: MutationType
  node?: SubScription
  updatedFields?: String[]
  previousValues?: SubScriptionPreviousValues
}

export interface SubScriptionPreviousValues {
  id: ID_Output
  subscriptionId: String
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

export type DateTime = Date | string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string

/*
The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point).
*/
export type Float = number

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string
import { Db, MongoClient } from 'mongodb';

const { URL, DB_NAME } = process.env;

if (!URL) {
  throw new Error('mongo url must be indicated');
}

if (!DB_NAME) {
  throw new Error('mongo name must be indicated');
}

let connection: Db;

export const getConnection = async (): Promise<Db> => {
  if (!connection) {
    connection = (await MongoClient.connect(URL)).db(DB_NAME);
  }

  return connection;
};

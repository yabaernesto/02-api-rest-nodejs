// biome-ignore lint/style/useImportType: <explanation>
import { knex as setupKnex, Knex } from 'knex'
import { env } from './env'

export const config: Knex = {
  client: 'sqlite3',
  connection: {
    filename: env.DATABASE_URL,
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

export const knex = setupKnex(config)

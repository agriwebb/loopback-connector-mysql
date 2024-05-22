declare module 'loopback-connector-mysql' {
  export class MySQL {
    constructor(settings: { host: string; port: number; user: string; password: string })

    public readonly name: 'mysql'

    public connect(callback?: (error: unknown) => void): void

    public executeSQL(
      sql: string,
      params: unknown[],
      options: { queryOptions?: Partial<import('mysql').QueryOptions> },
      cb: (err: Error, result: unknown[]) => void,
    ): void
  }
}

declare namespace NodeJS {
  export type ProcessEnv = {
    BCRYPT_SALT_ROUNDS: string;
    ACCESS_TOKEN_EXPIRE_IN: string;
    ACCESS_TOKEN_SECRET: string;
    PORT: number;
    DATABASE_URL: string;
  };
}

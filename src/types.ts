import type { HashAlgorithm } from './types.hashes';
export type { HashAlgorithm };

export type FileSystemCacheOptions = {
  basePath?: string;
  ns?: any;
  ttl?: number;
  hash?: HashAlgorithm | ((value: any) => string);
  extension?: string;
  toJson?: ((value: any, ttl: number) => string);
};

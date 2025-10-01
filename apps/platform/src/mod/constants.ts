import { VippstarDefaultConfig } from 'libs/sermas/vippstar.defaults';

export const WELL_KNOWN_PATH = '/.well-known/sermas.json';

export const OPENAPI_BASEURL = '/api/swagger';
export const OPENAPI_PUBLIC_URL =
  process.env.OPENAPI_PUBLIC_URL ||
  process.env.SWAGGER_URL ||
  VippstarDefaultConfig.OPENAPI_PUBLIC_URL;

export const ASYNCAPI_BASEURL = '/api/async';
export const ASYNCAPI_PUBLIC_URL =
  process.env.ASYNCAPI_PUBLIC_URL || VippstarDefaultConfig.ASYNCAPI_PUBLIC_URL;

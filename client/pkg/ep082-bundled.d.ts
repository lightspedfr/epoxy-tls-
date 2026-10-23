/* tslint:disable */
/* eslint-disable */
/**
 * The `ReadableStreamType` enum.
 *
 * *This API requires the following crate features to be activated: `ReadableStreamType`*
 */
type ReadableStreamType = "bytes";

type Ep082IoStream = {
	read: ReadableStream<Uint8Array>,
	write: WritableStream<Uint8Array>,
};
type Ep082WispTransportResult = { read: ReadableStream<ArrayBuffer>, write: WritableStream<Uint8Array> };
type Ep082WispTransport = string | (() => Promise<Ep082WispTransportResult> | Ep082WispTransportResult);
type Ep082WebSocketInput = string | ArrayBuffer;
type Ep082WebSocketHeadersInput = Headers | { [key: string]: string };
type Ep082UrlInput = string | URL;


export class Ep082Client {
/**
** Return copy of self without private attributes.
*/
  toJSON(): Object;
/**
* Return stringified version of self.
*/
  toString(): string;
  free(): void;
  connect_tcp(url: Ep082UrlInput): Promise<Ep082IoStream>;
  connect_tls(url: Ep082UrlInput): Promise<Ep082IoStream>;
  connect_udp(url: Ep082UrlInput): Promise<Ep082IoStream>;
  connect_websocket(handlers: Ep082Handlers, url: Ep082UrlInput, protocols: string[], headers: Ep082WebSocketHeadersInput): Promise<Ep082WebSocket>;
  replace_stream_provider(): Promise<void>;
  fetch(url: Ep082UrlInput, options: object): Promise<Response>;
  constructor(transport: Ep082WispTransport, options: Ep082ClientOptions);
  redirect_limit: number;
  user_agent: string;
  buffer_size: number;
}
export class Ep082ClientOptions {
  free(): void;
  constructor();
  wisp_v2: boolean;
  udp_extension_required: boolean;
  title_case_headers: boolean;
  ws_title_case_headers: boolean;
  websocket_protocols: string[];
  redirect_limit: number;
  header_limit: number;
  user_agent: string;
  pem_files: string[];
  disable_certificate_validation: boolean;
  buffer_size: number;
}
export class Ep082Handlers {
  free(): void;
  constructor(onopen: Function, onclose: Function, onerror: Function, onmessage: Function);
  onopen: Function;
  onclose: Function;
  onerror: Function;
  onmessage: Function;
}
export class Ep082WebSocket {
  private constructor();
  free(): void;
  send(payload: Ep082WebSocketInput): Promise<void>;
  close(code: number, reason: string): Promise<void>;
}
export class IntoUnderlyingByteSource {
  private constructor();
  free(): void;
  pull(controller: ReadableByteStreamController): Promise<any>;
  start(controller: ReadableByteStreamController): void;
  cancel(): void;
  readonly autoAllocateChunkSize: number;
  readonly type: ReadableStreamType;
}
export class IntoUnderlyingSink {
  private constructor();
  free(): void;
  abort(reason: any): Promise<any>;
  close(): Promise<any>;
  write(chunk: any): Promise<any>;
}
export class IntoUnderlyingSource {
  private constructor();
  free(): void;
  pull(controller: ReadableStreamDefaultController): Promise<any>;
  cancel(): void;
}



/**
* 
*
* @returns {Promise<void>}
*/
export default function __wbg_init (): Promise<void>;
export const info: { version: string, minimal: boolean, release: boolean, commit: string };

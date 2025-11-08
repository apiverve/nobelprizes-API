declare module '@apiverve/nobelprizes' {
  export interface nobelprizesOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface nobelprizesResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
  }

  export default class nobelprizesWrapper {
    constructor(options: nobelprizesOptions);

    execute(callback: (error: any, data: nobelprizesResponse | null) => void): Promise<nobelprizesResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: nobelprizesResponse | null) => void): Promise<nobelprizesResponse>;
    execute(query?: Record<string, any>): Promise<nobelprizesResponse>;
  }
}

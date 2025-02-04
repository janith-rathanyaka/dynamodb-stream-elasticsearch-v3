import { ClientOptions } from "@elastic/elasticsearch";
import { DynamoDBStreamEvent, DynamoDBRecord  } from 'aws-lambda';

export function pushStream(opts: streamOptions): Promise<void>

//export type transformFunction = (body?: { [key: string]: any }, oldBody?: AttributeMap, record?: DynamoDBRecord) => Promise<any> | any

export interface streamOptions {
    /**
     * Event object generated by the stream (pass it as it is and don't modify)
     */
    event: DynamoDBStreamEvent,
    /**
     * The name of Elasticsearch index (string). If not provided will set the
     * same as DynamoDB table name
     */
    index?: string,
    /**
     * Exact url of Elasticsearch instance (it works with AWS ES and standard
     * ES)
     */
    endpoint: string,
    /**
     * Force Elasticsearch refresh its index immediately
     * [more here](https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-refresh.html).
     * @default true
     */
    refresh?: boolean,
    /**
     * Enables bulk upserts and removals
     * @default false
     */
    useBulk?: boolean,
    /**
     * Keep sockets around in a pool to be used by other requests in the future
     * @default false
     */
    keepAlive?: boolean,
    /**
     * A function/promise to transform each record before sending them to ES.
     * Applies to INSERT and UPDATE operations. If transformFunction returns an
     * empty object or false the row will be skipped. This function will receive
     * `body` (NewImage), `oldBody` (OldImage) and (record) as the whole record
     * as arguments.
     */
    // transformFunction?: transformFunction,
    /**
     * Additional set of arguments passed to elasticsearch Client see
     * [here](https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/16.x/configuration.html#config-options)
     */
    elasticSearchOptions?: ClientOptions,
}

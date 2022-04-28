/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
/**
 * Diem Dev API Specification
 * Diem Dev API is REST API for client applications to interact the Diem blockchain.
 *
 * The version of the OpenAPI document: 0.1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
  BlockMetadataTransaction,
  BlockMetadataTransactionFromJSON,
  BlockMetadataTransactionFromJSONTyped,
  BlockMetadataTransactionToJSON,
} from "./BlockMetadataTransaction";
import {
  GenesisTransaction,
  GenesisTransactionFromJSON,
  GenesisTransactionFromJSONTyped,
  GenesisTransactionToJSON,
} from "./GenesisTransaction";
import {
  PendingTransaction,
  PendingTransactionFromJSON,
  PendingTransactionFromJSONTyped,
  PendingTransactionToJSON,
} from "./PendingTransaction";
import {
  UserTransaction,
  UserTransactionFromJSON,
  UserTransactionFromJSONTyped,
  UserTransactionToJSON,
} from "./UserTransaction";

/**
 * @type Transaction
 *
 * @export
 */
export type Transaction =
  | BlockMetadataTransaction
  | GenesisTransaction
  | PendingTransaction
  | UserTransaction;

export function TransactionFromJSON(json: any): Transaction {
  return TransactionFromJSONTyped(json, false);
}

export function TransactionFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): Transaction {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    ...BlockMetadataTransactionFromJSONTyped(json, true),
    ...GenesisTransactionFromJSONTyped(json, true),
    ...PendingTransactionFromJSONTyped(json, true),
    ...UserTransactionFromJSONTyped(json, true),
  };
}

export function TransactionToJSON(value?: Transaction | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    ...BlockMetadataTransactionToJSON(value),
    ...GenesisTransactionToJSON(value),
    ...PendingTransactionToJSON(value),
    ...UserTransactionToJSON(value),
  };
}

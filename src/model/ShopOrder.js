/*
 * OpenAPI definition
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.29
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';
import {OrderLine} from './OrderLine';
import {Transaction} from './Transaction';

/**
 * The ShopOrder model module.
 * @module model/ShopOrder
 * @version v0
 */
export class ShopOrder {
  /**
   * Constructs a new <code>ShopOrder</code>.
   * @alias module:model/ShopOrder
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ShopOrder</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ShopOrder} obj Optional instance to populate.
   * @return {module:model/ShopOrder} The populated <code>ShopOrder</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ShopOrder();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('orderLines'))
        obj.orderLines = ApiClient.convertToType(data['orderLines'], [OrderLine]);
      if (data.hasOwnProperty('transactions'))
        obj.transactions = ApiClient.convertToType(data['transactions'], [Transaction]);
      if (data.hasOwnProperty('orderAmount'))
        obj.orderAmount = ApiClient.convertToType(data['orderAmount'], 'Number');
      if (data.hasOwnProperty('settledAmount'))
        obj.settledAmount = ApiClient.convertToType(data['settledAmount'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
ShopOrder.prototype.id = undefined;

/**
 * @member {Array.<module:model/OrderLine>} orderLines
 */
ShopOrder.prototype.orderLines = undefined;

/**
 * @member {Array.<module:model/Transaction>} transactions
 */
ShopOrder.prototype.transactions = undefined;

/**
 * @member {Number} orderAmount
 */
ShopOrder.prototype.orderAmount = undefined;

/**
 * @member {Number} settledAmount
 */
ShopOrder.prototype.settledAmount = undefined;


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

/**
 * The OrderLine model module.
 * @module model/OrderLine
 * @version v0
 */
export class OrderLine {
  /**
   * Constructs a new <code>OrderLine</code>.
   * @alias module:model/OrderLine
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OrderLine</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OrderLine} obj Optional instance to populate.
   * @return {module:model/OrderLine} The populated <code>OrderLine</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OrderLine();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'String');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('quantity'))
        obj.quantity = ApiClient.convertToType(data['quantity'], 'Number');
      if (data.hasOwnProperty('price'))
        obj.price = ApiClient.convertToType(data['price'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
OrderLine.prototype.id = undefined;

/**
 * @member {String} code
 */
OrderLine.prototype.code = undefined;

/**
 * @member {String} description
 */
OrderLine.prototype.description = undefined;

/**
 * @member {Number} quantity
 */
OrderLine.prototype.quantity = undefined;

/**
 * @member {Number} price
 */
OrderLine.prototype.price = undefined;

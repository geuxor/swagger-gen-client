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
import {ControllerOrderLine} from './ControllerOrderLine';

/**
 * The ControllerShopOrder model module.
 * @module model/ControllerShopOrder
 * @version v0
 */
export class ControllerShopOrder {
  /**
   * Constructs a new <code>ControllerShopOrder</code>.
   * @alias module:model/ControllerShopOrder
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ControllerShopOrder</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ControllerShopOrder} obj Optional instance to populate.
   * @return {module:model/ControllerShopOrder} The populated <code>ControllerShopOrder</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ControllerShopOrder();
      if (data.hasOwnProperty('orderLines'))
        obj.orderLines = ApiClient.convertToType(data['orderLines'], [ControllerOrderLine]);
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/ControllerOrderLine>} orderLines
 */
ControllerShopOrder.prototype.orderLines = undefined;


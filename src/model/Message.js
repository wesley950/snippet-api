/*
 * Snippet
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.41
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';

/**
 * The Message model module.
 * @module model/Message
 * @version 0.1.0
 */
export class Message {
  /**
   * Constructs a new <code>Message</code>.
   * @alias module:model/Message
   * @class
   * @param text {String} 
   * @param sendDate {Date} 
   * @param responses {Array.<module:model/Message>} 
   */
  constructor(text, sendDate, responses) {
    this.text = text;
    this.sendDate = sendDate;
    this.responses = responses;
  }

  /**
   * Constructs a <code>Message</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Message} obj Optional instance to populate.
   * @return {module:model/Message} The populated <code>Message</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Message();
      if (data.hasOwnProperty('text'))
        obj.text = ApiClient.convertToType(data['text'], 'String');
      if (data.hasOwnProperty('send_date'))
        obj.sendDate = ApiClient.convertToType(data['send_date'], 'Date');
      if (data.hasOwnProperty('responses'))
        obj.responses = ApiClient.convertToType(data['responses'], [Message]);
    }
    return obj;
  }
}

/**
 * @member {String} text
 */
Message.prototype.text = undefined;

/**
 * @member {Date} sendDate
 */
Message.prototype.sendDate = undefined;

/**
 * @member {Array.<module:model/Message>} responses
 */
Message.prototype.responses = undefined;


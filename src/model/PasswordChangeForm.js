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
 * The PasswordChangeForm model module.
 * @module model/PasswordChangeForm
 * @version 0.1.0
 */
export class PasswordChangeForm {
  /**
   * Constructs a new <code>PasswordChangeForm</code>.
   * Sent from user to server, after user has a secret code.
   * @alias module:model/PasswordChangeForm
   * @class
   * @param newPassword {String} 
   * @param secretCode {String} 
   */
  constructor(newPassword, secretCode) {
    this.newPassword = newPassword;
    this.secretCode = secretCode;
  }

  /**
   * Constructs a <code>PasswordChangeForm</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PasswordChangeForm} obj Optional instance to populate.
   * @return {module:model/PasswordChangeForm} The populated <code>PasswordChangeForm</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PasswordChangeForm();
      if (data.hasOwnProperty('new_password'))
        obj.newPassword = ApiClient.convertToType(data['new_password'], 'String');
      if (data.hasOwnProperty('secret_code'))
        obj.secretCode = ApiClient.convertToType(data['secret_code'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} newPassword
 */
PasswordChangeForm.prototype.newPassword = undefined;

/**
 * @member {String} secretCode
 */
PasswordChangeForm.prototype.secretCode = undefined;


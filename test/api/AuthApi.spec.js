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
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Snippet);
  }
}(this, function(expect, Snippet) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Snippet.AuthApi();
  });

  describe('(package)', function() {
    describe('AuthApi', function() {
      describe('activateAuthActivateActivationCodeGet', function() {
        it('should call activateAuthActivateActivationCodeGet successfully', function(done) {
          // TODO: uncomment, update parameter values for activateAuthActivateActivationCodeGet call and complete the assertions
          /*

          instance.activateAuthActivateActivationCodeGet(activationCode, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Object);
            // expect(data).to.be(null);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('loginAuthLoginPost', function() {
        it('should call loginAuthLoginPost successfully', function(done) {
          // TODO: uncomment, update parameter values for loginAuthLoginPost call and complete the assertions
          /*

          instance.loginAuthLoginPost(grantType, username, password, scope, clientId, clientSecret, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Object);
            // expect(data).to.be(null);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('passwordChangeAuthPasswordChangePost', function() {
        it('should call passwordChangeAuthPasswordChangePost successfully', function(done) {
          // TODO: uncomment, update parameter values for passwordChangeAuthPasswordChangePost call and complete the assertions
          /*

          instance.passwordChangeAuthPasswordChangePost(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Object);
            // expect(data).to.be(null);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('registerAuthRegisterPost', function() {
        it('should call registerAuthRegisterPost successfully', function(done) {
          // TODO: uncomment, update parameter values for registerAuthRegisterPost call and complete the assertions
          /*

          instance.registerAuthRegisterPost(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Object);
            // expect(data).to.be(null);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('requestPasswordChangeAuthRequestPasswordChangePost', function() {
        it('should call requestPasswordChangeAuthRequestPasswordChangePost successfully', function(done) {
          // TODO: uncomment, update parameter values for requestPasswordChangeAuthRequestPasswordChangePost call and complete the assertions
          /*

          instance.requestPasswordChangeAuthRequestPasswordChangePost(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Object);
            // expect(data).to.be(null);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
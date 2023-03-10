# snippet

Snippet - JavaScript client for snippet
No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 0.1.0
- Package version: 0.1.0
- Build package: io.swagger.codegen.v3.generators.javascript.JavaScriptClientCodegen

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install snippet --save
```

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var Snippet = require('snippet');

var api = new Snippet.AuthApi()
var activationCode = "activationCode_example"; // {String} 

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.activateAuthActivateActivationCodeGet(activationCode, callback);
```

## Documentation for API Endpoints

All URIs are relative to */*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Snippet.AuthApi* | [**activateAuthActivateActivationCodeGet**](docs/AuthApi.md#activateAuthActivateActivationCodeGet) | **GET** /auth/activate/{activation_code} | Activate
*Snippet.AuthApi* | [**loginAuthLoginPost**](docs/AuthApi.md#loginAuthLoginPost) | **POST** /auth/login | Login
*Snippet.AuthApi* | [**passwordChangeAuthPasswordChangePost**](docs/AuthApi.md#passwordChangeAuthPasswordChangePost) | **POST** /auth/password-change | Password Change
*Snippet.AuthApi* | [**registerAuthRegisterPost**](docs/AuthApi.md#registerAuthRegisterPost) | **POST** /auth/register | Register
*Snippet.AuthApi* | [**requestPasswordChangeAuthRequestPasswordChangePost**](docs/AuthApi.md#requestPasswordChangeAuthRequestPasswordChangePost) | **POST** /auth/request-password-change | Request Password Change
*Snippet.BottlesApi* | [**readMyMessagesBottlesMyMessagesGet**](docs/BottlesApi.md#readMyMessagesBottlesMyMessagesGet) | **GET** /bottles/my-messages | Read My Messages
*Snippet.BottlesApi* | [**receiveMessageBottlesReceiveGet**](docs/BottlesApi.md#receiveMessageBottlesReceiveGet) | **GET** /bottles/receive | Receive Message
*Snippet.BottlesApi* | [**respondToMessageBottlesRespondPost**](docs/BottlesApi.md#respondToMessageBottlesRespondPost) | **POST** /bottles/respond | Respond To Message
*Snippet.BottlesApi* | [**sendMessageBottlesSendPost**](docs/BottlesApi.md#sendMessageBottlesSendPost) | **POST** /bottles/send | Send Message
*Snippet.HomeApi* | [**homeGet**](docs/HomeApi.md#homeGet) | **GET** / | Home

## Documentation for Models

 - [Snippet.AnyOfValidationErrorLocItems](docs/AnyOfValidationErrorLocItems.md)
 - [Snippet.BodyLoginAuthLoginPost](docs/BodyLoginAuthLoginPost.md)
 - [Snippet.HTTPValidationError](docs/HTTPValidationError.md)
 - [Snippet.Message](docs/Message.md)
 - [Snippet.MessageResponseForm](docs/MessageResponseForm.md)
 - [Snippet.MessageSendForm](docs/MessageSendForm.md)
 - [Snippet.PasswordChangeForm](docs/PasswordChangeForm.md)
 - [Snippet.PasswordChangeRequest](docs/PasswordChangeRequest.md)
 - [Snippet.RegistrationForm](docs/RegistrationForm.md)
 - [Snippet.ValidationError](docs/ValidationError.md)

## Documentation for Authorization


### OAuth2PasswordBearer

- **Type**: OAuth
- **Flow**: password
- **Authorization URL**: 
- **Scopes**: 
  - : 


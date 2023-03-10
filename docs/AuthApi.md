# Snippet.AuthApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activateAuthActivateActivationCodeGet**](AuthApi.md#activateAuthActivateActivationCodeGet) | **GET** /auth/activate/{activation_code} | Activate
[**loginAuthLoginPost**](AuthApi.md#loginAuthLoginPost) | **POST** /auth/login | Login
[**passwordChangeAuthPasswordChangePost**](AuthApi.md#passwordChangeAuthPasswordChangePost) | **POST** /auth/password-change | Password Change
[**registerAuthRegisterPost**](AuthApi.md#registerAuthRegisterPost) | **POST** /auth/register | Register
[**requestPasswordChangeAuthRequestPasswordChangePost**](AuthApi.md#requestPasswordChangeAuthRequestPasswordChangePost) | **POST** /auth/request-password-change | Request Password Change

<a name="activateAuthActivateActivationCodeGet"></a>
# **activateAuthActivateActivationCodeGet**
> Object activateAuthActivateActivationCodeGet(activationCode)

Activate

### Example
```javascript
import {Snippet} from 'snippet';

let apiInstance = new Snippet.AuthApi();
let activationCode = "activationCode_example"; // String | 

apiInstance.activateAuthActivateActivationCodeGet(activationCode, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **activationCode** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="loginAuthLoginPost"></a>
# **loginAuthLoginPost**
> Object loginAuthLoginPost(grantType, username, password, scope, clientId, clientSecret)

Login

### Example
```javascript
import {Snippet} from 'snippet';

let apiInstance = new Snippet.AuthApi();
let grantType = "grantType_example"; // String | 
let username = "username_example"; // String | 
let password = "password_example"; // String | 
let scope = "scope_example"; // String | 
let clientId = "clientId_example"; // String | 
let clientSecret = "clientSecret_example"; // String | 

apiInstance.loginAuthLoginPost(grantType, username, password, scope, clientId, clientSecret, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **grantType** | **String**|  | 
 **username** | **String**|  | 
 **password** | **String**|  | 
 **scope** | **String**|  | 
 **clientId** | **String**|  | 
 **clientSecret** | **String**|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

<a name="passwordChangeAuthPasswordChangePost"></a>
# **passwordChangeAuthPasswordChangePost**
> Object passwordChangeAuthPasswordChangePost(body)

Password Change

### Example
```javascript
import {Snippet} from 'snippet';

let apiInstance = new Snippet.AuthApi();
let body = new Snippet.PasswordChangeForm(); // PasswordChangeForm | 

apiInstance.passwordChangeAuthPasswordChangePost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PasswordChangeForm**](PasswordChangeForm.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="registerAuthRegisterPost"></a>
# **registerAuthRegisterPost**
> Object registerAuthRegisterPost(body)

Register

### Example
```javascript
import {Snippet} from 'snippet';

let apiInstance = new Snippet.AuthApi();
let body = new Snippet.RegistrationForm(); // RegistrationForm | 

apiInstance.registerAuthRegisterPost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RegistrationForm**](RegistrationForm.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="requestPasswordChangeAuthRequestPasswordChangePost"></a>
# **requestPasswordChangeAuthRequestPasswordChangePost**
> Object requestPasswordChangeAuthRequestPasswordChangePost(body)

Request Password Change

### Example
```javascript
import {Snippet} from 'snippet';

let apiInstance = new Snippet.AuthApi();
let body = new Snippet.PasswordChangeRequest(); // PasswordChangeRequest | 

apiInstance.requestPasswordChangeAuthRequestPasswordChangePost(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**PasswordChangeRequest**](PasswordChangeRequest.md)|  | 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


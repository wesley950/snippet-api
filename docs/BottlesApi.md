# Snippet.BottlesApi

All URIs are relative to */*

Method | HTTP request | Description
------------- | ------------- | -------------
[**readMyMessagesBottlesMyMessagesGet**](BottlesApi.md#readMyMessagesBottlesMyMessagesGet) | **GET** /bottles/my-messages | Read My Messages
[**receiveMessageBottlesReceiveGet**](BottlesApi.md#receiveMessageBottlesReceiveGet) | **GET** /bottles/receive | Receive Message
[**respondToMessageBottlesRespondPost**](BottlesApi.md#respondToMessageBottlesRespondPost) | **POST** /bottles/respond | Respond To Message
[**sendMessageBottlesSendPost**](BottlesApi.md#sendMessageBottlesSendPost) | **POST** /bottles/send | Send Message

<a name="readMyMessagesBottlesMyMessagesGet"></a>
# **readMyMessagesBottlesMyMessagesGet**
> [Message] readMyMessagesBottlesMyMessagesGet(opts)

Read My Messages

### Example
```javascript
import {Snippet} from 'snippet';
let defaultClient = Snippet.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Snippet.BottlesApi();
let opts = { 
  'skip': 0, // Number | 
  'limit': 100 // Number | 
};
apiInstance.readMyMessagesBottlesMyMessagesGet(opts, (error, data, response) => {
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
 **skip** | **Number**|  | [optional] [default to 0]
 **limit** | **Number**|  | [optional] [default to 100]

### Return type

[**[Message]**](Message.md)

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="receiveMessageBottlesReceiveGet"></a>
# **receiveMessageBottlesReceiveGet**
> Object receiveMessageBottlesReceiveGet()

Receive Message

### Example
```javascript
import {Snippet} from 'snippet';
let defaultClient = Snippet.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Snippet.BottlesApi();
apiInstance.receiveMessageBottlesReceiveGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="respondToMessageBottlesRespondPost"></a>
# **respondToMessageBottlesRespondPost**
> Object respondToMessageBottlesRespondPost(body)

Respond To Message

### Example
```javascript
import {Snippet} from 'snippet';
let defaultClient = Snippet.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Snippet.BottlesApi();
let body = new Snippet.MessageResponseForm(); // MessageResponseForm | 

apiInstance.respondToMessageBottlesRespondPost(body, (error, data, response) => {
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
 **body** | [**MessageResponseForm**](MessageResponseForm.md)|  | 

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="sendMessageBottlesSendPost"></a>
# **sendMessageBottlesSendPost**
> Object sendMessageBottlesSendPost(body)

Send Message

### Example
```javascript
import {Snippet} from 'snippet';
let defaultClient = Snippet.ApiClient.instance;

// Configure OAuth2 access token for authorization: OAuth2PasswordBearer
let OAuth2PasswordBearer = defaultClient.authentications['OAuth2PasswordBearer'];
OAuth2PasswordBearer.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new Snippet.BottlesApi();
let body = new Snippet.MessageSendForm(); // MessageSendForm | 

apiInstance.sendMessageBottlesSendPost(body, (error, data, response) => {
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
 **body** | [**MessageSendForm**](MessageSendForm.md)|  | 

### Return type

**Object**

### Authorization

[OAuth2PasswordBearer](../README.md#OAuth2PasswordBearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


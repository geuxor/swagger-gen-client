# OpenApiDefinition.ShopOrderControllerApi

All URIs are relative to *http://localhost:8080/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**capture**](ShopOrderControllerApi.md#capture) | **POST** /shopOrders/{id}/capture | 
[**createShopOrder**](ShopOrderControllerApi.md#createShopOrder) | **POST** /shopOrders | 
[**refund**](ShopOrderControllerApi.md#refund) | **POST** /shopOrders/{id}/refund | 
[**release**](ShopOrderControllerApi.md#release) | **POST** /shopOrders/{id}/release | 
[**reserve**](ShopOrderControllerApi.md#reserve) | **POST** /shopOrders/{id}/reserve | 
[**shopOrder**](ShopOrderControllerApi.md#shopOrder) | **GET** /shopOrders/{id} | 
[**shopOrders**](ShopOrderControllerApi.md#shopOrders) | **GET** /shopOrders | 

<a name="capture"></a>
# **capture**
> TransactionExecutionResponse capture(body, id)



### Example
```javascript
import {OpenApiDefinition} from 'open_api_definition';

let apiInstance = new OpenApiDefinition.ShopOrderControllerApi();
let body = new OpenApiDefinition.TransactionExecutionRequest(); // TransactionExecutionRequest | 
let id = "id_example"; // String | 

apiInstance.capture(body, id, (error, data, response) => {
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
 **body** | [**TransactionExecutionRequest**](TransactionExecutionRequest.md)|  | 
 **id** | **String**|  | 

### Return type

[**TransactionExecutionResponse**](TransactionExecutionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="createShopOrder"></a>
# **createShopOrder**
> ShopOrder createShopOrder(body)



### Example
```javascript
import {OpenApiDefinition} from 'open_api_definition';

let apiInstance = new OpenApiDefinition.ShopOrderControllerApi();
let body = new OpenApiDefinition.ControllerShopOrder(); // ControllerShopOrder | 

apiInstance.createShopOrder(body, (error, data, response) => {
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
 **body** | [**ControllerShopOrder**](ControllerShopOrder.md)|  | 

### Return type

[**ShopOrder**](ShopOrder.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="refund"></a>
# **refund**
> TransactionExecutionResponse refund(body, id)



### Example
```javascript
import {OpenApiDefinition} from 'open_api_definition';

let apiInstance = new OpenApiDefinition.ShopOrderControllerApi();
let body = new OpenApiDefinition.TransactionExecutionRequest(); // TransactionExecutionRequest | 
let id = "id_example"; // String | 

apiInstance.refund(body, id, (error, data, response) => {
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
 **body** | [**TransactionExecutionRequest**](TransactionExecutionRequest.md)|  | 
 **id** | **String**|  | 

### Return type

[**TransactionExecutionResponse**](TransactionExecutionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="release"></a>
# **release**
> TransactionExecutionResponse release(id)



### Example
```javascript
import {OpenApiDefinition} from 'open_api_definition';

let apiInstance = new OpenApiDefinition.ShopOrderControllerApi();
let id = "id_example"; // String | 

apiInstance.release(id, (error, data, response) => {
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
 **id** | **String**|  | 

### Return type

[**TransactionExecutionResponse**](TransactionExecutionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="reserve"></a>
# **reserve**
> TransactionExecutionResponse reserve(id)



### Example
```javascript
import {OpenApiDefinition} from 'open_api_definition';

let apiInstance = new OpenApiDefinition.ShopOrderControllerApi();
let id = "id_example"; // String | 

apiInstance.reserve(id, (error, data, response) => {
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
 **id** | **String**|  | 

### Return type

[**TransactionExecutionResponse**](TransactionExecutionResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="shopOrder"></a>
# **shopOrder**
> ShopOrder shopOrder(id)



### Example
```javascript
import {OpenApiDefinition} from 'open_api_definition';

let apiInstance = new OpenApiDefinition.ShopOrderControllerApi();
let id = "id_example"; // String | 

apiInstance.shopOrder(id, (error, data, response) => {
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
 **id** | **String**|  | 

### Return type

[**ShopOrder**](ShopOrder.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

<a name="shopOrders"></a>
# **shopOrders**
> [ShopOrder] shopOrders()



### Example
```javascript
import {OpenApiDefinition} from 'open_api_definition';

let apiInstance = new OpenApiDefinition.ShopOrderControllerApi();
apiInstance.shopOrders((error, data, response) => {
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

[**[ShopOrder]**](ShopOrder.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*



# Notification Documentation

Services available and it's payload.


## API Reference

#### Register user to notification user

```http
  POST /NEW_USER
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `userId` | `string` | **Required**. user id |
| `user_email` | `string` | **Required**. user email address|




#### Rejoin to user topics on login call

```http
  POST /REJOIN_SUBSCRIPTION
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `userId` | `string` | **Required**. user id |



#### Send notification

```http
  POST /NOTIFY
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `topics` | `string[]` | **Required**. all topics to send notification |
| `payload` | `{title:string, body:{message:string}}[]` | **Required**.  notification payload |




#### Subscribe to notification

```http
  POST /SUBSCRIBE_TO_TOPIC
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `topics` | `string[]` | **Required**. all topics to subscribe |
| `userId` | `string` | **Required**. user id |


#### Get all notification from topics

```http
  GET /GET_NOTIFICATIONS
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `topics` | `string[]` | **Required**. all topics to get notifications |


#### Mark notification 

```http
  POST /MARK_NOTIFICATION
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. notification id |



#### Listen for all notification data when "GET_NOTIFICATIONS" is called

```http
  GET /NOTIFICATION_DATA
```

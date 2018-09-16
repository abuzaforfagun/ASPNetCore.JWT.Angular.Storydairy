# ASPNetCore.Angular.StoryDairy

Very basic CRUD application with authentication, web api and modern front end technologies.
## Technology stack
#### Backend

Language: C#

Framework: Dot Net Core 2.1

Template: Web API 2

Database: SQL Server 2016

ORM: Entity Framework Core

Design Pattern: Repository

Authentication: JWT

External Packages: Automapper, Swagger

#### Frontend

Language: Typescript

Framework: Angular 6

Storage: Local storage

## Getting Started

### Prerequisites

* Dot net core 2.1 runtime

* Node

* Angular

### Launch web api
**Option 1:**

* Open ```StoryDairy.sln``` from ```ASPNetCore.Angular.StoryDairy\Backend\StoryDairy``` using visual studio. 

* Hit run button or ```F5``` key.

**Option 2:**

* Open command prompt from ```ASPNetCore.Angular.StoryDairy\Backend\StoryDairy```. 

* Type ```dotnet restore```. 

* Execute ```dotnet run --project StoryDairy/StoryDairy.csproj```

### Launch front end 

* Open command prompt from ```ASPNetCore.Angular.StoryDairy\FrontEnd\StoryDairy```. 

* Execute ```npm i``` command. 

* Type ```ng serve -o```.

## API end points

**Authentication Api**

API: ```/api/Auth/login``` 

Type: POST

Perpose: Get authentication token.

Parameters:
```
{
  "userId": "string",
  "password": "string"
}
```
Parameters Type: From body.

##### Stories api

API: ```/api/Stories```

Type: GET

Purpose: Return all stories.

##### Search stories api

API:```/api/Stories?q=search_params```

Purpose: Return stories search result

Parameters: ```q```, need to pass string as search terms

Parameter type: From Query

Example: ```api/Stories?q=sample```

##### Create stories api

API: ```/api/Stories```

Type: POST

Purpose: Create new stories

Authentication: Required

Parameter:
```
{
  "title": "string",
  "body": "string",
  "dateTime": "2018-09-16T18:27:10.621Z"
}
```
Parameter Type: Form Body

##### Update stories api

API: ```/api/Stories/{id}```

Type: PUT

Purpose: Update exiting stories

Authentication: Required

Parameters:

Parameter 1
```id```: Id of the story. Accept integer.

Type: From query

Parameter 2
```
{
  "title": "string",
  "body": "string",
  "dateTime": "2018-09-16T18:33:06.235Z"
}
```

Type: From body

##### Delete stories api

API: ```/api/Stories/{id}```

Type: DELETE

Purpose: Delete exiting stories

Authentication: Required

Parameters:

Parameter 1
```id```: Id of the story. Accept integer.

Type: From query

##### Create user api

API: ```/api/Users```

Type: POST

Purpose: Create new user

Parameter:
```
{
  "name": "string",
  "userId": "string",
  "password": "string"
}
```

Type: Form body

## Authors
* Abu Zafor Fagun

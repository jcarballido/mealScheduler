# Architecture
## Major Components
- User Interface
- Backend Server
- Persistence
### User Interface
The user interface only provides a presentation of the users data and allow for input and interaction with stored data. 
### Backend Server
The system will adhere to the dependency injection pattern to allow for quick interchangeability between implementation methods by leveraging fastify plugins. It will manage the meal planning engine.
#### Meal Plan Engine
The scheduling engine lives on the server and is is responsible for scheduling a monthly calendar with meals and the duration of how long each meal will last.
Inputs:
- Recipes
- Calendar Month
Output:
- A complete meal schedule for a month.
#### Recipe Manager
The recipe manager lives on the server and is responsible for storing recipes and handling updates to the stored recipes
Input:
- User defined recipes, represented by a title at a minimum
Output: 
- A list of recipes
### Persistence
## Guiding Principles
- Business logic will be independent of UI
- UI will not perform any responsibilites of the scheduling engine
- Data persistence should be agnostic of the implementation 
- All domain entities must be explicitly defined in documentation before implementation
- If domain entities are undefined, implementation must halt and request clarification.
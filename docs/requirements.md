# Requirements
## Core Funcitonal Requirements
- A user can manually create a recipe by including ingredients, linking a URL, or both
- A recipe represents a list of ingredients, stored persistently
- The system will populate a monthly calendar with a single action using the stored recipes
- User accounts can share their calendar with other users and delegate roles with defined permissions
## Meal Planning
- The user will be able to modify all scheduling, including manually populating the calendar themselves, or modifying any generated meal plan scheduled by the system
- The system will allow for dates to be exluded from meal planning
- The system will list the meals it populated the calendar with along with how many days it will span. These values will be modifiable by the user to provide maximum flexibility.
- Inlcude some recipes preloaded into the system for first time users.
## User Permissions
- Admin: Top-level role with ability to edit, view, share users to their calendar and assign them a role, and can promote accounts that have access to their calendar
- Editor: Ability to edit and view, is allowed to share the calendar but can only assign them a role of viewer
- Viewer: Ability to view only and cannot share the calendar
## User Experience
- The system will have version control and display who made the last update and when.
## System Constraints
- The system will not enforce their generated calendar
- Only roles with the permission to edit will allow for editing
## Non-Goal Enforcements
- The system will not track calories, macro-, or micronutrients
- The system will not limit how long a meal will span
- The system will not generate recipes
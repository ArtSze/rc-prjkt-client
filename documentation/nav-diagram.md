# Nav Component

## Summary 

The Nav component contains the components that apply logic to sort or filter the displayed projects.

The state of the filters will be stored in the App component so that the aggregated fetch request can be made to the back-end with the relevant filters.

## Nav Related State 

- SortMethod
  ```typescript
  {
      sort: ( "creation date", "updated date", "batch end date")
  }
  ```
- StatusFilter
  ```typescript
  {
        active: boolean,
        inactive: boolean
  }
  ```
- FilterMethod
    ```typescript
    {
        type: ( Tag | User),
        payload: Tag[] | rcId
    }
    ```


## Child Components

### Sort 
The Sort component applies logic determining the sort methodology applied to the displayed projects. The options will be selectable from a radio dial.

Sort methodologies include:
- Sorting projects by their last updated timestamp 
- Sorting projects by their creation timestamp 
- Sorting projects by batch end date

Inactive projects will always be displayed below active projects.

### Filter 
<{type: Tag | User, payload: Tag[] | userId>

The Filter component contains two options:
    - Filter by Tags (an array of 0 or more tags)
    - Filter by User (a single user)

Only 1 filter can be selected and will be displayed at a given time. Users and Tags cannot be filtered at the same time. The option will be selectable from a radio dial.

The tag and user data required for the filter selections will be retrieved from a custom hook.

### StatusFilter

The StatusFilter component will contain checkboxes for each of the applicable project statuses:
- Active
- Inactive

Either 1 or both statuses can be selected. This can be filtered in conjunction with the other filters.

At least one filter must be selected at a time.

### UserProjects

The UserProjects component will contain a button that filters to the projects that the current user is an owner on.

This filter cannot be used in conjunction with the Tag or User filter.

// QUESTION: how does client know who the user is?

```mermaid
classDiagram
App <--  Nav
<<<<<<< HEAD
App <-- MyProjects
=======
>>>>>>> main
    Nav <--  Sort
    Nav <--  Filter
    Filter <--  TagFilter
    Filter <--  UserFilter
<<<<<<< HEAD
    Nav <--  StatusFilter

    class App{
        + tags
        + users
        - [GET] /users ()
        - [GET] /tags ()
    }

    class Nav{
        + statusFilter<active, inactive, undefined>
        + filter<tag[] | user>
        + sortMethod
        - [GET] /projects/params (params)
    }

    class MyProjects {
    - [GET] /projects/me ()
    }

    class Sort{
        +sortMethod options <created, updated, batch>
    }

    class Filter{
=======
    Nav <--  UserProjects
    Nav <--  StatusFilter

    class App{
    + statusFilter<active, inactive>
    + filter<type: tag/user>
    + sortMethod
    + tags
    + users
    - [GET] /projects/params (params)
    - [GET] /users ()
    - [GET] /tags ()
    }

    class Sort{
    +projectCreated
    +projectLastUpdated
    +ownerBatch
    }

    class Filter{
    +currentFilter<tag, user>
    +filterContents
>>>>>>> main
    }

    class TagFilter{
    +tags<tag[]>
    }

    class UserFilter{
    +user<rcID>
    }

    class StatusFilter {
    +active<bool>
    +inactive<bool>
    }
<<<<<<< HEAD
=======

    class UserProjects{
    }
>>>>>>> main
```
# sequelizedBurger

### Overview

Like Eat-da-burger, Eat-da-burger (the sequelized edition) is a full stack restaurant application that allows users to input the names of burgers they'd like to eat.
When a user submits a burger's name, that burger is displayed on the left side of the page - waiting to be devoured.
Each burger on the left side has a "Devour it!" button and a text box with placeholder data populated with Customer?
When a customer is entered into the text bos and the devour button is clicked, the burger moves to the right side of the page and is associated with the customer.
If the customer does not exist in the customers table, that customer is created.
Every burger whether devoured or not is stored in the database.

This application is deployed on Heroku at https://mysterious-anchorage-72592.herokuapp.com/ 


### Dependencies

package.json lists the dependencies that are needed. 
This includes express, express-handlebars, and mysql.

### Implementation

This application was developed following the MVC model.
It uses Node.js, Express, Handlebars with Bootstrap and a MySQL database.
All database access is done through Sequelize.
Handlebars and Bootstrap are used to present the view to the user.
The controller sits between the model and the view and is responsible for responding to the user input and
all interactions on the data model objects. The controller creates all the necessary routes and the logic within those routes.

When run locally, the database is a local database.
When running the version deployed on Heroku, a JawsDB is used.




# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What does calling super do in a class?

Your answer: When you call super in a class, you are telling your code to reference the parent of the class you are on. For example, say I have a 'Dog' class with 'breed' initialized. I also have the child class 'Pet' referencing back to 'Dog'. By calling super on 'breed', it indicates that the information for that initialized value is coming from 'Dog' rather than being defined in 'Pet'. 

Researched answer: In ruby, calling super in a class is a way of calling your original class. Super is used in the concept of class inheritence, meaning that you are working on the child of a parent class. Take the class 'GoldenRetriever', a child of the class 'Dog'. Calling super within 'GoldenRetriever' will take data from 'Dog', rather than it needing to be redefined within 'GoldenRetriever'.

2. What is a gem?

Your answer: A gem is a package of code that allows you to fullfil a desired function. There are many different ones to choose from, all serving specific purposes without you having to write new code.

Researched answer: A gem in Ruby on Rails serves as a library of code. These libraries allow developers to essentially plug new functionalities into their code without writing anything. For example, RSpec is a gem that adds testing functionality to Ruby, similar to jest for JavaScript. By adding this gem, developers are able to test their Ruby code in a testing suite that calls out errors and allows for more dynamic code writing and problem solving.

3. What is a relational database? Are there other kinds of databases?

Your answer: A relational database is a database that is formed in a way that different data tables can be related back to one another. These tables are related through identification keys. An example of this would be if you had a 'Cohort' data table wherein the cohort Hotel had an ID of 1 and the cohort Foxtrot had an ID of 2. On a separate 'Student' table, each student has a corresponding 'cohort_id' that indicates which cohort they belong to-- 1, or 2. Relational databases are not the only kind of database. 

Researched answer: In a relational database, different tables of data can be related back to one another through the use of primary keys. These keys, typically a numerical value, are used to link data between multiple tables. For example, lets say there was a database titled 'Animals', with the values 'dog', 'cat', and 'fish' holding the id's 1, 2, and 3 respectively. On another table, named 'Pets', the values are names. In another column titled 'animal_id' on the 'Pets' database, there are numbers corresponding with the 'Animals' id's to indicate what type of animal each pet is. Other than relational databases, there are also object-oriented, hierarchical, and network databases (among possible others).

4. What are primary keys? Why are they important?

Your answer: Primary keys are essential identifiers in relational database tables. Each entry in a table has a unique numerical identifier-- the primary key. These keys allow for more secure databases, with each entry "guarded" perse by its own unique ID.

Researched answer: When creating entries in a database, there will be a column (or multiple columns) where a value is attributed to each row of data. This value is a unique identifier, specific to the row, called a primary key. A primary key value cannot be null, as it is set in place to protect the information in its row and so that that data may be referred to in a separate table.

5. What are the HTTP verbs? What is each verb's corresponding CRUD action?

Your answer: The HTTP verbs are POST, GET, PUT, PATCH, and DELETE. These each relate to CRUD in a unique way. POST references Create, GET references Read, PUT and PATH both reference Update, and DELETE references Delete.

Researched answer: There are several HTTP (Hypertext Transfer Protocol) verbs, each corresponding to CRUD in a unique way. These verbs, listed with their CRUD counterparts, are POST(Create), GET(Read), PUT(Update), PATCH(Update), and DELETE(Delete). PUT refers to updating by replacing, while PATCH refers to updating by modifying, both actions to alter code. 

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. RESTful routes: RESTful routes are used in Rails to provide routes between various actions like HTTPS verbs and CRUD operations in easy and conventional ways.

2. Model validations: Model validations are criteria set in place to ensure that only valid, trustworthy data is entered into your database.

3. Params: 'Params' is shorthand for the parameters method. This method refers to parameters being passed to your controller in Rails.

4. ERB: ERB, short for Embedded Ruby, allows the generation of any kind and/or amount of text from various templates.

5. API: API, short for Application Program Interface, essentially means that the program in question can communicate with other programs.

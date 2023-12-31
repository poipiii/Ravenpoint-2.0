# RavenPoint 2.0

A Complete Rewrite of [Ravenpoint](https://github.com/chrischow/ravenpoint) a SharePoint REST API clone built in .NET Core and React for testing apps that use SharePoint Lists as a backend for storing data.

## Why Rewrite ?
Thr original ravenpoint is plagued with massive tech debt with lots of custom code to support the parsing of Odata queries and logic and a technology stack (Python Flask) that was not suitable for processing Odata queries which Sharepoint uses.

Hence this ground up rewrite is meant to solve this issues by using .NET core officially supported Odata server and implementing new features to help with the developer experience such as docker and docker compose support ,seed data via schema or csv/excel files and more 

## Motivation
There is a huge disparity between the development and production environments for Team Raven's React.js apps due to ******* ******** IT policy. This creates challenges in development.

First, the development of the frontend and some of the backend features happens in the development environment, and development of code to interact with databases happens in sandboxes in the production environment. This surely isn't a best practice for React apps. It isn't possible to test code to query data from SharePoint (SP) Lists via the SP OData REST API.

Second, this affects the build process. Apps cannot be bundled into a production build, since development still happens after code is ported over into the production environment. That makes it extremely challenging to use awesome open-source React components that cannot be easily bundled into individual JS files.

## Value Proposition
RavenPoint aims to enable Team Raven to do all development in a single environment (i.e. not on internal servers). Instead of trying to bring modern development tools in, which will probably never happen in the next few generations, we aim to emulate the internal stack on the outside.

If all development and testing can happen on the outside, we can (1) make full use of open-source tech in our apps because we can (2) create production builds without worrying about having to amend the code later on. 

In the longer term, when (or if) an internal cloud is made available, RavenPoint can potentially be the bridge between (a) apps that still use dated OData queries and (b) modern databases in the backend - this is exactly how RavenPoint is set up.

## Features

### REST API
- Mimics SharePoint's (SP) REST API
- URL parameters:
  - `$select`: For selecting columns from tables
  - `$filter`: For filtering rows by criteria
  - `$expand`: For selecting columns in linked lookup tables


### Admin Dashboard
- Upload a CSV file + table name to be stored in a SQLite database
- Check table metadata (ID, title, columns)
- Inspect tables
- Delete tables
- Upload files
- Delete files
- Create Simulated Users
- Delete Simulated Users


## Installation
WIP


## Usage
WIP

## Notes
WIP 

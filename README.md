# Inventory App
The Inventory App is a CRUD application built with React that allows you to manage a list of products and orders. It includes a JSON server that runs on port 8000 and provides two endpoints: products and orders.
  
# Traducción de idiomas
La App de Inventario está disponible en inglés y español. Para cambiar el idioma, haga clic en el texto "inglés" o "español" en la barra de navegación en la parte superior derecha de la pantalla.
  
# Docker
The Inventory App can also be run as a Docker container. To run the app in a container, follow these steps:

# Build the Docker image:

`docker build -t inventory-app .`

# Start the container:
`docker run -p 3000:3000 -p 8000:8000 -d inventory-app`
This will start the app and the JSON server in the Docker container.
  
# Installation
To install and use the Inventory App, follow these steps:
  
# Clone the repository:

`git clone https://github.com/your-username/inventory-app.git`
  
# Install the dependencies:

`cd inventory-app`
`npm install`

  
# Start the JSON server:

`npm run server`
  
# Start the React app:
`npm start`
  
# Use the app:
### The app will be available on http://localhost:3000.
### View a list of products on the homepage.
### Add new products by clicking on the "Add Product" button and filling out the form.
### Edit or delete existing products by clicking on the corresponding buttons in the product list.
### View the details of a product by clicking on the product name in the product list.
### Create orders by clicking on the "Orders" link in the navigation bar, filling out the form and selecting the desired products.
### View a list of orders by clicking on the "Orders" link in the navigation bar.
### API
  
# The JSON server provides two endpoints:

 `/products: Returns a list of all products in the inventory.`  
 `/orders: Returns a list of all orders.`

The JSON server can be accessed at http://localhost:8000.
  
# Customization
If you want to modify the app to suit your needs, you can:

Make changes to the React components in the src/components directory.
Modify the JSON server endpoints in the data.json file in the root directory of the project.
Support
If you have any questions or issues with the Inventory App, please open an issue in this repository. We'll be happy to help you!
  
# Contributing
If you'd like to contribute to the Inventory App, feel free to open a pull request. We welcome all contributions!

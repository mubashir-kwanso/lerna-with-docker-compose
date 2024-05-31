Have you ever faced issues like **_It works on my machine but not on yours_**? Or you wrote some code some time back and now you are not able to run it because of the environment setup? Or you are working on multiple projects and each project requires a different environment setup?

Almost 2 years ago, I wrote a script with Node.js v14 for interacting with Ethereum Smart Contract. After few months, I needed to run that script again but I was getting some weired clue-less error. I spent a lot of time debugging the issue and found that I was using a **_package which required Node.js v14_** to run and **_I had Node.js v16 installed on my machine_**. Maybe, some specific method that was used in that package was deprecated Node.js v16. So, I had to downgrade my Node.js version to v14 to run the script.

Imagine if that script was dockerized, I would not have wasted my time debugging an issue which was not even present in my code, rather in that package. I would have just run the script in a Docker container with Node.js v14 installed and it would have run without any issues.

# What is Docker?

Docker is a platform to bundle your application code along with the environment it needs to run, so that **_if it works on your machine, it will work on any machine that has Docker installed_.**

Docker bundles application code, operating system, libraries, and other dependencies in one package called a `docker image` which can be used to run multiple instances of the application in isolated environments called `docker containers`.

👉 **Consistent Environment**

- Docker containers provide a consistent environment for your application to run, so you can be sure that when your application is ported to another developer's machine or to a server, it will behave the exact same way.

- It helps developers to work on different projects without worrying about the environment setup.

- E.g. If you have an old Node.js application that requires Node.js v18 to run, you can create a Docker container with Node.js v18 installed and run the application in that container, without worrying about the version of Node.js installed on your machine.

- Imagine running an application which was intended for Node.js v18, on a machine with Node.js v22 installed (which may have some breaking changes). But if that is dockerized, it will run in the same environment as it was intended to (Node.js v18).

👉 **Isolation**

- Docker containers are isolated from each other and from the host system, so they offer a clean and consistent environment to run your application.

- This isolation helps to prevent conflicts between different applications running on the same machine. Some applications might be running on Debian with Node.js v16, while others might be running on Ubuntu with Node.js v18, v20, etc. inside their respective containers.

- Docker containers are secure and can be used to run untrusted code in a sandboxed environment, reducing the risk of security vulnerabilities because the code is isolated from the host system.

👉 **Portability**

- Docker images are portable and can run on any machine that has Docker installed, regardless of the underlying operating system.

- E.g. if a developer is working on a Windows machine, they can create a Docker image with Ubuntu OS and Node.js v18 and run their application in that container. Then, they can share the image with another developer who is working on a Mac or Linux machine, and the application will run the same way on their machine as well.

👉 **Scalability**

- Docker containers are scalable and can be used to run multiple instances of the same application on the same machine or across different machines.

- Docker containers can be easily deployed to cloud platforms like AWS, Google Cloud, Azure, etc., and can be scaled up or down based on the demand for the application.

- E.g. if your application is getting more traffic, you can scale up the number of containers running the application to handle the increased load, and scale them down when the traffic decreases.

### What is Dockerfile, Docker Image, Docker Container?

👉 `Dockerfile` is a text file that contains a set of instructions to build a `Docker image`. It contains instructions to install the necessary software packages, copy application code into the `Docker image`, set environment variables, expose ports, and define the command to run the application.

👉 A `Docker image` is a template that contains the application code, environment and dependencies required to run an application inside a `Docker container`. It is created from a `Dockerfile` and can be used to create multiple instances of a `Docker container`.

- `Docker image` can be shared, stored, and reused across different environments. It is portable and can be used to run `docker containers` on any machine that has Docker installed.

👉 A `Docker container` is a lightweight, standalone instance created from a `Docker image` that can be run. Multiple containers of same or different images can run on the same machine, isolated from each other and from the host system.

# Let's Talk About Docker Compose

Docker Compose is a tool for defining and running multi-container Docker applications. It uses a YAML file to configure the application's services, networks, and volumes.

- With Docker Compose, you can define a multi-container application in a single file and run it with a single command.

👉 When you have a web application that has an API, a database, a frontend. Then you also need to define the network between these services (so they can communicate with each other), the volumes to store data (so that when you remove and recreate containers, the data should persist). Docker Compose helps you define all these in a single file and run them together with a single command `docker compose up`.

👉 Docker Compose is useful for development, testing, and staging environments where you need to run multiple services together.

That's all for an overview of Docker and Docker Compose.

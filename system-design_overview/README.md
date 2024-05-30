<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [SYSTEM DESIGN.](#system-design)
  - [What is the Need for the System Design?](#what-is-the-need-for-the-system-design)
  - [Essential Design Methods in System Design](#essential-design-methods-in-system-design)
  - [Basics and Fundamental Concepts of System Design](#basics-and-fundamental-concepts-of-system-design)
    - [Consistency Patterns](#consistency-patterns)
    - [Availability Patterns](#availability-patterns)
  - [Advanced Concepts in System Design.](#advanced-concepts-in-system-design)
  - [Components of System Design](#components-of-system-design)
  - [Approaching System Design Interview Questions](#approaching-system-design-interview-questions)
  - [Sample System Design Interview Questions and Solutions](#sample-system-design-interview-questions-and-solutions)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# SYSTEM DESIGN.
<b>Definition:</b>A step-by-step process of defining a particular software's architecture, modules, components, etc before starting to write code for the application.  

<b>System design primer</b> helps you to understand the essence of system design and various concepts from basic to advanced. Furthermore, tech giant companies like Google, Microsoft, Amazon, etc., have particular rounds for the system design interview in their interview process. In this round, they check the interviewer's ability to think about building the application's architecture from scratch. 

## What is the Need for the System Design?
1. To prepare the architecture for the application according to requirements
2. To decide how to make the application scalable in case the traffic increases 

## Essential Design Methods in System Design
System design contains a wide range of design methods and techniques to design the system's architecture. Developers are required to choose a particular method based on the project's requirements.  
some of the system design methods commonly used by developers.
1. <b>Architectural Design-</b>
It is the base of the system design.  
-It describes the infrastructure, model, view, components, and interaction.	
The architectural design includes client-server interaction, microservices, etc.
2. <b>ERD Diagram-</b>
An acronym for the entity-relationship diagram.  
-The ERD diagram is mainly used in designing the application's database structure.
In the ERD diagram, you can; -  
    - Define multiple database schemas
    - Add entities in each schema
    - Add multiple attributes for each entity
    - Connect the entities of two different schemas if a relationship exists between them.

3. <b>UML Diagram-</b>
UML stands for the unified modeling language.   
-It is used to prepare modeling software systems.  
-It contains different diagrams like activity <b>diagrams, class diagrams, sequence diagrams, etc</b> to represent the different aspects of the system
4. <b>Class Diagrams-</b>
Used to represent the classes  
-The class diagram contain the class's attributes, methods, and relationships between multiple classes.  
-It provides an overview of the system's data and functionality.
5. <b>Sequence Diagrams-</b>
Represent the interaction between the various components of the system.   
-It is used to model the behavior of the system. 
For instance, you can specify when users enter the specific input at the front end side of the application, how the application should process the data, and return the response.
## Basics and Fundamental Concepts of System Design
1. <b>Performance vs Scalability</b>  
<b>Performance;-</b> How fast is a web?  
when you visit any particular website, some website takes more time to load and others get loaded in a fraction of a second. For example Google.  
Various mechanisms like caching can be used to increase the application's performance and serve resources faster.  
<b>Scalability-</b> refers to the ability to scale the application.  
When your application is becoming more popular every day, due to that, your application’s server is getting more requests therefore, you can scale your application by distributing the load across multiple servers or increasing the single server's capacity.  
2.  <b>Latency vs Throughput</b>  
<b>Latency-</b> is a measurement of the time delay to complete a single request or data operation.   
A network delay that occurs due to Geographical distance, transport protocol, or network infrastructure.    
It's mainly crucial in online or live gaming, live streaming, video calls, etc.,  It is measured in the Milliseconds.  
<b>Throughput;-</b> It is the number of operations the system can handle in a particular time or the number of data passed via network request in a given time.   
-It is used to check the capability of the systems. If the throughput of the server is low, architectures can scale the server to make it efficient  
It is measured in megabytes (MB) per second. 
3. <b>Consistency Patterns and Availability Patterns</b>  
<b>Consistency:</b> ensures that all nodes in the system read the same data at a particular time.  
<b>Availability:</b> The system's availability ensures that each request receives a response either with fresh or old data. The availability is important when high uptime is needed.

### Consistency Patterns
•	<b>Strong consistency:</b> Strong consistency ensures that each request should get the most recent data. To achieve strong consistency, you require synchronized communication. It prioritizes consistency over availability.  
• <b>Eventual Consistency:</b> Eventual consistency allows temporary inconsistencies to be resolved soon. It prioritizes availability over consistency.  
•	<b>Weak Consistency:</b> In the weak consistency pattern, the user may get fresh data after writing the data. It focuses on the fast access. It can be used in live streaming or video chat.

### Availability Patterns
- <b>Load Balancing:</b> The upcoming request can be distributed across multiple servers to achieve high availability. As we balance the load here, it is called the load balancing.  
- <b>Retry and timeout strategies:</b> You can implement the retry mechanism to process the request after every interval if the system fails or is not available. 

## Advanced Concepts in System Design.
1. <b>CDN</b>  
-<b>CDN</b> stands for the Content Delivery Network. A distributed server network located at different geo-locations, used to deliver content like images, various data,etc., from the server.  
-The CDN delivers the resource faster, decreases latency ___(network delay)___, and improves the application's performance.  
-When users request a particular resource, the application requests the nearest server. If the nearest server has cached resources already, it serves it directly. Otherwise, it requests the origin server, caches the resources, and delivers them to the users. Next time, when the server gets a request for the same resource, it will return the cached resources.
2. <b>DNS</b>  
-<b>DNS</b> stands for the Domain Name System.  
-Allows users to access the website and its resources using the domain name ___(e.g., www.example.com).___  
-It maps the unique domain name with a unique IP address. So, whenever you make a request for the resources of the particular domain name, it returns the resources of IP addresses, which are mapped with the domain name. 
3. <b>Caching</b>  
-It is a mechanism to serve resources faster also called the high speed storage that works between the web application and the source of the data.  
-When you make a request for some data, the application checks first in the cache storage. If data exists in the cache storage, it returns the data. Otherwise, it requests the database or source of the data, stores it in the cache storage, and sends data to the application.
4. <b>Proxies</b>  
<b>proxy server.</b> The proxy server works between the client of the application and the internet. Whenever you request to get resources from the internet, the application requests the proxy server, and the proxy server gets resources and sends them back to the application.

## Components of System Design
The following are the components of system design.
1. <b>Micro services and Service Discovery</b>  
-Micro services break down complex applications into small services, such that each service works independently and accomplishes specific tasks.
The concepts below are related to the micro services.  
    - __Service Identification:__ Every micro service has a unique ID and name for its identification.
    - __Dynamic Service Discovery:__ Each micro service dynamically find other services located in the same network. So, scaling and load balancing become easy.  
2. <b>Database Systems:RDBMS and NoSQL </b>    
-Categories of these database are:  
 - <b>RDBMS-</b>   
-It stands for the Relational Database Management System.  
-SQL databases are built on the top of the RDBMS. When you need to store structured data, you can choose the RDBMS for the software or application.  
-It makes it easier to access the data from the database and connect it with other data as they are stored in the table format.    
___Characteristics of the RDBMS database___.  
    •	It stores the data in the table format.  
    •	You can’t scale the RDBMS database horizontally, but you can scale it vertically.  
    •	SQL is a query language for the RDBMS databases.  
    •	Accessing data from the RDBMS database is slow.  

- <b>NoSQL</b>  
-__NoSQL__ database means a non-SQL database.  
-It stores the data in the key-value pair instead of in table format. You can use the NoSQL database when you are required to store unstructured data in the database.  
___Characteristics of the NoSQL database.___  
    •	It stores the data in the key-value pair format.  
    •	NoSQL database is horizontally scalable, as you can add new key-value pairs for new attributes.  
    •	Each record can contain different key-value pairs.  
    •	It is faster than RDBMS databases.  
    •	It supports frequent changes in the database.  
3.<b>Communication Protocols</b>  
-<b>Protocols</b> are rules and communication protocols used to communicate or exchange the data between two systems.   
-The systems can also be <b>server and client.</b>   
-Various communication protocols include; -   
    - <b>HTTP/HTTPS:</b> The full form of the HTTP is a Hypertext Transfer Protocol. ___https___ is a secure version of HTTP.  
    -It is used in web-based communication. It is a good idea to use HTTPS always for security reasons.  
    - <b>TCP/IP:</b> The TCP stands for the Transmission Control protocol.  
    -It  is used to communicate over the internet. For example, it is used in the <b>chatting application.</b>
    - <b>UDP </b>– The UDP is an acronym for the user datagram protocol. It is mainly used for live streaming, video calls, etc., in which data loss can be tolerable.  
    - <b>Web Sockets:</b> Are used for bi-directional duplex communication. It builds the connection between two web applications.  
## Approaching System Design Interview Questions
Step-by-step Guide
1. <b>Requirements clarification</b>
-it is important to know the requirements needed, before you prepare a system design for any software. This is the first step.   
-There can be two types of requirements:   
   - function requirements  
    - non-function requirements.</b>   
<b>Function requirements:</b> The requirements in the application with which the user interacts. For example, authentication, navigation, payment services integration, etc.  
<b>Non-function requirements:</b> Are the requirements that improve the application's capabilities. For example, high availability, scalability, consistency, low latency, high throughput, etc., are the non-functional requirements.
2. <b>Estimation of resources:</b>
The second step is deciding what kind of resources you should use to build the application by keeping in mind how many requests the resource will receive per day or second.   
-Furthermore, you are also required to decide how much data you require to store in the database.
3. <b>System interface definition:</b>
The third step is designing the system interface.  
-Defining the endpoint of a system and what to be expected from each endpoint.  
4. <b>Defining Data model:</b>
Forth step is to select a database for the application. The database will store the structured data and tables are pre-determined, you can use the relational database. NoSQL databases like MongoDB are used for storing the unstructured data.
5. <b>High-level design:</b>
Fifth step is to designing the high-level components.
One cannot design the system for the whole application in a single go. So, you need to go step-by-step.   
-Therefore, you need to decide how you will connect the components of the system with each other. For example, connecting the server with the database, connecting the server with the client, and integrating the third-party tools with the applications.
6. <b>Detailed design</b>
Sixth step is to improve the system design.   
-You will need to analyze the system to fulfill all the non-functional requirements.   
___Analyzation is done by;___  
     •	How to use caching to improve the performance of the application?  
    •	How do we scale the application via load balancing?  
    •	Should you use the CDN for caching, or are cookies enough?  
    •	How would you handle the failure of the application?  
    •	Should you distribute the data across multiple databases?  
    •	How will you replicate the database?
7. <b>Identifying and resolving bottlenecks: </b>
Lastly is identify the bottlenecks in your system design and discuss the solutions to resolve them with the interviewer.  
___The samples of the bottlenecks are;___  
•	Can the system fail in any scenario? If yes, how will you handle it?  
•	How do you monitor the performance of the system and issues in the system?  
•	Do you have enough replicas of the database to handle the failure?  


## Sample System Design Interview Questions and Solutions
-Now that we have an overview and an understanding on what system design is, let’s look on some of the interview questions you can be asked and their solutions.
1.	How would you design a URL shortening service similar to TinyURL? -The URL shortening allows users to shorten the long URLs.  
___How to approach it___  
-You can discuss the following;  
•	How you will use the REST API to communicate with the server.  
•	How will you handle the 500 requests every second via load balancing?  
•	You can discuss using the relational database, as it doesn’t require horizontal scaling.  
•	You can discuss how you will prepare a table for relational database to map long URLs with short URLs.  
•	The critical point is how to shorten the long URL by providing a unique id to each shortened URL.  
2. How would you design a Web Crawler?  
<b>Web crawlers:</b> allow one to extract information from different web pages.  
___How to approach it:___  
You can discuss how you open multiple web pages in the web browser. It is very important to know how many browser windows one will open simultaneously to crawl multiple web pages. Let’s say 1000 users open their browser windows together will the device run out of memory?  
3. How would you design Facebook and Instagram?  
    -Before coming up with the applications, the following requirements are necessary;    
    •	User signup/sign-in  
    •	Allowing users to publish posts and short videos  
    •	Followers and following features  
    •	Direct messaging  
    •	Showing the latest posts from their followers  
    •	Showing trending posts in the feed  
___How to approach it:___    
    •	Talk about how you will handle the relationship between users in the database.  
    •	How you will implement the chat features.    
    •	Discuss how you will implement the authentication.  
    •	Discuss algorithms to show trending or latest posts.  
    •	Discuss handling user’s data in the database, when they publish multiple posts.  
    •	Discuss database replication to handle failures.  
    •	Discuss data caching and load balancing.
4. How would you design the API rate limit?  
-API rate limiter allows one to make a particular number of API requests in a specified time.  
-If request increases, API blocks the request for some time.

___How to approach it:___    
    •	Talk about how many maximum requests you want to allow per second?  
    •	Talk about handling multiple requests simultaneously.  
    •	Talk about keep count of requests.   

-When you got through all of these and have your answers well-structured answering the questions asked then you are guaranteed that the interview will be a success.  


For further prepare for the system design interview, you can visit the following pages and get to learn more.  
    •	<a href = https://levelup.gitconnected.com/system-design-interview-survival-guide-2023-preparation-strategies-and-practical-tips-ba9314e6b9e3 target =_blank >The Complete Guide to Ace the System Design Interview </a>   
    •	<a href = https://www.designgurus.io/blog/complete-guide-sys-design target =_blank >Ace Your System Design Interview with 7 Must-Read Papers in 2024</a>  
    •	<a href =https://www.designgurus.io/blog/sys-design-papers target =_blank >System Design Interview Survival Guide (2024): Preparation   Strategies and Practical Tips</a>









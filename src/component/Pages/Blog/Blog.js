import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./Blog.css"

const Blog = () => {
    const checkFont=<FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>
    return (
             <div>
           
        <div className="py-8  bg-blue-900 bg-opacity-10">
            <div  className="lg:px-20 lg:my-8">
            <div className=" grid lg:grid-cols-2 grid-cols-1"></div>
            <div className="p-8 pt-8 lg:order-2 order-1 lg:py-0 sm:mt-12 lg:mt-8">
            
                        <small className="animate-pulse w-6 h-6 text-red-600 md:mt-20 mt-10 text-5xl">| Blogs</small>
                        <ul className="flex justify-center py-2 text-indigo-600">
                            <li className='text-3xl my-4'><span className="text-indigo-600">{checkFont}</span> What are the difference between javascript and nodejs?</li>
                            </ul>
                        
                        <small className="block text-sm text-justify">Both node.JS and Javascript are used for programming. There is, however, a substantial distinction between Node.JS and Javascript. JavaScript (abbreviated as JS) is a lightweight object-oriented scripting language. It is used to create dynamic HTML pages with a variety of interactive features. When run through node interpreters or the V8 engine, Node.JS assists in representing a list of all the methods and objects that JavaScript code can access. </small>
                        <ul className="flex justify-center py-2 text-green-600">
                            <li className='text-3xl my-4'><span className="text-green-600">{checkFont}</span> When should you use nodejs and when should you use mongodb?</li>
                            </ul>
                            <strong className="flex justify-content-start text-red-500">When should Nodejs be used?</strong>
                        <small className="block text-sm text-justify"> Any project requires a programming environment and a runtime library that can build and/or interpret your code and provides basic programming tools and support. Nodejs is a Javascript programming language tool. Other languages with similar tools include Python, Java, PHP, C#, C++, Go, and others. So, if you want to develop a Javascript standalone program or server, you can utilize nodejs. </small>
                        <br /><strong className="flex justify-content-start text-red-500">When should MongoDB be used?</strong>
                        <small className="block text-sm text-justify"> If your application requires the capacity to save data so that it can be efficiently queried or updated later, you'll almost certainly need to use a database. There are numerous well-known databases. One such database is MongoDB. Other databases include MariaDB, MySql, CouchDB, DynamoDB (on AWS), and Postgres. Distinct databases have different strengths (things they excel at) and separate methods of being used, therefore picking the right/best database for your needs is a completely different topic. </small>
                        <ul className="flex justify-center py-2 text-pink-600">
                            <li className='text-3xl my-4'><span className="text-fuchsia-600">{checkFont}</span> What are the difference between SQL and NoSQL databases?</li>
                            </ul>
                        
                        <small className="block text-sm text-justify">SQL databases are a sort of system software that allows you to manage, analyze, capture, and query structured data in a relational manner. NoSQL databases are a type of software that enables the storage and retrieval of structured, unstructured, and polymorphic data for a variety of purposes. SQL is a language that is used to communicate with databases in order to save, delete, update, insert, and retrieve data. NoSQL is database software that allows you to retrieve, store, and manage the scalability of your databases. SQL was created in 1970 to solve flat file storage difficulties. In the year 2000, NoSQL was created as an improved version of SQL databases for unstructured and semi-structured data. Structured Query Languages (SQL) are supported by SQL databases. There is no declarative query language in NonSQL. SQL supports table based data type. NoSQL supports document oriented, graph databases, key value pair-based.</small>
                        <ul className="flex justify-center py-2 text-blue-600">
                            <li className='text-3xl my-4'><span className="text-blue-600">{checkFont}</span> What are the difference between javascript and nodejs?</li>
                            </ul>
                        
                        <small className="block text-sm text-justify">JSON Web Token (JWT) is an open standard (RFC 7519) for securely sending information as a JSON object between parties. <hr />It is small, readable, and digitally signed by the Identity Provider using a private key/or a public key pair. Essentially, the identity provider (IdP) creates a JWT confirming user identification, and the resource server decodes and verifies the token's authenticity using a secret salt / public key.
                        <ul className="py-2 text-green-600">
                            <li>1. Sign in with a username and password, or with Google/Facebook.</li>
                            <li>2. The authentication server validates the credentials and generates a jwt that is signed with either a secret salt or a private key.</li>
                            <li>3. The JWT is used by the user's client to access protected resources by sending it in the HTTP Authorization header.</li>
                            <li>4. The resource server then uses the secret salt/public key to validate the token's authenticity.</li>
                            </ul>
                            </small>
                    </div>
            </div>
        </div>
        </div>
        
    );
};

export default Blog;
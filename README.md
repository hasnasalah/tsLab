# Inventory Tracker

A TypeScript inventory management system that handles **physical and digital products**, including **tax calculations**, **bulk discounts**, and **sorting functionality**.  

This project demonstrates **object-oriented programming** in TypeScript, such as **inheritance, encapsulation, polymorphism, and interfaces**.



## Features

- Create **PhysicalProduct** and **DigitalProduct** instances.  
- Calculate prices with **tax** (10% for physical, 0% for digital).  
- Apply **bulk discounts** for physical products when quantity is 5 or more.  
- Sort products by **price** or **name**.  
- Display product details in a clean format.  
- Use **getter methods** for formatted weight (kg) and file size (MB).  
- Demonstrates **OOP principles** and **TypeScript type safety**.

## Installation

1. Clone the repository:

 using bash : git clone https://github.com/hasnasalah/tsLab

2. cd inventory-tracker
3. npm install typescript @types/node
3. npx tsc
4. node dist/main.js



## Challenges Faced

Configuring tsconfig.json
Initially, I had errors related to module imports.
I solved it by setting "module": "nodenext" and "verbatimModuleSyntax": true in tsconfig.json.




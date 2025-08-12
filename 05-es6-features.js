/*
===========================================
ASSIGNMENT 5: ES6+ FEATURES
===========================================
 
📚 LEARNING OBJECTIVES:
- Master modern JavaScript syntax and features
- Use template literals for complex string operations
- Practice destructuring for arrays and objects
- Work with spread and rest operators
- Understand enhanced object literals
 
💡 CONCEPTS COVERED:
1. Template literals with embedded expressions
2. Destructuring assignment (arrays and objects)
3. Default parameters and rest parameters
4. Spread operator for arrays and objects
5. Enhanced object literals
6. Arrow functions vs regular functions
7. Block scoping with let and const
 
📖 EXAMPLES:
// Template literals
const name = 'John';
const message = `Hello, ${name}! Today is ${new Date().toDateString()}`;
 
// Destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5];
const {x, y, z = 0} = {x: 1, y: 2};
 
// Spread operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]
*/
 
// =================== YOUR CODE STARTS HERE ===================
 
// TODO 1: Use const and let appropriately
const PI = 3.14159;      // This should never change
let counter = 0;       // This will be reassigned
 
// TODO 2: Template literals with complex expressions
const user = { name: 'Sarah', age: 28, role: 'developer' };
const currentYear = new Date().getFullYear();
 
const userInfo = `User Profile:
Name: ${user.name}
Age: ${user.age} (born in ${currentYear - user.age}})
Role: ${user.role.toUpperCase()}
Status: ${user.age >= 18 ? 'Major' : 'Minor'}
`;
 
// TODO 3: Array destructuring with default values and rest
const scores = [95, 87, 92, 78, 85];
const [highest, second, third = 67, ...remainingScores] = scores;
 
// TODO 4: Object destructuring with renaming and defaults
const product = {
    id: 'P001',
    title: 'Wireless Headphones',
    price: 199.99,
    category: 'Electronics'
};
 
const {
    id: productId,
    title: productName,
    price: productPrice,
    category: productCategory,
    rating = 'high'  // default value
} = product;
 
// TODO 5: Nested destructuring
const company = {
    name: 'TechCorp',
    location: {
        country: 'USA',
        city: 'San Francisco',
        address: {
            street: '123 Tech Street',
            zipCode: '94105'
        }
    },
    employees: 150
};
 
const {
    name: companyName,
    location: {
        city: companyCity,
        address: { street: companyStreet }
    },
    employees: employeeCount
} = company;
 
// TODO 6: Function with default parameters and rest parameters
function createReport(title, author = 'SriSri', ...sections) {
    return {
        title: title,
        author: author,
        sections:sections,
        createdAt: new Date().toISOString(),
        pageCount: sections.length
    };
}
 
// TODO 7: Arrow functions with different syntaxes
const square = x => x*x;                    // Single parameter, implicit return
const add = (a, b) => a+b;                  // Multiple parameters, implicit return
const processData = data => {                                // Single parameter, explicit return
    const processed = data.map(item => item * 2);
    return processed;
};
 
// TODO 8: Spread operator with arrays
const fruits = ['apple', 'banana', 'orange'];
const vegetables = ['carrot', 'broccoli', 'spinach'];
const groceries = [...fruits, 'bread',...vegetables, 'milk'];
 
// TODO 9: Spread operator with objects
const baseConfig = {
    theme: 'light',
    fontSize: 14,
    autoSave: true
};
 
const userConfig = {
    theme: 'dark',
    language: 'spanish'
};
 
const finalConfig = {
    ...baseConfig,
   ...userConfig,
    lastModified: Date.now()
};
 
// TODO 10: Enhanced object literals
const name = 'Calculator';
const version = '2.0';
const multiply = (a, b) => a * b;
 
const calculatorApp = {
    name,                           // Property shorthand
    version,                        // Property shorthand
    [`created_${Date.now()}`]: true, // Computed property name
 
    // Method shorthand
    add(a, b) {
        return a+b;
    },
 
    // Method shorthand with arrow function stored in variable
    multiply,
 
    // Method with computed name
    ['get' + 'Info']() {
        return `${this.name} v${this.version}`;
    }
};
 
// TODO 11: Function that uses multiple ES6+ features
function analyzeData(dataset, options = {}) {
    const {
        sortBy = 'value',
        filterMin = 0,
        limit = 10
    } = options;
 
    return dataset
        .filter(item => item.value >= filterMin)
        .sort((a, b) => {
            return sortBy === 'value' ?
                b.value - a.value :
                a.name.localeCompare(b.name);
        })
        .slice(0, limit)
        .map(({ name, value, ...other }) => ({
            name: name.toUpperCase(),
            value:value,
            hasMetadata: Object.keys(other).length > 0
        }));
}
 
// TODO 12: Template literal function (tagged template)
function highlight(strings, ...values) {
    return strings.reduce((result, string, i) => {
        const value = values[i] ? `<mark>${values[i]}</mark>` : '';
        return result + string + value;
    }, '');
}
 
// =================== TEST YOUR CODE ===================
 
console.log('=== ASSIGNMENT 5 RESULTS ===');
 
// Test variables
counter = 5;
console.log('PI:', PI, 'Counter:', counter);
 
// Test template literals
console.log('User Info:', userInfo);
 
// Test array destructuring
console.log('Scores Analysis:');
console.log(`Highest: ${highest}, Second: ${second}, Third: ${third}`);
console.log('Remaining scores:', remainingScores);
 
// Test object destructuring
console.log('Product Info:');
console.log(`ID: ${productId}, Name: ${productName}`);
console.log(`Price: $${productPrice}, Category: ${productCategory}, Rating: ${rating}`);
 
// Test nested destructuring
console.log(`Company: ${companyName} in ${companyCity}`);
console.log(`Address: ${companyStreet}, Employees: ${employeeCount}`);
 
// Test function with defaults and rest
 
 
/**
 * Assignment 6: Promises and Async/Await
 * Fill in the placeholders to complete the code
 * Test this code in your browser console
 */
 
// TODO: Create a simple promise
const simplePromise = new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;
    setTimeout(() => {
        if (success) {
           console.log('Promise resolved successfully!');
        } else {
            console.log('Promise rejected!');
        }
    }, 1000);
});
 
// TODO: Handle promise with .then() and .catch()
simplePromise
    .then(message => {
        console.log('Success:', message);
    })
    .catch(error => {
        console.log('Error:', error);
    });
 
// TODO: Create a function that returns a promise
function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId > 0) {
                resolve({
                    id: userId,
                    name: `User ${userId}`,
                    email: `user${userId}@example.com`
                });
            } else {
              reject('Invalid user ID');
            }
        }, 500);
    });
}
 
// TODO: Use async/await
async function getUserInfo(userId) {
    try {
        const user = await fetchUserData(userId);
        console.log('User data:', user);
        return user;
    } catch(error) {
        console.log('Failed to fetch user:', error);
        return null;
    }
}
 
// TODO: Handle multiple promises with Promise.all
const promise1 = fetchUserData(1);
const promise2 = fetchUserData(2);
const promise3 = fetchUserData(3);
 
Promise.all([promise1, promise2, promise3])
    .then(users => {
        console.log('All users:', users);
    })
    .catch(error => {
        console.log('One or more promises failed:', error);
    });
 
// TODO: Use Promise.race
Promise.race([
    fetchUserData(4),
    new Promise((_, reject) => setTimeout(() => reject('Timeout'), 300))
])
    .then(result => {
        console.log('Race winner:', result);
    })
    .catch(error => {
        console.log('Race error:', error);
    });
 
// TODO: Chain promises
fetchUserData(5)
    .then(user => {
        console.log('First user:', user);
        return fetchUserData(6);
    })
    .then(user => {
        console.log('Second user:', user);
    })
    .catch(error => {
        console.log('Chain error:', error);
    });
 
// Test async function
getUserInfo(1);
getUserInfo(-1);
 
console.log('Promises are being processed...');
 
 
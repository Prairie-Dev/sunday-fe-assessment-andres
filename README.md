# Sunday Frontend Engineering Assessment

## Overview
This is a frontend engineering assessment for Sunday, focused on building a React-based application for a lawn care subscription service. The starter code provides a basic UI layout with product displays, but lacks the necessary interactivity. We will pair program through parts of this assessement in the upcoming interview to implement the missing functionality.

## Considerations for a successful interview
- Please disable any AI autocomplete tools for the duration of the interview.
- We recommend using a VSCode-based IDE, as you can open a browser tab so the interviewer can see the app running. If you're using a different IDE, you can run the app locally and share your code, and the interviewer can run it in their browser at a later time after you submit.
- We are less concerned with the completeness of the solution, and more concerned with your approach to solving the problem and working with the interviewer.

## Challenge & Requirements
Your task is to demonstrate your knowledge of leveraging React components to implement the missing functionality in this application, allowing users to build a lawn care subscription plan by adding products to their subscription and generating a shipment schedule based on the application dates of the products.

### Core Requirements

#### 1. Subscription Management

- **Add Products**: Clicking "Add to Subscription" adds the product to the user's subscription cart
- **Quantity Handling**: Multiple clicks on the same product should increase its quantity (show quantity in cart)
- **Remove Products**: Users can remove items from their subscription cart

#### 2. Shipment Plan Generation

- **Trigger**: When "Generate Lawn Plan" is clicked, create an optimized shipment schedule
- **Display**: Show each shipment with:
  - Shipment date (when customer receives it)
  - Products included (with quantities)
  - Total price per shipment
- **Optimization**: Group products intelligently based on application dates and constraints

### Business Constraints

1. **Shipment Limits**: Must generate exactly 2-4 shipments (no more, no less)
2. **Delivery Timing**: Products must arrive **before** their application dates
3. **Lead Time**: Assume 5-7 days shipping time when calculating shipment dates
4. **Grouping Logic**: Products with an application date within the same week should generally be shipped together when possible

### Technical Expectations

- **State Management**: Clean React state management for cart and shipments
- **Data Transformation**: Efficient algorithms for grouping and scheduling
- **Component Structure**: Well-organized, reusable React components
- **User Experience**: Clear feedback, loading states, and intuitive interactions

### Sample Expected Flow

1. User adds multiple products to subscription (some with same application dates)
2. Cart updates showing products, quantities, and total subscription cost
3. User clicks "Generate Lawn Plan"
4. System creates 2-4 optimized shipments grouped by application timing
5. Shipment schedule displays with dates, products, and pricing

## Getting Started

1. Clone this repository
2. Run `npm install` or `yarn` to install dependencies
3. Run `npm run dev` or `yarn dev` to start the development server
4. Open your browser to the displayed URL (usually http://localhost:5173)

## Technical Notes

- This project uses React with Vite as the build tool
- Styling is done with plain CSS
- The product data is provided in `src/data/products.js`
- You are free to use any state management approach you prefer (useState, useReducer, context, etc.)
- You may add additional dependencies if needed, but try to keep the solution as lean as possible

## Evaluation Criteria

Your solution will be evaluated based on:

- Functionality: Does it meet all the requirements?
- Code quality: Is the code clean, well-organized, and maintainable?
- UI/UX considerations: Is the interface intuitive and responsive?
- Problem-solving approach: How did you tackle the requirements?
- Edge cases: Did you handle potential edge cases?

## Submitting Your Solution

When you're done, please:

1. Push your code to a GitHub repository
2. Include any instructions or notes in the README
3. Share the repository link with the hiring team

Feel free to ask any clarifying questions about the requirements during your pairing session. Good luck!

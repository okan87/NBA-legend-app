# React Bootstrap

Click to view the documentation
Click to see React Bootstrap Components
Click to see React Bootstrap Components

React Bootstrap is an integration kit that allows Bootstrap, a popular UI component library, to be used in React applications.

React-Bootstrap is a complete reimplementation of Bootstrap components using React. It has no dependency on Bootstrap.js or jQuery. If you have React set up and React-Bootstrap installed, you have everything you need.

Methods and events that use JsDom or jQuery are done by directly manipulating the DOM. In contrast, React uses state updates to modify the virtual DOM. In this way, React-Bootstrap provides a more reliable solution by incorporating Bootstrap functionality into React’s virtual DOM.

To use React Bootstrap, you need to add the relevant package to your React application and use the components according to the documentation. After adding React Bootstrap to your project’s dependencies, you can start incorporating the design you want using the components provided in the examples or documentation.

- React-Bootstrap is a complete reimplementation of Bootstrap components using React. It has no dependency on Bootstrap.js or jQuery. If you have React set up and React-Bootstrap installed, you have everything you need.

- Making Bootstrap Components Compatible with React: Bootstrap is a popular UI framework with many useful components. However, Bootstrap cannot be used directly in React projects in its original form. React Bootstrap makes Bootstrap components compatible with React, allowing you to take advantage of React's component features. For example, you can create dynamic and interactive components using state management in React components.

- Documentation and Examples: React Bootstrap offers extensive documentation and examples to help users get started quickly. The documentation explains how to install React Bootstrap, the features of the components you’ll use, and how to use them. Examples demonstrate typical usage scenarios and can serve as a starting point. This makes it easier to integrate React Bootstrap into your project and use the components correctly.

- Responsive Design: One of Bootstrap's core features is its support for responsive design, ensuring that your application displays well on different devices and screen sizes. React Bootstrap preserves Bootstrap's responsive features, helping you create a responsive user interface even when using React components.

- Easy Customization: In addition to using Bootstrap components, React Bootstrap also allows you to customize them. You can easily modify the appearance and behavior of components using Bootstrap’s CSS classes and customization options. Additionally, React’s features enable you to programmatically manage the state and behavior of the components.

React Bootstrap offers a powerful user interface-building experience by combining React and Bootstrap. React's component-based structure makes Bootstrap components more modular, allowing you to create a more interactive and dynamic user interface using React’s powerful features.

## How can we include it in our project?
```javascript
npm install react-bootstrap bootstrap
or
yarn add react-bootstrap bootstrap


// The following line can be included in your src/index.js or App.js file

import 'bootstrap/dist/css/bootstrap.min.css';
```

Now that we’ve added it to our project, we can start using both Bootstrap and React Bootstrap features.

For example, let's say you want to create a button element. First, import the Button component from React-Bootstrap in the relevant page.
```jsx
import Button from 'react-bootstrap/Button';
...
```
Then, you can use the Button component within the same page.

```jsx
import Button from 'react-bootstrap/Button';

function MyButtonComp() {
  return (
    <>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="info">Info</Button>
      <Button variant="light">Light</Button>
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
    </>
  );
}

export default MyButtonComp;

```
The Button component includes the features of the HTML button element. It also includes the CSS properties of the btn class. Using React props, we can add additional features to the Button component. The prop names for React-Bootstrap components are predefined. You can learn these from the documentation (Click here for the Button example) or look at the relevant component within the node_modules folder (I recommend checking the documentation).

### Examples of Responsive Grid Layout:

##### Responsive Settings with Col
Col allows you to define column widths across 6 breakpoints (xs, sm, md, lg, xl, and xxl). For each breakpoint, you can specify how many columns to span (We provide the measure the same way we do in Bootstrap. So col-sm-8 is equivalent to sm={8}, determining how much space the column should occupy in that row).
```jsx
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ResponsiveAutoExample() {
  return (
    <Container>
      <Row>
        <Col sm={8} md={6} lg={4}>sm=8-md=6-lg=4</Col>
        <Col sm={8} md={6} lg={4}>sm=4</Col>
      </Row>
    </Container>
  );
}

export default ResponsiveAutoExample;
```

##### Responsive Settings by Adjusting Col Widths in Rows

Row allows you to define column widths across 6 breakpoints (xs, sm, md, lg, xl, and xxl). For each breakpoint, you can specify how many columns should fit side by side (The measure depends on how many you want to display per row. For example, 2 per row on xs screens, 4 on md, and 6 on lg and beyond).
```jsx
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function RowColLayoutExample() {
  return (
    <Container>
      <Row xs={2} md={4} lg={6}>
        <Col>1 of 2</Col>
        <Col>2 of 2</Col>
      </Row>
      <Row xs={1} md={2}>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
  );
}

export default RowColLayoutExample;
```

##### Default 6 Breakpoints

| Breakpoint           | Class infix | Dimensions |
|----------------------|-------------|------------|
| X-Small              | xs          | <576px     |
| Small                | sm          | ≥576px     |
| Medium               | md          | ≥768px     |
| Large                | lg          | ≥992px     |
| Extra large          | xl          | ≥1200px    |
| Extra extra large    | xxl         | ≥1400px    |

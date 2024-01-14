const parent = React.createElement('div', {id:"parent"},
 React.createElement('div', {id:'child'},
  [React.createElement('h1', {}, "Hello I am heading 1 from child div!"), React.createElement('h2', {}, "Hello I am heading 2 from child div!")]));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent)
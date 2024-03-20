import '../styles/index.css';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

const Kids = () => {
    // component logic
    return <div>Kids Component</div>;
  };
  
  
  // Add specific icons to the library
  library.add(faCheckSquare, faCoffee);
  
  // Tell Font Awesome to watch the DOM and add the SVGs when it detects icon markup
  dom.watch();
  
  export default Kids;
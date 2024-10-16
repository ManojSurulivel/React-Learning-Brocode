//List with Components


//Ex:1.
// import React from 'react'

// const List = () => {
      
//     const fruits = [
//                     {id: 1, name:"apple", calories:95},
//                     {id: 2, name:"banana", calories:105},
//                     {id: 3, name:"orange", calories:45},
//                     {id: 4, name:"grapes", calories:75},
//                     {id: 5, name:"pinapple", calories:40},
//                     {id: 6, name:"coconut", calories:159},
//                    ];

//     //fruits.sort((a,b) => a.name.localeCompare(b.name)); //ALPHABETICAL
//     //fruits.sort((a,b) => b.name.localeCompare(a.name)); //REVERSE ALPHABETICAL
//     //fruits.sort((a,b) => a.calories - b.calories);  //NUMERIC
//     //fruits.sort((a,b) => b.calories - a.calories);  //REVERSE NUMERIC
    
//     //const lowcalFruits = fruits.filter(fruit => fruit.calories < 100);
//     //const highcalFruits = fruits.filter(fruit => fruit.calories >= 100);



//     const listItems = fruits.map(fruit => <li key={fruit.id}>
//                                         {fruit.name}:  &nbsp;
//                                         <b>{fruit.calories}</b></li>);

//     return(<ol>{listItems}</ol>);
// }

// export default List


//Ex: 2.
import React from 'react';
import "./List.css"
import PropTypes from 'prop-types';

const List = (props) => {
      
   
    const category = props.category;
    const itemList = props.items;


    const listItems = itemList.map(item => <li key={item.id}>
                                        {item.name}:  &nbsp;
                                        <b>{item.calories}</b></li>);

    return(
          <>
          <h3 className='list-category'>{category}</h3>
          <ol className='list-items'>{listItems}</ol>
          </>
          );
}
List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number,
                                                name:PropTypes.string,
                                                calories: PropTypes.number })),
}
List.defaultProps = {
    category: "category",
    items: [],
}

export default List;
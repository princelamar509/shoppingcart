import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Show from './components/show';
import Cart from './components/Cart';

 




function App() {
    const [courses, setCourses] = useState([
        { id: 1, 
          name: 'Hoodie', 
          price: 49.99, 
         
          image: 
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPAtVBi9AQ-U1PHKiSb4E7gx3-HrGDrYdeGA&s'
        },
        { id: 2, 
          name: 'Bag', 
          price: 69.99, 
          image: 
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEUnJkc8_ZN95TkobKqiqRGAZDWX980xwRKw&sp'
        },
        { id: 3, 
          name: ' Hoodie', 
          price: 79.99, 
          image: 
'data:image/jpeg;base64,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'
        },
        { id: 4, 
          name: 'Bracelet', 
          price: 999.99, 
          image: 
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYX3I0Yvr8BCDW-JPH65EallLGTMEFqxcmOA&s'
        },
        { id: 5, 
          name: 'Hat A.S', 
          price: 49.99, 
          image: 
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROBEhG3iXRjL1-oHiYwMTMOWprpSAQo3LTCA&s'
        },
        { id: 6, 
          name: ' Hat B.S', 
          price: 49.99, 
          image: 
'data:image/jpeg;base64,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'
        },
        { id: 7, 
          name: ' Pearly Bracelet', 
          price: 38.99, 
          image: 
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKt-1vWjRPJxNrw2HzR7tDNl34KtOZTl9QzQ&s'
        },
        { id: 8, 
          name: 'Dress Shirt', 
          price: 59.99, 
          image: 
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYkO2dt9RZB6H7lErcI9vlzaVlYg6O4iX2hA&s'
        },
        { id: 9, 
          name: 'Dress Shirt', 
          price: 59.99, 
          image: 
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1uu4wmenLPTkxd3Vin6nXaB7nxi_nsx3msw&s'
        }
    ]);
 
  
    



    const [cartCourses, setCartCourses] = useState([]);
    const [searchCourse, setSearchCourse] = useState('');
 
    const addCourseToCartFunction = (GFGcourse) => {
        const alreadyCourses = cartCourses
                               .find(item => item.product.id === GFGcourse.id);
        if (alreadyCourses) {
            const latestCartUpdate = cartCourses.map(item =>
                item.product.id === GFGcourse.id ? { 
                ...item, quantity: item.quantity + 1 } 
                : item
            );
            setCartCourses(latestCartUpdate);
        } else {
            setCartCourses([...cartCourses, {product: GFGcourse, quantity: 1}]);
        }
    };
 
    const deleteCourseFromCartFunction = (GFGCourse) => {
        const updatedCart = cartCourses
                            .filter(item => item.product.id !== GFGCourse.id);
        setCartCourses(updatedCart);
    };
 
    const totalAmountCalculationFunction = () => {
        return cartCourses
               .reduce((total, item) => 
                           total + item.product.price * item.quantity, 0);
    };
 
    const courseSearchUserFunction = (event) => {
        setSearchCourse(event.target.value);
    };
 
    const filterCourseFunction = courses.filter((course) =>
        course.name.toLowerCase().includes(searchCourse.toLowerCase())
    );
 
    return (
   
    
        <div className="App">
            <SearchBar searchCourse={searchCourse} 
                             courseSearchUserFunction=
                                 {courseSearchUserFunction} />
            <main className="App-main">
                <Show
                    courses={courses}
                    filterCourseFunction={filterCourseFunction}
                    addCourseToCartFunction={addCourseToCartFunction}
                />
 
                <Cart
                    cartCourses={cartCourses}
                    deleteCourseFromCartFunction={deleteCourseFromCartFunction}
                    totalAmountCalculationFunction={
                        totalAmountCalculationFunction
                    }
                    setCartCourses={setCartCourses}
                />

   
  

            </main>
        </div>
    );
}
 
export default App;

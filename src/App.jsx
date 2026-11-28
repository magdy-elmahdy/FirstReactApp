import './App.css';
import CourseCard from './components/CourseCard';
import Header from './components/layout/header';
import Footer from './components/layout/footer';


function App() {
  const ReactCourse = {
    title:'React Masterclass',
    lessions: 11,
    price: 2600,
    duration: 70,
    image:"https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
    category:"Frontend"
  };
  const NodeCourse = {
    title:'Node.js',
    lessions: 20,
    price: 2500,
    duration: 60,
    image:"https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=250&fit=crop",
    category:"Backend Development"
  };
  const hamboze = {
    lessions: 8,
    price: 888,
    duration: 8
  };
  return (
    <div className="app">

      <Header />
      <h1>Our Courses</h1>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        padding: '2rem'
      }}>
        <CourseCard course={ReactCourse} hamboze={hamboze} />  
        <CourseCard course={NodeCourse} />  
        <CourseCard course={{title:"HTML" ,lessions:10,price:500,duration:15,category:"Backend Development" }} />  
        <CourseCard course={{}} />  
      </div>
      <Footer />
    </div>
  );
}

export default App;
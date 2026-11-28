import './App.css';
import CourseCard from './components/CourseCard';
import Header from './components/layout/header';
import Footer from './components/layout/footer';


function App() {
  const HtmlCourse = {
    title: 'React Masterclass',
    lessions: 11,
    // price: 2600,
    duration: 70,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
    category: "Frontend"
  };
  const ReactCourse = {
    title: 'React Masterclass',
    lessions: 11,
    price: 2600,
    duration: 70,
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
    category: "Frontend"
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
        <CourseCard {...HtmlCourse} >
          <p>this For Html Course</p>
        </CourseCard>
        <CourseCard {...ReactCourse}>
          <p>this For React Course</p>
        </CourseCard>
      </div>
      <Footer />
    </div>
  );
}

export default App;
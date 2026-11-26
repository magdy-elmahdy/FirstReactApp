import './App.css';
import CourseCard from './components/CourseCard';
import Header from './components/layout/header';
import Footer from './components/layout/footer';


function App() {
  const coursesData = [
    {
      title: 'React Masterclass',
      lessions: 25,
      duration: 45,
      price: 1500,
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop',
      category: 'Frontend'
    },
    {
      title: 'Node.js Backend Development',
      lessions: 30,
      duration: 60,
      price: 2000,
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=250&fit=crop',
      category: 'Backend'
    },
    {
      title: 'Python for Data Science',
      lessions: 40,
      duration: 50,
      price: 1800,
      image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop',
      category: 'Data Science'
    }
  ];

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
        {coursesData.map((course, index) => (
          <CourseCard key={index} data={course} />
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
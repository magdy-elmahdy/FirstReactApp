import './App.css';
import CourseCard from './components/CourseCard';
import Header from './components/layout/header';
import Footer from './components/layout/footer';


function App() {

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
        <CourseCard title='React Masterclass' lessions={25}  duration={45} price={1500} image="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop" category='Frontend'/>
        <CourseCard title='Node.js Backend Development' lessions={40}  duration={60} price={25000} image="https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=250&fit=crop" category='Backend'/>
      </div>
      <Footer />
    </div>
  );
}

export default App;
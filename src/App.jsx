import './App.css';
import CourseCard from './components/CourseCard';





function App() {
  return (
    <>
    <CourseCard title="ReactJs" lessions={60} duration={10} price={100}/>
    <CourseCard title="JavaScript" lessions={50} duration={15} price={150}/>
    <CourseCard title="Python" lessions={70} duration={12} price={200}/>
    <CourseCard title="Java" lessions={80} duration={20} price={250}/>
    </>
  )

}
export default App;
import './App.css';




function CourseCard() {
  var course = {
    title: "ReactJs",
    lessions: 60,
    duration: 10,
    price: 100
  }
  return (
    <>
      <p className='Description'>{50 * 50}</p>
      <p>Couse Lessions : {course.lessions}</p>
      <p>Couse Lession Duration : {course.duration}</p>
      <p>Couse Duration in Minutes : <strong>{course.lessions * course.duration}</strong> Minute</p>
      <p>Couse Price is : <strong>{course.price}</strong> EGP</p>
    </>
  );
}

function App() {
  return (
    <>
    <CourseCard/>
    <CourseCard/>
    </>
  )

}
export default App;
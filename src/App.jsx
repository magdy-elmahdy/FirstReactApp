import './App.css';

function App(){
  const couseName="ReactJs";
  var courseInstructor="Magdy Elmahdy";
  var course = {
    title:"ReactJs",
    lessions:60, 
    duration:10
  }
  
  return (
    <>
      <h1>Learn {couseName} With {courseInstructor}</h1>
      <p className='Description'>{50*50}</p>
      <p>Couse Lessions : {course.lessions}</p>
      <p>Couse Lession Duration : {course.duration}</p>
      <p>Couse Duration in Minutes : <strong>{course.lessions * course.duration}</strong> Minute</p>
    </>
  );
}
export default App;
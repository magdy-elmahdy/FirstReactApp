function CourseCard(data) {
    console.log(data);
    

  return (
    <>
      {/* <p className='Description'>{50 * 50}</p> */}
      <h1> Corse Tile is : {data.title}</h1>
      <p>Couse Lessions : {data.lessions}</p>
      <p>Couse Lession Duration : {data.duration}</p>
      <p>Couse Duration in Minutes : <strong>{data.lessions * data.duration}</strong> Minute</p>
      <p>Couse Price is : <strong>{data.price}</strong> EGP</p>
    </>
  );
}
export default CourseCard;
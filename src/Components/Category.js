
const Category = ({cardData,onSelected}) => { 
  // console.log( cardData[0].name );
  return (
    <div>
      <h1>학습카테고리</h1>
      <div className="category-wrap">
        {
          cardData.map((item)=>{
            return <button key={item.id} onClick={()=>{onSelected(item)}}>{item.name}</button>
          })
        }
      </div>
    </div>
  );
};

export default Category;
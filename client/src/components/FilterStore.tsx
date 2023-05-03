import React,{useState} from 'react'
interface FilteredStoreProps {
  allData: () => void;
  categories: {idcategory: number;
  name: string;}[];
  filterBycategory: (value: number) => void;
  setPrice: (value: number | null) => void;
  setMinPrice: (value: number | null) => void;
 
 
}
const FilterStore = ({
  allData,
  categories,
  filterBycategory,
  setPrice,
  setMinPrice,
 
  
}: FilteredStoreProps)=> {
  const [selectedCategory, setSelectedCategory] = useState<string>("")
  return (
    <div className="col-md-2 text-center" style={{ borderRight: "1px solid black" }}>
      
        <h3 className="text-base  font-bold hover:text-orange-900 hover:underline underline-offset-2 cursor-pointer duration-300  justify-content-center " style={{ color: "#f1bc5b" }}>
                Categories
        </h3>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div className="text-center">
  <h6
    className={`text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 cursor-pointer duration-300 mb-2 ${
      selectedCategory === "" ? "text-red-500" : ""
    }`}
    onClick={allData}
  >
    All
  </h6>
</div>

        {categories.map((e, i) => (
          
          <h6
  className={`text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 cursor-pointer duration-300 mb-2 ${
    selectedCategory === e.name ? "text-orange-500" : ""
  } text-center`}
  key={i}
  onClick={() => {
    filterBycategory(e.idcategory);
  }}
>
  {e.name}
</h6>
        ))}
        <br/>
        <br/>&nbsp; 
        
        
        <h3 className="text-base  font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 text-center" style={{ color: "#f1bc5b" }}>
  Filter By Price
</h3>

        <br/>
        <div className="flex items-center mb-2">
        <input type="number" className="form-control" placeholder="minPrice" 
        onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setMinPrice(Number(e.target.value))}/>
        </div>
        <br/>
        <div className="flex items-center mb-2">
        <input type="number" className="form-control" placeholder="maxPrice" 
        onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setPrice(Number(e.target.value))}/></div>
        
      </div>
  )
}

export default FilterStore
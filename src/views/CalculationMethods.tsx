import { useContext } from "react";
import { FetchDataContext } from "../contexts/FetchDataContext";
import MethodSelect from "./DropDowns";


export default function CalculationMethod() {

    const fetchDataContext = useContext(FetchDataContext);
    if(!fetchDataContext){
        return null;
    }
    const methods: any = fetchDataContext.methods;
    if(methods === undefined){
      return null
    }
    const names = Object.values(methods).map((item: any) => item.name);

   return (
    <div>
       <MethodSelect values={names}/>
    </div>
   )

}
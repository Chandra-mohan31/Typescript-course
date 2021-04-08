import {Child} from "./Child";

const Parent = () => {
    return <Child color="blue" onClick={()=> console.log("clicked")}>
        hey there
    </Child>
    
}
export default Parent;
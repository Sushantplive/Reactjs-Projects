import ChildComponent from "./ChildComponent"

const ParentComponent = () => {
    console.log('this is parent')
    return (
        <div>
            {/* <ChildComponent color={color}/> */}
            <ChildComponent/>
        </div>
    )
}

export default ParentComponent;

const TaskComponent = (props) =>{
    const {index, text, checked,handleCheckboxChange, handDelete} =props;
    const styleValue = checked? 'line-through':'';
    return (
        <span>
            <li>
             <span style={{textDecoration:styleValue}}>{text}</span>
              <input type="checkbox" checked={checked} onChange={()=>handleCheckboxChange(index)} />
              <a onClick={()=>handDelete(index)}> ✖ </a>
            </li>
        </span>
    )
}

export default TaskComponent
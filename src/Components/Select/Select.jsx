import React from 'react';
import './Select.css'

function Select(props) {
    return (
        <form>
            
            <div className="form-group row" id="selectFormGroup">
            <div className="select-label">Select language</div>
                    <select className="form-control" id="select-language" value={props.value} onChange={props.onChange}>
                        <option value='polish'>Polish</option>
                        <option value='english'>English</option>
                    </select>
            </div>
        </form>
    );
}

export default Select;
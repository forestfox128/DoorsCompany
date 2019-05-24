import React from 'react';
import './Select.css'

function Select(props) {
    return (
        <form>
            <div class="form-group row">
                <label for="staticEmail" class="col-lg-6 col-form-label" className="select-label">Select language</label>
                <div class="col-lg-6">
                    <select class="form-control" id="select-language">
                        <option>Polish</option>
                        <option>English</option>
                    </select>
                </div>
            </div>
        </form>
    );
}

export default Select;
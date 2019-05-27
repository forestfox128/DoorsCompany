import React from 'react';
import {FormattedMessage} from 'react-intl';
import './Select.css'

function Select(props) {
    return (
        <form>

            <div className="form-group row" id="selectFormGroup">
                <div className="select-label"><FormattedMessage id="select.language.title"
                      defaultMessage="Select language"
                      values={{ what: 'react-intl' }}/>
                    </div>
                <select className="form-control" id="select-language" value={props.value} onChange={props.onChange}>
                    <option value='en'>English</option>
                    <option value='pl'>Polish</option>

                </select>
            </div>
        </form>
    );
}

export default Select;
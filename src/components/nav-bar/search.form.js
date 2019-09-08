import React from 'react'
import { Field, reduxForm } from 'redux-form'

let SearchForm = props => {
    const { handleSubmit } = props;
    return (
        <form className="form-inline my-2 my-lg-0" onSubmit={ handleSubmit }>
            <div>
                <Field className="form-control mr-sm-2 search" name="value" component="input" type="search" placeholder="Buscar" />
            </div>
        </form>
    )
};

SearchForm = reduxForm({
    form: 'search'
})(SearchForm);

export default SearchForm;

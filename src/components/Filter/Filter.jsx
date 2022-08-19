import shortId from "shortid"

import {  useGetContactsQuery } from "features/phoneBookSlice";
// useFilterContactsByNameQuery

const Filter = () => {
    
    const { data } = useGetContactsQuery();

    let result = [];

    const onChange = e => {
        const normalizedContact = e.target.value;
        for (const contact of data){
            if (contact.name.toLowerCase().includes(normalizedContact)) {
                result.push(contact.id);
                return result
            }
       }
    }
    
    // const {data: filter} = useFilterContactsByNameQuery(() => onChange())

    

    const filterInputId = shortId.generate();
    
    return (
        // <></>
        <label htmlFor={filterInputId}>
            Find contacts by name <br />
            <input type="text"
                name="filter"
                id={filterInputId}
                onChange={onChange}
                // value = {filter}
                />
        </label>
    )
}



export default Filter
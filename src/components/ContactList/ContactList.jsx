import { useGetContactsQuery, useDeleteContactMutation } from 'features/phoneBookSlice';

const ContactList = () => {
    
    const { data, error } = useGetContactsQuery();
    const [deleteContact] = useDeleteContactMutation();

    return (
        <ul>
            {data && !error && data.map(contact => (
            <li key={contact.id}>
            {contact.name}
            {contact.number}
                <button
                    type="button" id={contact.id}
                    onClick={() => deleteContact(contact.id)}
                >
                    Delete
                </button>    
            </li>))}
        </ul>
    )
}

export default ContactList

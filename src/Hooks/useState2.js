import React, {useState} from 'react'


const App = () => {
	const [inputData, setInput] = useState({firstName: "", lastName: ""})
	const [contactsData, setContacts] = useState([])

	const handleChange = (e) => {
		const { name, value } = e.target

		setInput(prevInput => ({...prevInput,[name]: value}))
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		setContacts(prevContact => [...prevContact, inputData])

	}
	const displayContacts = contactsData.map(contact => <h3 key={contact.firstName + contact.lastName}>{contact.firstName} {contact.lastName}</h3>)

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input 
					placeholder="First Name"
					name="firstName"
					value={inputData.firstName}
					onChange={handleChange}
				/>

				<input 
					placeholder="Last Name"
					name="lastName"
					value={inputData.lastName}
					onChange={handleChange}
				/>
				<br/>
				<button>Add to contacts</button>
			</form>
			{displayContacts}

		</>
	)
}

export default App
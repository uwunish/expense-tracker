import {
	Button,
	FormControl,
	FormLabel,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Radio,
	RadioGroup,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Transaction({ onClose, isOpen }) {
	const { formData, setFormData, value, setValue, handleFormSubmit } =
		useContext(GlobalContext);

	function handleFormChange(event) {
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		});
	}

	function handleSubmit(event) {
		event.preventDefault();
		handleFormSubmit(formData);
	}

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<form onSubmit={handleSubmit}>
				<ModalOverlay>
					<ModalContent>
						<ModalHeader>Add New Transaction</ModalHeader>
						<ModalCloseButton />
						<ModalBody>
							<FormControl>
								<FormLabel>Enter Description</FormLabel>
								<Input
									placeholder="Enter Transaction description"
									name="description"
									type="text"
									onChange={handleFormChange}
								/>
								<FormLabel>Enter Description</FormLabel>
								<Input
									placeholder="Enter Transaction Amount"
									name="amount"
									type="number"
									onChange={handleFormChange}
								/>
							</FormControl>
							<RadioGroup
								mt={"5"}
								value={value}
								onChange={setValue}>
								<Radio
									checked={formData.type === "income"}
									name="type"
									value="income"
									colorScheme="blue"
									onChange={handleFormChange}>
									Income
								</Radio>
								<Radio
									checked={formData.type === "expense"}
									name="type"
									value="expense"
									colorScheme="red"
									onChange={handleFormChange}>
									Expense
								</Radio>
							</RadioGroup>
						</ModalBody>
						<ModalFooter>
							<Button onClick={onClose} mr={"4"}>
								Cancel
							</Button>
							<Button onClick={onClose} type="submit">
								Add
							</Button>
						</ModalFooter>
					</ModalContent>
				</ModalOverlay>
			</form>
		</Modal>
	);
}

export default Transaction;

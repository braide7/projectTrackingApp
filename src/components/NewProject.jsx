import { useRef } from 'react'


import Modal from './Modal';
import Input from "./Input"

export default function NewProject({ onAddProject, onCancelProject }) {
    const modal = useRef();

    const titleRef = useRef();
    const descriptionRef = useRef();
    const dueDateRef = useRef();

    function handleSave() {
        const enteredTitle = titleRef.current.value
        const enteredDescription = descriptionRef.current.value
        const enteredDueDate = dueDateRef.current.value

        if (enteredTitle.trim() === '' ||
            enteredDescription.trim() === '' ||
            enteredDueDate.trim() === ''
        ) {
            modal.current.open();
            return;
        }

        onAddProject({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        });

    }

    return (
        <>
            <Modal ref={modal} buttonCaption="Okay" >
                <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
                <p className="text-stone-600 mb-4">Oops ... looks like you forgot to enter a value.</p>
                <p className="text-stone-600 mb-4">Please make sure you provide a valid input for every input field.</p>
            </Modal>
            <div className="w-[35rem] mt-16 " >
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li>
                        <button
                            className="text-stone-800 hover:text-stone-950"
                            onClick={onCancelProject}>
                            Cancel
                        </button>
                    </li>
                    <li>
                        <button
                            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                            onClick={handleSave}>
                            Save
                        </button>
                    </li>
                </menu>
                <div>
                    <Input ref={titleRef} label="Title" type="text" />
                    <Input ref={descriptionRef} label="Description" isTextArea />
                    <Input ref={dueDateRef} label="Due Date" type="date" />
                </div>
            </div>
        </>
    )
}
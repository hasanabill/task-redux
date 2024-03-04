import { useForm } from "react-hook-form";
import Modal from "../ui/Modal";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/tasks/taskSlice";


const AddTaskModal = ({ isOpen, setIsOpen }) => {

    const { register, handleSubmit, reset } = useForm();
    const dispatch = useDispatch();

    const onCancel = () => {
        reset()
        setIsOpen(false)
    }


    const onSubmit = (data) => {
        dispatch(addTask(data))
        onCancel();
    }

    return (
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={"Hero Programmer"}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col mb-5">
                    <label htmlFor="title" className="mb-2">Title</label>
                    <input className="w-full rounded-md" type="text" id="title" {...register("title")} />
                </div>
                <div className="flex flex-col mb-5">
                    <label htmlFor="description" className="mb-2">Description</label>
                    <textarea className="w-full rounded-md" type="text" id="description" {...register("description")} />
                </div>
                <div className="flex flex-col mb-5">
                    <label htmlFor="date" className="mb-2">Deadline</label>
                    <input className="w-full rounded-md" type="date" id="date" {...register("date")} />
                </div>
                <div className="flex flex-col mb-5">
                    <label htmlFor="date" className="mb-2">Assign to</label>
                    <select className="w-full rounded-md" id="assignedTo" {...register("assignedTo")}>
                        <option value={"Sadman"}>Sadman </option>
                        <option value={"Sajit"}>Sajit</option>
                        <option value={"Kamrul"}>Kamrul</option>
                        <option value={"Kabir"}>Kabir</option>
                        <option value={"Ahmed"}>Ahmed</option>
                    </select>
                </div>
                <div className="flex flex-col mb-5">
                    <label htmlFor="date" className="mb-2">Priority</label>
                    <select className="w-full rounded-md" id="priority" {...register("priority")}>
                        <option defaultValue value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                </div>

                <div className="flex gap-3 justify-end">
                    <button type="button" onClick={() => onCancel()} className="btn btn-danger">Cancel</button>
                    <button className="btn btn-primary" type="submit">Submit</button>
                </div>
            </form>
        </Modal>
    );
};

export default AddTaskModal;
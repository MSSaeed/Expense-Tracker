import { useForm } from "react-hook-form";

const AddTransaction = () => {
  let Form = useForm();
  const transaction = () => {};

  return (
    <>
      <div className="border text-center py-3">
        <h3 className="text-2xl font-semibold font-sans">Add New Transaction</h3>
      </div>
      <form className="px-5 " onSubmit={Form.handleSubmit(transaction)}>
        <div className="my-3">
          <label className="text-xl"> Title</label>
          <input
            className="border rounded p-2 w-full"
            placeholder="enter your amount"
            {...Form.register("Desc", { required: true })}
            type="text"
          />
        </div>

        <div className="my-3">
          <label className="text-xl"> Description</label>

          <input
            className="border rounded p-2 w-full"
            placeholder="enter your amount"
            {...Form.register("Desc", { required: true })}
            type="text"
          />
        </div>
        <div className="my-3">
          <label className="text-xl"> Amount</label>

          <input
            className="border rounded p-2 w-full"
            placeholder="Enter your  amount"
            {...Form.register("Amount", { required: true })}
            type="number"
          />
          <div className="my-3">
            <label className="text-lg">Transaction types</label>
            <select
              id="countries"
              className="outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            >
              
              
              <option value="FR">Income</option>
              <option value="DE">Expense</option>
            </select>
          </div>
        </div>
        <button className="border mb-3 bg-blue-500 rounded-lg text-white p-2 hover:bg-blue-600  transition duration-150 ease-in-out focus:bg-blue-600 active:bg-blue-500 ">
          Add Transaction
        </button>
      </form>
    </>
  );
};

export default AddTransaction;

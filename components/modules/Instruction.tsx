function Instruction() {
    return (
      <div className="mb-24">
        <h3 className="text-2xl text-brandColor my-6 font-bold">How to Order?</h3>
        <ul className="p-0">
          <li className="text-[1.1rem] font-medium leading-[30px] list-none before:*:text-brandColor">Sign in (or create an account) and set your delivery address.</li>
          <li className="text-[1.1rem] font-medium leading-[30px] list-none before:*:text-brandColor">Choose the restaurant you want to order from.</li>
          <li className="text-[1.1rem] font-medium leading-[30px] list-none before:*:text-brandColor">Select your items and tap “Add to Cart”.</li>
          <li className="text-[1.1rem] font-medium leading-[30px] list-none before:*:text-brandColor">To place your order, select “View cart” or “Checkout”.</li>
          <li className="text-[1.1rem] font-medium leading-[30px] list-none before:*:text-brandColor">Review your order and tap “Place Order”...</li>
          <li className="text-[1.1rem] font-medium leading-[30px] list-none before:*:text-brandColor">Track your order progress.</li>
        </ul>
      </div>
    );
  }
  
  export default Instruction;
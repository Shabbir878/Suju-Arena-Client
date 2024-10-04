const PaymentSuccess = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-semibold text-green-600 mb-4">
          Payment Successful!
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Thank you for your payment. Your transaction has been completed
          successfully.
        </p>
        <p className="text-gray-600 mb-8">
          You can check your account for details about your recent transactions.
        </p>
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <h2 className="text-xl font-semibold text-orange-600">
            Transaction Summary:
          </h2>
          <p className="text-gray-700">Amount: $[Transaction Amount]</p>
          <p className="text-gray-700">Date: [Transaction Date]</p>
          <p className="text-gray-700">Reference: [Transaction Reference]</p>
        </div>
        <a
          href="http://localhost:5173/"
          className="inline-block bg-orange-600 text-white font-semibold py-2 px-4 rounded transition duration-300 hover:bg-orange-500"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default PaymentSuccess;

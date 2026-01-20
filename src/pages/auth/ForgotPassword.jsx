import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

const ForgotPassword = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-96 bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
        <Input label="Email" />
        <Button>Send OTP</Button>
      </div>
    </div>
  );
};

export default ForgotPassword;

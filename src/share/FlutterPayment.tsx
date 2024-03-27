import { PayWithFlutterwave } from "flutterwave-react-native";

interface RedirectParams {
  status: "successful" | "cancelled";
  transaction_id?: string;
  tx_ref: string;
}

const handleOnRedirect = (data: RedirectParams) => {
  console.log(data);
};

const generateTransactionRef = (length: number) => {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return `flw_tx_ref_${result}`;
};

const FlutterPaymentComponent = () => (
  <PayWithFlutterwave
    onRedirect={handleOnRedirect}
    options={{
      tx_ref: generateTransactionRef(10),
      authorization: "FLWPUBK_TEST-293e60b9ce00262c33db22be4cba903d-X",
      customer: {
        email: "smartapp@example.com",
      },
      amount: 2000,
      currency: "NGN",
      payment_options: "card",
    }}
  />
);

export default FlutterPaymentComponent;

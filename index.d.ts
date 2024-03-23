declare type FeeStackNavigatorParamList = {
  FeeSelection: undefined;
  FeeSummary: undefined;
  FeeCheckout: undefined;
};
declare type PaymentStackNavigatorParamList = {
  FeeSummary: undefined;
};

declare type AuthStackNavigatorParamList = {
  Welcome: undefined;
  Register: undefined;
  Login: undefined;
  Verify: { token: string; email: string };
  ForgotPassword: undefined;
  PinVerification: { token: string; email: string };
};

declare type FeeScreenNavigationProp =
  NativeStackNavigationProp<FeeStackNavigatorParamList>;

declare type PaymentStackNavigationProp =
  NativeStackNavigationProp<PaymentStackNavigatorParamList>;

import LocalizedStrings from 'react-native-localization';

let strings = new LocalizedStrings({
   'en-US': {
      global: {
         newArtist: 'New Artist',
         buttonContinue: 'Continue',
      },
      otp: {
         inputNum: {
            header: 'Login with Phone',
            desc: "You'll receive a 4 digit code to verify next",
            placeholder: ' Enter your number',
         },
         verifyOtp: {
            header: 'Verify phone',
            decs: 'Code is sent to ',
            spanRequestAgain: " Did't receive code?",
            requestAgain: 'Request again',
            buttonVerify: ' Verify and Login',
         },
      },
      homePage: {
         AllArt: 'All Art',
         itemDetail: {
            myList: 'My List',
            unlock: 'UNLOCK',
         },
      },
      paymentPage: {
         header: 'Payment Options',
         titleCredit: 'Credit/Debit card',
         titlePaymentOptions: 'More payment options',
         saveCard: 'Save card',
      },
   },
   en: {
      global: {
         newArtist: 'New Artist',
         buttonContinue: 'Continue',
      },
      otp: {
         inputNum: {
            header: 'Login with Phone',
            desc: "You'll receive a 4 digit code to verify next",
            placeholder: ' Enter your number',
         },
         verifyOtp: {
            header: 'Verify phone',
            decs: 'Code is sent to ',
            spanRequestAgain: " Did't receive code?",
            requestAgain: 'Request again',
            buttonVerify: ' Verify and Login',
         },
      },
      homePage: {
         AllArt: 'All Art',
         itemDetail: {
            myList: 'My List',
            unlock: 'UNLOCK',
         },
      },
      paymentPage: {
         header: 'Payment Options',
         titleCredit: 'Credit/Debit card',
         titlePaymentOptions: 'More payment options',
         saveCard: 'Save card',
      },
   },
   vi: {
      global: {
         newArtist: 'Họa sĩ mới',
         buttonContinue: 'Tiếp theo',
      },
      otp: {
         inputNum: {
            header: 'Đăng nhập với điện thoại',
            desc: 'Bạn sẽ nhận 4 mã số để xác thực',
            placeholder: 'Nhập số điện thoại',
         },
         verifyOtp: {
            header: 'Xác thực điện thoại',
            decs: 'Mã sẽ gửi đến ',
            spanRequestAgain: ' Không nhận được mã?',
            requestAgain: 'Gửi yêu cầu lại',
            buttonVerify: 'Xác thực và đăng nhập',
         },
      },
      homePage: {
         AllArt: 'Tất cả các tác phẩm',
         itemDetail: {
            myList: 'Của tôi',
            unlock: 'MỞ',
         },
      },
      paymentPage: {
         header: 'Phương thức thanh toán',
         titleCredit: 'Thẻ tín dụng/ghi nợ',
         titlePaymentOptions: 'Thêm phương thức',
         saveCard: 'Lưu thẻ',
      },
   },
});
function setLanguageToVietNam() {
   strings.setLanguage('vi');
   console.log(strings.getLanguage());
}
function getCurrentLanguage() {
   console.log(strings.getLanguage());
   return strings.getLanguage();
}

export { setLanguageToVietNam, getCurrentLanguage };
export default strings;

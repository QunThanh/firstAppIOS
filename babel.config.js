module.exports = {
   presets: ['module:metro-react-native-babel-preset'],
   plugins: [
      [
         'module-resolver',
         {
            root: ['./src/'], // <-- here ✅
            alias: {
               '~': './src',
            },
            // alias: {
            //    '~': 'src',
            // },
         },
      ],
   ],
};

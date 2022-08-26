import React from "react";
// import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import Main from "./Main";
import {ChakraProvider, extendTheme, withDefaultColorScheme,} from '@chakra-ui/react'

// import reduxStore from "./redux/store";



ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={reduxStore}> */}
    <ChakraProvider
      theme={extendTheme(
        {
          fonts: {
            heading: 'Mulish',
            body: 'Mulish',
          },
          colors: {
            gray: {
              100: '#F4F4F4',
            },
            primary: {
              50: '#E5001C',
              100: '#E5001C',
              200: '#E5001C',
              300: '#E5001C',
              400: '#E5001C',
              500: '#E5001C',
              600: '#E5001C',
              700: '#E5001C',
              800: '#E5001C',
              900: '#E5001C',
            },
          },
          components: {
            Checkbox: {
              baseStyle: {
                control: {
                  _focus: {
                    boxShadow: 'none',
                  },
                },
              },
            },
          },
        },
        withDefaultColorScheme({
          colorScheme: 'primary',
          components: ['Checkbox'],
        })
      )}>
      <Main />
  </ChakraProvider>
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById("root")
);

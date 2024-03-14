import { render, screen ,fireEvent } from '@testing-library/react';
import Login from './components/login.component';

jest.mock("axios");
jest.mock('react-router-dom');


describe('My Test Suite',()=>{
test('Test case-1 [Finding Text in the UI]', ()=> {
  render(<Login/>);
  const element = screen.getByText("SignIn");
  expect(element).toBeInTheDocument();
})
test('Test case-2 [Render All UI]',()=>{
  render(<Login/>);
  const TextBox1=screen.getByTestId('txtEmail');
  const TextBox2=screen.getByTestId('txtPassword');
  const button=screen.getByTestId('btnSubmit');

  expect(TextBox1).toBeInTheDocument();
  expect(TextBox2).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});
test('Test case-3 [Render All the Labels ]',()=>{
  render(<Login/>);
  const element=screen.getByTestId('txtEmail')
  expect(element).toHaveTextContent("Email")
  const element1=screen.getByTestId('txtPassword')
  expect(element1).toHaveTextContent("Password")
  const element2=screen.getByTestId('btnSubmit')
  expect(element2).toHaveTextContent("Sign In")
});
test('Test case-4 [Testing Success Alert Result]',()=>{
  render(<Login/>);
  
  const result=screen.getByTestId("success");
  expect(result).toHaveTextContent("Login Successful");
});
test('Test case-5 [Testing Failure Alert Result]',()=>{
  render(<Login/>);
  
  const result1=screen.getByTestId("Failure");
  expect(result1).toHaveTextContent("Invalid email!");
  const result2=screen.getByTestId("Message");
  expect(result2).toHaveTextContent("Invalid password!");

});
test('Test case-6 [Testing with valid Inputs]',()=>{
  // render(<Login/>);

  // const text1 = screen.getByTestId("txtEmail");
  // const text2 = screen.getByTestId("txtPassword");
  // const button = screen.getByTestId("btnSubmit");
  // const successalert=screen.getByTestId("success");

  // fireEvent.change(text1,{target:{value:"snehasne0820@gmail.com"}});
  // fireEvent.change(text2,{target:{value:12345678}});
  // fireEvent.click(button);

  // expect(successalert).toBeInTheDocument();
  const{getByTestId} = render(<Login/>);
  const textBox1 = getByTestId('txtEmail');

  fireEvent.change(textBox1,{target:{value:'snehasne0820@gmail.com'}});

  expect(textBox1.value).toBe('snehasne0820@gmail.com');
})
});

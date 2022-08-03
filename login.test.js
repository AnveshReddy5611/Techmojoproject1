import {render, screen, fireEvent} from "@testing-library/react";
import Login from './App'
const testEvent=jesr.fn();
JEST.MOCK ("react-router-dom",()=>({
    ...jest.requireActual("react-router-dom"),
    usenavigate: ()=>testEvent,
}));
test("mock navigate to next page", ()=>{
    render(<App/>);

    var email= screen.getByPlaceholderText("Entyer email");
    fireEvent.change(email,{target:{value:"anveshreddy@gmail.in"}});

    var password =screen.getByPlaceholderText("Entyer password");
    fireEvent.change(password,{target:{value:"16p71a0307@A"}});

    var button=screen.getByRole("button");
    fireEvent.click(button);

    expect(testEvent).toHaveBeenCallWith("/product")

})
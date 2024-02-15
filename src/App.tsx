import Input from "./components/Input.tsx";
// import Button from "./components/Button.tsx";
import Container from "./components/Container.tsx";
import InputWithRef from "./components/InputWithRef.tsx";
import { useRef } from "react";
import Form, { type FormHandleProps } from "./components/Form.tsx";
import Button from "./components/Button.tsx";
function App() {
  const input = useRef<HTMLInputElement>(null);
  const customForm = useRef<FormHandleProps>(null);
  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
    customForm.current?.clear();
  }
  return (
    <main>
      <h1>Let's get started</h1>
      <Input id="name" label="Your Name" type="text" />
      <Input id="age" label="Your Age" type="number" />
      {/* <div>
        <Button el="button">A button</Button>
      </div>
      <div>
        <Button el="anchor" href="https://google.com">
          A link
        </Button>
      </div> */}
      <Container as="button" type="button" onClick={() => console.log("hello")}>
        Click Me
      </Container>
      <InputWithRef
        id="Song"
        label="Your favorite Song"
        type="text"
        ref={input}
      />
      <Form onSave={handleSave}>
        <Input type="text" label="Name" id="name" name="name" />
        <Input type="number" label="Age" id="age" name="age" />
        <div>
          <Button el="button">Save</Button>
        </div>
      </Form>
    </main>
  );
}

export default App;

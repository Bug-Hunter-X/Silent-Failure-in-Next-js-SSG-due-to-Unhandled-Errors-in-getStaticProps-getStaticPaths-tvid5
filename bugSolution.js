// bugSolution.js
import { getStaticProps } from 'next';

export default function MyComponent(props) {
  if (props.error) {
    return <div>Error: {props.error.message}</div>;
  }
  // ... rest of your component code
}

export async function getStaticProps(context) {
  try {
    // Your data fetching logic
    const data = await fetch('https://api.example.com/data'); //replace with your data fetching logic
    if (!data.ok) {
      const message = `An error has occured: ${data.status}`;
      console.error(message);
      throw new Error(message); 
    }
    const result = await data.json();
    return { props: { result } };
  } catch (error) {
    console.error('Error in getStaticProps:', error);
    return { props: { error } };
  }
}

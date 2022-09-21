import { useSigninCheck } from "reactfire";
import Channel from "./components/Channel";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/navbar";

export default function App() {
  const { status, data: signInCheckResult } = useSigninCheck();

  if (status === "loading") {
    return <span>loading...</span>;
  }

  return (
    <>
      <Navbar/>
      {signInCheckResult.signedIn && <Channel />}
    </>
  );
}

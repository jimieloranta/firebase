import { useAuth, useSigninCheck } from "reactfire";
import { signInWithGoogle, signOut } from "../utils/firebase/auth";
import Button from 'react-bootstrap/Button';

export default function SignInOutButton() {
  const { data: signInCheckResult } = useSigninCheck();
  const auth = useAuth();

  return signInCheckResult.signedIn ? (
    <>
    <Button variant="danger" onClick={() => signOut(auth)}>Sign out</Button>{' '}
    </>
  ) : (
    <>
    <Button variant="danger" onClick={() => SignInWithGoogle (auth)}>Sign in with Google</Button>{' '}
    </>
  );
}

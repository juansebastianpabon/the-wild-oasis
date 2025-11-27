import { useUser } from '../features/authentication/useUser';
import Spinner from '../ui/Spinner';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  align-items: center;
`;
function ProtectedRoute({ children }) {
  //1. Load authenticated user
  const navigate = useNavigate();
  const { isPending, isAuthenticated } = useUser();

  //2. If not authenticated, redirect to login page

  useEffect(
    function () {
      if (!isAuthenticated && !isPending) navigate('/login');
    },
    [isAuthenticated, isPending, navigate]
  );

  //3.  While loading, show a spinner
  if (isPending)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );
  //4. If authenticated, show the protected page
  if (isAuthenticated) return children;
}
export default ProtectedRoute;

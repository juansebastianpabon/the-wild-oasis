import { signup as signupApi } from '../../services/apiAuth';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export function useSignup() {
  const { mutate: signup, isPending } = useMutation({
    mutationFn: signupApi,
    onSuccess: (data) => {
      console.log(data);
      toast.success(
        'Account created successfully! Please check your email to verify your account.'
      );
    },
  });
  return { signup, isPending };
}

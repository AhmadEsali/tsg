import Typography from 'components/UI/Typography';
import {
  CopyRightContainer,
  Form,
  ImageContainer,
  LoginContainer,
  LoginFormContainer,
} from './login.styles';
import { Texts } from 'constants/texts';
import { CopyRight } from 'components/icons';
import AppInput from 'components/UI/AppInput';
import PasswordInput from 'components/UI/PasswordInput';
import { useForm } from 'react-hook-form';
import AppLink from 'components/UI/AppLink';
import AppButton from 'components/UI/AppButton';
import LogoWhite from 'assets/img/logo-white.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAppDispatch } from 'store';
import { login } from 'store/slices/auth';
import toast from 'react-hot-toast';

const Login = () => {
  const [submitLoading, setSubmitLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // hooks
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleFormSubmit = (data) => {
    setSubmitLoading(true);
    dispatch(login(data))
      .unwrap()
      .then((response) => {
        console.log('🚀 ~ file: LoginForm.tsx:60 ~ .then ~ response:', response.metaData);
        if (response?.metaData?.status === 200) {
          navigate('/');
        }
      })
      .catch((error) => {
        console.log('🚀 ~ handleFormSubmit ~ error:', error);
        toast.error(error?.response?.data?.metaData?.message || 'Something went wrong');
      })
      .finally(() => setSubmitLoading(false));
  };

  return (
    <LoginContainer>
      <ImageContainer>
        <img src={LogoWhite} alt='logo' />
        <Typography variant='h1' size='2.4rem' color='nblue-1' weight={400}>
          {Texts['loginText']}
        </Typography>

        <CopyRightContainer>
          <CopyRight />
          <Typography variant='h6' color='nblue-1'>
            {new Date().getFullYear()} {Texts['copyRight']}
          </Typography>
          <span>|</span>
          <a href='https://www.google.com/' target='_blank' rel='noreferrer'>
            {Texts['terms']}
          </a>
          <span>|</span>
          <a href='https://www.google.com/' target='_blank' rel='noreferrer'>
            {Texts['cookies']}
          </a>
          <span>|</span>
          <a href='https://www.google.com/' target='_blank' rel='noreferrer'>
            {Texts['privacy']}
          </a>
        </CopyRightContainer>
      </ImageContainer>
      <LoginFormContainer>
        <Typography variant='h1' size='3.2rem' color='navy-11' weight={700}>
          {Texts['login']}
        </Typography>

        <Form onSubmit={handleSubmit(handleFormSubmit)}>
          <AppInput
            name='username'
            label='usernameLabel'
            placeHolder='usernamePlaceholder'
            register={register}
            errors={errors}
          />
          <PasswordInput
            label='passwordLabel'
            placeHolder='passwordPlaceholder'
            register={register}
            errors={errors}
          />

          <AppLink link='/' type='href'>
            {Texts['forgotPassword']}
          </AppLink>

          <AppButton loader={submitLoading} disabled={submitLoading}>
            {Texts['login']}
          </AppButton>
        </Form>
      </LoginFormContainer>
    </LoginContainer>
  );
};

export default Login;

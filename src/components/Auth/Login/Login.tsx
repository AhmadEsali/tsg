import Typography from 'components/UI/Typography';
import {
  CopyRightContainer,
  Form,
  ImageContainer,
  LoginContainer,
  LoginFormContainer,
  SocialContainer,
} from './login.styles';
import { Texts } from 'constants/texts';
import { CopyRight, Facebook, Instagram, Linkedin, Twitter } from 'components/icons';
import AppInput from 'components/UI/AppInput';
import PasswordInput from 'components/UI/PasswordInput';
import { useForm } from 'react-hook-form';
import AppLink from 'components/UI/AppLink';
import AppButton from 'components/UI/AppButton';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data) => {
    console.log(data);
  };

  return (
    <LoginContainer>
      <ImageContainer>
        <Typography variant='h1' size='2.4rem' color='nblue-1' weight={400}>
          {Texts['loginText']}
        </Typography>
        <SocialContainer>
          <a href='https://www.facebook.com' target='_blank' rel='noreferrer'>
            <Facebook />
          </a>

          <a href='https://www.instagram.com' target='_blank' rel='noreferrer'>
            <Instagram />
          </a>

          <a href='https://www.twitter.com' target='_blank' rel='noreferrer'>
            <Twitter />
          </a>

          <a href='https://www.linkedin.com' target='_blank' rel='noreferrer'>
            <Linkedin />
          </a>
        </SocialContainer>
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

          <AppButton>{Texts['login']}</AppButton>
        </Form>
      </LoginFormContainer>
    </LoginContainer>
  );
};

export default Login;

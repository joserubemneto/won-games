import { Email as EmailIcon } from '@styled-icons/material-outlined/Email'
import { Lock as LockIcon } from '@styled-icons/material-outlined/Lock'
import Link from 'next/link'
import TextField from 'components/TextField'
import Button from 'components/Button'
import { FormWrapper, FormLink } from 'components/Form'
import * as S from './styles'

const FormSignIn = () => (
  <FormWrapper>
    <form>
      <TextField
        name="email"
        placeholder="Email"
        type="email"
        icon={<EmailIcon />}
      />

      <TextField
        name="password"
        placeholder="Password"
        type="password"
        icon={<LockIcon />}
      />

      <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>

      <Button fullWidth size="large">
        Sign in now
      </Button>

      <FormLink>
        Don't have an account?{' '}
        <Link href="/sign-up">
          <a>Sign up</a>
        </Link>
      </FormLink>
    </form>
  </FormWrapper>
)

export default FormSignIn

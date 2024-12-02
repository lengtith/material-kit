export const paths = {
  home: '/project',
  auth: { signIn: '/auth/sign-in', signUp: '/auth/sign-up', resetPassword: '/auth/reset-password' },
  dashboard: {
    project: '/project',
    visualize: '/visualize',
    dataset: '/dataset',
    helps: '/helps',
  },
  errors: { notFound: '/errors/not-found' },
} as const;

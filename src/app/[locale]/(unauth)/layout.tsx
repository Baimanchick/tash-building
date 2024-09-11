import { BaseTemplate } from '@/templates/BaseTemplate';

export default function Layout(props: { children: React.ReactNode }) {
  // const t = useTranslations('RootLayout');

  return <BaseTemplate>{props.children}</BaseTemplate>;
}

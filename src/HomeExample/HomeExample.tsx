import { ComponentExample } from '`@/components/ComponentExample/Component`';
import { ContainerExample, PageTitle } from './_homeExample';

interface IHomeExample {
  pageTitle: string;
}

export const HomeExample = ({ pageTitle }: IHomeExample) => {
  return (
    <ContainerExample data-com="ContainerExample">
      <PageTitle data-com="PageTitle">{pageTitle}</PageTitle>
      <ComponentExample />
    </ContainerExample>
  );
};

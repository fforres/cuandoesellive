import { Home } from "../Features/Home";
import { Page } from "../Components/Page";
import { ModalCalendar } from "../Components/Modal";

export default () => {
  return (
    <Page>
      <ModalCalendar/>
      <Home title="30 días de react - “Estilando nuestros pokemones con CSS in JS”" />
    </Page>
  );
};

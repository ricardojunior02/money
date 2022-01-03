import { Container, Content } from "./styles";
import logo from "../../assets/logo.svg";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export const Header = (props: HeaderProps) => {
  return (
    <Container>
      <Content>
        <img src={logo} alt="Logo dtmoney" />
        <button onClick={props.onOpenNewTransactionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
};

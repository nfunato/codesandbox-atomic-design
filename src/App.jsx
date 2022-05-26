import { BrowserRouter } from "react-router-dom";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import { HeaderOnly } from "./components/templates/HeaderOnly";
import { DefaultLayout } from "./components/templates/DefaultLayout";
import "./styles.css";

const user = {
  name: "わしじゃ",
  image: "https://source.unsplash.com/gKXKBY-C-Dk",
  email: "12345@example.com",
  phone: "1234-5679-9999",
  company: {
    name: "テスト株式会社"
  },
  website: "https://google.com"
};

export default function App() {
  return (
    <BrowserRouter>
      <DefaultLayout>
        <PrimaryButton>テスト</PrimaryButton>
        <SecondaryButton>検索</SecondaryButton>
        <br />
        <SearchInput />
        <UserCard user={user} />
      </DefaultLayout>
    </BrowserRouter>
  );
}

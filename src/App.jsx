import { Router } from "./router/Router";
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
  return <Router />;
}

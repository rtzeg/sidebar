import React from 'react'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./components/Sidebar";
import ThemeWrapper from "./components/Sidebar/ThemeWrapper";
library.add(fas);

export default class App extends React.Component {
  render() {
    return (
      <ThemeWrapper color="light">
        <Sidebar />
      </ThemeWrapper>
    )
  }
}

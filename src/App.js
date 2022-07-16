import React, { Component } from "react";
import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import { OfflineAlert } from "./Alert";
import "./nprogress.css";
import WelcomeScreen from "./WelcomeScreen";
import { getEvents, extractLocations, checkToken, getAccessToken } from "./api";

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    showWelcomeScreen: undefined,
  };

  async componentDidMount() {
    const accessToken = localStorage.getItem("access_token");
    let isTokenValid;
    if (accessToken && !navigator.onLine) {
      isTokenValid = true;
    } else {
      isTokenValid = (await checkToken(accessToken)).error ? false : true;
    }
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if (code || isTokenValid) {
      getEvents().then((events) => {
        this.setState({ events, locations: extractLocations(events) });
      });
    }

    if (!navigator.onLine) {
      this.setState({
        offlineText: "You are offline. You are viewing cached data.",
      });
    } else {
      this.setState({
        offlineText: "",
      });
    }
  }

  componentWillUnmount() {}

  updateEvents = (location, eventCount) => {
    if (!location) location = "all";
    !eventCount
      ? (eventCount = this.state.numberOfEvents)
      : this.setState({ numberOfEvents: eventCount });
    getEvents().then((events) => {
      const locationEvents =
        location === "all"
          ? events
          : events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents.slice(0, eventCount),
      });
    });
  };

  render() {
    if (this.state.showWelcomeScreen === undefined)
      return <div className="App" />;
    const { offlineText } = this.state;
    return (
      <div className="App">
        <h1>Meet App</h1>
        <OfflineAlert text={offlineText} />
        <CitySearch
          locations={this.state.locations}
          updateEvents={this.updateEvents}
        />
        <NumberOfEvents
          numberOfEvents={this.state.numberOfEvents}
          updateEvents={this.updateEvents}
        />
        <EventList events={this.state.events} />
        <WelcomeScreen
          showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => {
            getAccessToken();
          }}
        />
      </div>
    );
  }
}
export default App;

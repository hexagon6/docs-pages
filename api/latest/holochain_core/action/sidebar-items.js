initSidebarItems({"enum":[["Action","All Actions for the Holochain Instance Store, according to Redux pattern."]],"struct":[["ActionWrapper","Wrapper for actions that provides a unique ID The unique ID is needed for state tracking to ensure that we can differentiate between two Action dispatches containing the same value when doing \"time travel debug\". The standard approach is to drop the ActionWrapper into the key of a state history HashMap and use the convenience unwrap_to! macro to extract the action data in a reducer. All reducer functions must accept an ActionWrapper so all dispatchers take an ActionWrapper."]],"type":[["AgentReduceFn","function signature for action handler functions"],["NetworkReduceFn",""],["NucleusReduceFn",""],["ReduceFn",""]]});
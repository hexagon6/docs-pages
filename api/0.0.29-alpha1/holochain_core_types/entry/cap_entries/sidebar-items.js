initSidebarItems({"enum":[["CapabilityType","Enum for CapabilityType.  Public capabilities require public grant token.  Transferable capabilities require a token, but don't limit the capability to specific agent(s); this functions like a password in that you can give the token to someone else and it works. Assigned capabilities check the request's signature against the list of agents to which the capability has been granted."],["ReservedCapabilityId","Enumeration of all Capabilities known and used by HC Core Enumeration converts to str"]],"struct":[["CapTokenClaim","System entry to hold a capability token claim for use as a caller"],["CapTokenGrant","System entry to hold a capabilities granted by the callee"]],"type":[["CapFunctions","a collection functions by zome name that are authorized within a capability"],["CapTokenValue",""]]});
initSidebarItems({"enum":[["EntryAction",""],["EntryLifecycle",""],["LinkAction",""],["LinkDirection",""],["ValidationPackageDefinition",""]],"macro":[["define_zome","Every Zome must utilize the `define_zome` macro in the main library file in their Zome. The `define_zome` macro has 3 component parts: 1. entries: an array of ValidatingEntryType as returned by using the entry macro 2. genesis: `genesis` is a callback called by Holochain to every Zome implemented within a DNA.     It gets called when a new agent is initializing an instance of the DNA for the first time, and     should return `Ok` or an `Err`, depending on whether the agent can join the network or not. 3. functions: `functions` is divided up into `capabilities`, which specify who can access those functions.     `functions` must be a tree structure where the first children are `capabilities`     and the children of those `capabilities` are actual function definitions. # Examples"],["entry","The `entry` macro is a helper for creating `ValidatingEntryType` definitions for use within the define_zome macro. It has 7 component parts: 1. name: `name` is simply the descriptive name of the entry type, such as \"post\", or \"user\".      It is what must be given as the `entry_type_name` argument when calling commit_entry and the other data read/write functions. 2. description: `description` is something that is primarily for human readers of your code, just describe this entry type 3. sharing: `sharing` defines what distribution over the DHT, or not, occurs with entries of this type, possible values      are defined in the Sharing enum 4. native_type: `native_type` references a given Rust struct, which provides a clear schema for entries of this type. 5. validation_package: `validation_package` is a special identifier, which declares which data is required from peers      when attempting to validate entries of this type.      Possible values are found within ValidationPackageDefinition 6. validation: `validation` is a callback function which will be called any time that a      (DHT) node processes or stores this entry, triggered through actions such as commit_entry, update_entry, remove_entry.      It always expects two arguments, the first of which is the entry attempting to be validated,      the second is the validation `context`, which offers a variety of metadata useful for validation.      See ValidationData for more details. 7. links: `links` is a vector of link definitions represented by `ValidatingLinkDefinition`.     Links can be defined with the `link!` macro or, more concise, with either the `to!` or `from!` macro,     to define an association pointing from this entry type to another, or one that points back from     the other entry type to this one.     See link!, to! and from! for more details. # Examples The following is a standalone Rust file that exports a function which can be called to get a `ValidatingEntryType` of a \"post\". ```rust # #![feature(try_from)] # extern crate boolinator; # extern crate serde_json; # #[macro_use] # extern crate hdk; # #[macro_use] # extern crate holochain_core_types_derive; # #[macro_use] # extern crate serde_derive; # use boolinator::*; # use hdk::entry_definition::ValidatingEntryType; # use hdk::holochain_core_types::{ #   cas::content::Address, #   dna::entry_types::Sharing, #   json::JsonString, #   error::HolochainError, # };"],["from","The `from` macro is a helper for creating `ValidatingEntryType` definitions for use within the entry macro. It is a convenience wrapper around link! that has all the same properties except for the direction which gets set to `LinkDirection::From`."],["link","The `link` macro is a helper for creating `ValidatingEntryType` definitions for use within the entry macro. It has 5 component parts: 1. direction: `direction` defines if this entry type (in which the link is defined) points     to another entry, or if it is referenced from another entry.     The latter is needed in cases where the definition of the entry to link from is not     accessible because it is a system entry type (AGENT_ADDRESS), or the other entry is     defined in library zome.     Must be of type LinkDirection, so either `hdk::LinkDirection::To`     or `hdk::LinkDirection::From`. 2. other_type: `other_type` is the entry type this link connects to. If direction is `to` this     would be the link target, if direction is `from` this defines the link's base type. 3. tag: `tag` is the name of this association and thus the handle by which it can be retrieved     if given to get_links() in conjunction with the base address. 4. validation_package: Similar to entries, links have to be validated.        `validation_package` is a special identifier, which declares which data is required from peers         when attempting to validate entries of this type.         Possible values are found within ValidationPackageDefinition 5. validation: `validation` is a callback function which will be called any time that a         (DHT) node processes or stores a link of this kind, triggered through the link actions link_entries and remove_link.         It always expects three arguments, the first being the base and the second the target of the link.         The third is the validation `context`, which offers a variety of metadata useful for validation.         See ValidationData for more details."],["load_string",""],["to","The `to` macro is a helper for creating `ValidatingEntryType` definitions for use within the entry macro. It is a convenience wrapper around link! that has all the same properties except for the direction which gets set to `LinkDirection::To`."]],"mod":[["api",""],["entry_definition",""],["error",""],["global_fns",""],["globals","Holds the internal/private globals used by the zome api library. Also contains the functions declarations of the external functions provided by the Ribosome."],["init_globals","Holds the internal/private zome API function `init_globals` which initializes the Zome API Globals with the values it receives from the Ribosome. It is automatically called at startup of each Zome function call."],["macros",""],["meta",""]],"struct":[["EntryValidationArgs",""],["LinkValidationArgs",""],["LinkValidationPackageArgs",""],["ValidationData","This structs carries information contextual for the process of validating an entry of link and is passed in to the according callbacks."],["ValidationPackage",""]]});
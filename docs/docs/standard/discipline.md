---
sidebar_position: 2
title: Basic Discipline
---

# Basic Discipline

The basic discipline service (DisciplineService) serves as the foundation for
all types of disciplines within Philote:

```protobuf
service DisciplineService {
    // Gets the fundamental properties of the discipline
    rpc GetInfo(google.protobuf.Empty) returns (philote.DisciplineProperties) {}

    // RPC to set remote streaming options
    rpc SetStreamOptions(philote.StreamOptions) returns (google.protobuf.Empty) {}

    // Sets the discipline options
    rpc SetOptions(philote.DisciplineOptions) returns (google.protobuf.Empty) {}

    // Sets up the discipline
    rpc Setup(google.protobuf.Empty) returns (google.protobuf.Empty) {}

    // Gets the variable definitions for the discipline
    rpc GetVariableDefinitions(google.protobuf.Empty) returns (stream philote.VariableMetaData) {}

    // Gets the discipline partials definitions
    rpc GetPartialDefinitions(google.protobuf.Empty) returns (stream philote.PartialsMetaData) {}
}
```

In a typical object-oriented framework the DisciplineService would serve as a
base class from which all disciplines would be inherited. However, gRPC and
protobuf do not support inheritance, so a similar effect is achieved by
[composition](https://en.wikipedia.org/wiki/Composition_over_inheritance). This
must be considered when developing interfaces and language specific bindings
that implement the Philote standard, but do not need to be exposed to users.

## GetInfo
The GetInfo function enables the client to retrieve the discipline properties in
the form of a DisciplineProperties message. This message contains information
about if the discipline is continuous, differentiable, and if it provides
derivatives.


## SetStreamOptions
The SetStreamOptions function transmits the streaming options from the client to
the server. This currently only consists of the chunk size for continuous
arrays. However, future iterations may need to expand the number of stream
options used by the standard.

## SetOptions

The SetOptions function is used by the client to set any discipline options
required by the server. This typically needs to be done before running a
function evaluation, but likely after calling Setup (though this likely depends
on the discipline).

## Setup

The setup remote procedure call (`RPC`) enables the MDO framework to query the
analysis server for information about inputs and outputs. Frameworks, such as
OpenMDAO, may use this to allocate the variable and define units. However, in
general, this RPC is optional (for the MDO framework). It should still be
implemented by the analysis server, to avoid compatibility issues when switching
between MDO frameworks.

## GetVariableDefinitions

The GetVariableDefinitions function retrieves variable (inputs and outputs)
metadata from the server for the client. This is needed for preallocation, etc.

## GetPartialDefinitions

The GetPartialDefinitions function retrieves partials metadata from the server
for the client. This is needed for preallocation, etc.

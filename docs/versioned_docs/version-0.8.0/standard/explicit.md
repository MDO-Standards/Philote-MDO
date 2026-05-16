---
sidebar_position: 3
title: Explicit Disciplines
---

# Explicit Disciplines

The previous section described how data is represented by Philote. Individual
disciplines are described as a service. This section describes the conventions
for the `ExplicitDiscipline`:

```protobuf
service ExplicitService {
    // Calls the discipline Compute function
    rpc ComputeFunction(stream Array) returns (stream Array) {}

    // Calls the discipline ComputePartials function
    rpc ComputeGradient(stream Array) returns (stream Array) {}
}
```


## ComputeFunction

The most basic RPC required by an MDO framework is a function evaluation. The
Compute RPC sends the input variables (`Variables`, chunked) to the analysis
server. The server then conducts a function evaluation and assigns output data
to a Variables datatype, chunks it, and streams the chunks back over the wire to
the MDO framework.


## Compute Gradient

This RPC enables the MDO framework to query the discipline derivatives.
Naturally, not all disciplines are differentiable or meant to be used in
gradient-based optimization. As such, this function is optional.

Inputs are sent to the analysis server as a stream of chunks containing a
Variables datatype. After the analysis server has evaluated and assigned the
derivatives, the are returned (chunked) as a Partials datatypes.
